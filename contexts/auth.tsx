import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter, useSegments } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';
import { useToast } from '@/hooks/useToast';
import { View } from 'react-native';
import { COLORS } from '@/constants/DesignSystem';

// Tipos
type AuthContextData = {
  session: Session | null;
  isLoading: boolean;
  isInitialized: boolean;
  signUp: (data: { email: string; password: string; name: string }) => Promise<void>;
  signIn: (data: { email: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
};

// Criação do contexto
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// Provider
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const router = useRouter();
  const segments = useSegments();
  const { showToast } = useToast();

  useEffect(() => {
    // Monitora mudanças na sessão
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
      setIsInitialized(true);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      // Verifica se existe uma sessão
      if (session) {
        try {
          // Tenta buscar o usuário para verificar se a conta ainda existe
          const { data: user, error } = await supabase.auth.getUser();
          
          if (error || !user) {
            console.error('Erro ao verificar usuário:', error);
            showToast({
              type: 'info',
              message: 'Conta não encontrada',
              description: 'Sua conta foi excluída. Você será desconectado.',
            });
            
            // Se houver erro ou o usuário não existir, faz logout
            await signOut();
            return;
          }
        } catch (error) {
          console.error('Erro ao verificar usuário:', error);
        }
      }
      
      setSession(session);
    });

    // Cleanup da subscription
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (!session && !inAuthGroup) {
      router.replace('/(auth)/login');
    } else if (session && inAuthGroup) {
      router.replace('/(tabs)/dash');
    }
  }, [session, segments, isInitialized]);

  useEffect(() => {
    if (!session) return;

    // Verifica a existência da conta a cada 5 minutos
    const checkInterval = setInterval(async () => {
      try {
        const { data: user, error } = await supabase.auth.getUser();
        
        if (error || !user) {
          console.error('Erro ao verificar usuário:', error);
          showToast({
            type: 'info',
            message: 'Conta não encontrada',
            description: 'Sua conta foi excluída. Você será desconectado.',
          });
          
          await signOut();
        }
      } catch (error) {
        console.error('Erro ao verificar usuário:', error);
      }
    }, 5 * 60 * 1000); // 5 minutos

    return () => {
      clearInterval(checkInterval);
    };
  }, [session]);

  const signUp = async ({ email, password, name }: { email: string; password: string; name: string }) => {
    try {
      setIsLoading(true);
      
      const emailLowerCase = email.toLowerCase().trim();

      // Verifica se o usuário já existe usando signInWithPassword
      const { error: checkError } = await supabase.auth.signInWithPassword({
        email: emailLowerCase,
        password: 'dummy-password-for-check',
      });

      // Se não retornar erro de credenciais inválidas, significa que o email existe
      if (!checkError || !checkError.message.includes('Invalid login credentials')) {
        showToast({
          type: 'info',
          message: 'Email já cadastrado',
          description: 'Uma conta com este email já existe. Por favor, faça login.',
        });
        
        setTimeout(() => {
          router.replace('/(auth)/login');
        }, 1500);
        return;
      }

      // Tenta criar o usuário
      const { data, error } = await supabase.auth.signUp({
        email: emailLowerCase,
        password,
        options: {
          data: {
            name,
            display_name: name,
          },
          emailRedirectTo: window.location.origin
        }
      });

      if (error) {
        console.error('Erro no cadastro:', error);

        if (error.message?.toLowerCase().includes('password')) {
          showToast({
            type: 'error',
            message: 'Senha inválida',
            description: 'A senha deve ter pelo menos 6 caracteres.',
          });
          return;
        }

        if (error.message?.toLowerCase().includes('email')) {
          showToast({
            type: 'error',
            message: 'Email inválido',
            description: 'Por favor, insira um email válido.',
          });
          return;
        }

        showToast({
          type: 'error',
          message: 'Erro no cadastro',
          description: 'Ocorreu um erro inesperado. Por favor, tente novamente.',
        });
        return;
      }

      if (!data.user) {
        showToast({
          type: 'error',
          message: 'Erro no cadastro',
          description: 'Não foi possível criar sua conta. Por favor, tente novamente.',
        });
        return;
      }

      showToast({
        type: 'success',
        message: 'Conta criada com sucesso!',
        description: 'Redirecionando para o login...',
      });

      setTimeout(() => {
        router.replace('/(auth)/login');
      }, 1500);

    } catch (error) {
      console.error('Erro de conexão:', error);
      showToast({
        type: 'error',
        message: 'Erro de conexão',
        description: 'Verifique sua conexão com a internet e tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async ({ email, password }: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      
      const emailLowerCase = email.toLowerCase().trim();

      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailLowerCase,
        password,
      });

      if (error) {
        if (error.message?.toLowerCase().includes('invalid login credentials')) {
          showToast({
            type: 'error',
            message: 'Credenciais inválidas',
            description: 'Email ou senha incorretos.',
          });
          return;
        }

        showToast({
          type: 'error',
          message: 'Erro no login',
          description: 'Ocorreu um erro inesperado. Por favor, tente novamente.',
        });
        return;
      }

      if (!data?.session) {
        showToast({
          type: 'error',
          message: 'Erro no login',
          description: 'Não foi possível iniciar sua sessão. Por favor, tente novamente.',
        });
        return;
      }

      setSession(data.session);

      showToast({
        type: 'success',
        message: 'Login realizado com sucesso!',
        description: 'Bem-vindo de volta!',
      });

      setTimeout(() => {
        router.replace('/(tabs)/dash');
      }, 1000);

    } catch (error) {
      console.error('Erro de conexão:', error);
      showToast({
        type: 'error',
        message: 'Erro de conexão',
        description: 'Verifique sua conexão com a internet e tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Erro no logout:', error);
        showToast({
          type: 'error',
          message: 'Erro ao sair',
          description: 'Não foi possível fazer logout. Por favor, tente novamente.',
        });
        return;
      }

      setSession(null);

      showToast({
        type: 'success',
        message: 'Logout realizado',
        description: 'Você foi desconectado com sucesso.',
      });

      router.replace('/(auth)/login');

    } catch (error) {
      console.error('Erro no logout:', error);
      showToast({
        type: 'error',
        message: 'Erro de conexão',
        description: 'Verifique sua conexão com a internet e tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isInitialized) {
    return (
      <View 
        style={{ 
          flex: 1, 
          backgroundColor: COLORS.light.background // Usando light por padrão para o splash
        }} 
      />
    );
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        isLoading,
        isInitialized,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}; 
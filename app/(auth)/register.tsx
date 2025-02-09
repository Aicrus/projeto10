import { useState } from 'react';
import { StyleSheet, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { COLORS, SPACING, BORDER_RADIUS } from '@/constants/DesignSystem';
import { useTheme } from '@/hooks/ThemeContext';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useWindowDimensions } from 'react-native';
import { getTypographyForBreakpoint } from '@/constants/DesignSystem';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/useToast';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const { currentTheme } = useTheme();
  const { width } = useWindowDimensions();
  const typography = getTypographyForBreakpoint(width);
  const { signUp, isLoading } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();

  const handleRegister = async () => {
    try {
      // Validações
      if (!nome || !email || !senha || !confirmarSenha) {
        showToast({
          type: 'warning',
          message: 'Campos obrigatórios',
          description: 'Por favor, preencha todos os campos.',
        });
        return;
      }

      if (senha !== confirmarSenha) {
        showToast({
          type: 'error',
          message: 'Senhas diferentes',
          description: 'As senhas não coincidem.',
        });
        return;
      }

      if (senha.length < 6) {
        showToast({
          type: 'warning',
          message: 'Senha muito curta',
          description: 'A senha deve ter pelo menos 6 caracteres.',
        });
        return;
      }

      await signUp({ email, password: senha, name: nome });
      showToast({
        type: 'success',
        message: 'Cadastro realizado!',
        description: 'Sua conta foi criada com sucesso. Faça login para continuar.',
      });
      
      // Navega para a tela de login após um pequeno delay para o usuário ver a mensagem de sucesso
      setTimeout(() => {
        router.replace('/login');
      }, 1500);
    } catch (error: any) {
      // Log detalhado do erro para debug
      console.error('Erro detalhado no cadastro:', {
        message: error.message,
        code: error.code,
        details: error.details,
        status: error.status,
        name: error.name,
        error: error
      });

      if (error.message === 'EMAIL_ALREADY_EXISTS') {
        showToast({
          type: 'info',
          message: 'Email já cadastrado',
          description: 'Uma conta com este email já existe. Por favor, faça login para acessar.',
        });
        
        setTimeout(() => {
          router.replace('/login');
        }, 2000);
        return;
      }

      // Tratamento específico para erros do Supabase
      if (error?.message?.toLowerCase().includes('invalid email') || 
          error?.message?.toLowerCase().includes('email format is invalid')) {
        showToast({
          type: 'error',
          message: 'Email inválido',
          description: 'Por favor, insira um endereço de email válido.',
        });
        return;
      }

      if (error?.message?.toLowerCase().includes('password') && 
          error?.message?.toLowerCase().includes('characters')) {
        showToast({
          type: 'error',
          message: 'Senha inválida',
          description: 'A senha deve ter pelo menos 6 caracteres.',
        });
        return;
      }

      if (error?.message?.toLowerCase().includes('network') || 
          error?.message?.toLowerCase().includes('connection') ||
          error?.code === 'NETWORK_ERROR') {
        showToast({
          type: 'error',
          message: 'Erro de conexão',
          description: 'Verifique sua conexão com a internet e tente novamente.',
        });
        return;
      }

      if (error?.message?.toLowerCase().includes('timeout')) {
        showToast({
          type: 'error',
          message: 'Tempo excedido',
          description: 'O servidor demorou para responder. Por favor, tente novamente.',
        });
        return;
      }

      if (error?.message?.toLowerCase().includes('rate limit') || 
          error?.status === 429) {
        showToast({
          type: 'error',
          message: 'Muitas tentativas',
          description: 'Por favor, aguarde alguns minutos antes de tentar novamente.',
        });
        return;
      }

      // Se chegou aqui, é um erro não mapeado
      showToast({
        type: 'error',
        message: 'Não foi possível criar sua conta',
        description: 'Por favor, verifique seus dados e tente novamente.',
      });
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.formContainer}>
        <ThemedText style={[typography.title, styles.title]}>
          Crie sua conta
        </ThemedText>
        
        <ThemedText style={[typography.body, styles.subtitle]}>
          Preencha seus dados para começar
        </ThemedText>

        <TextInput
          style={[
            styles.input,
            { 
              backgroundColor: COLORS[currentTheme].background,
              color: COLORS[currentTheme].text,
              borderColor: COLORS[currentTheme].divider,
            }
          ]}
          placeholder="Nome completo"
          placeholderTextColor={COLORS[currentTheme].icon}
          value={nome}
          onChangeText={setNome}
          autoCapitalize="words"
          editable={!isLoading}
        />

        <TextInput
          style={[
            styles.input,
            { 
              backgroundColor: COLORS[currentTheme].background,
              color: COLORS[currentTheme].text,
              borderColor: COLORS[currentTheme].divider,
            }
          ]}
          placeholder="E-mail"
          placeholderTextColor={COLORS[currentTheme].icon}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          editable={!isLoading}
        />

        <TextInput
          style={[
            styles.input,
            { 
              backgroundColor: COLORS[currentTheme].background,
              color: COLORS[currentTheme].text,
              borderColor: COLORS[currentTheme].divider,
            }
          ]}
          placeholder="Senha"
          placeholderTextColor={COLORS[currentTheme].icon}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          editable={!isLoading}
        />

        <TextInput
          style={[
            styles.input,
            { 
              backgroundColor: COLORS[currentTheme].background,
              color: COLORS[currentTheme].text,
              borderColor: COLORS[currentTheme].divider,
            }
          ]}
          placeholder="Confirmar senha"
          placeholderTextColor={COLORS[currentTheme].icon}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
          editable={!isLoading}
        />

        <Pressable
          style={[
            styles.button,
            { 
              backgroundColor: COLORS[currentTheme].primary,
              opacity: isLoading ? 0.7 : 1,
            }
          ]}
          onPress={handleRegister}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <ThemedText style={[typography.bodySemiBold, styles.buttonText]}>
              Cadastrar
            </ThemedText>
          )}
        </Pressable>

        <ThemedView style={styles.footer}>
          <ThemedText style={typography.body}>
            Já tem uma conta?{' '}
          </ThemedText>
          <Link href="/login" asChild>
            <Pressable disabled={isLoading}>
              <ThemedText style={[typography.bodySemiBold, { color: COLORS[currentTheme].primary }]}>
                Faça login
              </ThemedText>
            </Pressable>
          </Link>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    padding: SPACING.xl,
  },
  title: {
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
  },
  button: {
    width: '100%',
    height: 48,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  buttonText: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.xl,
  },
}); 
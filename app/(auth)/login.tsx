import { useState } from 'react';
import { StyleSheet, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '@/constants/DesignSystem';
import { useTheme } from '@/hooks/ThemeContext';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useWindowDimensions } from 'react-native';
import { getTypographyForBreakpoint } from '@/constants/DesignSystem';
import { useAuth } from '@/contexts/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { currentTheme } = useTheme();
  const { width } = useWindowDimensions();
  const typography = getTypographyForBreakpoint(width);
  const { signIn, isLoading } = useAuth();

  const handleLogin = async () => {
    try {
      await signIn({ email, password: senha });
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.formContainer}>
        <ThemedText style={[typography.title, styles.title]}>
          Bem-vindo de volta!
        </ThemedText>
        
        <ThemedText style={[typography.body, styles.subtitle]}>
          Entre com suas credenciais para acessar sua conta
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

        <Pressable
          style={[
            styles.button,
            { 
              backgroundColor: COLORS[currentTheme].primary,
              opacity: isLoading ? 0.7 : 1,
            }
          ]}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <ThemedText style={[typography.bodySemiBold, styles.buttonText]}>
              Entrar
            </ThemedText>
          )}
        </Pressable>

        <ThemedView style={styles.footer}>
          <ThemedText style={typography.body}>
            Ainda não tem uma conta?{' '}
          </ThemedText>
          <Link href="/register" asChild>
            <Pressable disabled={isLoading}>
              <ThemedText style={[typography.bodySemiBold, { color: COLORS[currentTheme].primary }]}>
                Cadastre-se
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
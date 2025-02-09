import { useState } from 'react';
import { StyleSheet, TextInput, Pressable, ActivityIndicator, Platform } from 'react-native';
import { Link } from 'expo-router';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '@/constants/DesignSystem';
import { useTheme } from '@/hooks/ThemeContext';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useWindowDimensions } from 'react-native';
import { getTypographyForBreakpoint } from '@/constants/DesignSystem';
import { useAuth } from '@/contexts/auth';
import { Eye, EyeOff } from 'lucide-react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { currentTheme } = useTheme();
  const { width } = useWindowDimensions();
  const typography = getTypographyForBreakpoint(width);
  const { signIn, isLoading } = useAuth();

  const inputStyle = [
    styles.input,
    { 
      backgroundColor: COLORS[currentTheme].background,
      color: COLORS[currentTheme].text,
      borderColor: COLORS[currentTheme].divider,
      ...(Platform.OS === 'web' ? { outline: 'none' } : {}),
    }
  ];

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

        <ThemedView style={styles.inputContainer}>
          <TextInput
            style={inputStyle}
            placeholder="E-mail"
            placeholderTextColor={COLORS[currentTheme].icon}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            editable={!isLoading}
          />
        </ThemedView>

        <ThemedView style={styles.inputContainer}>
          <TextInput
            style={inputStyle}
            placeholder="Senha"
            placeholderTextColor={COLORS[currentTheme].icon}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!showPassword}
            editable={!isLoading}
          />
          <Pressable 
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            {showPassword ? (
              <EyeOff size={20} color={COLORS[currentTheme].icon} />
            ) : (
              <Eye size={20} color={COLORS[currentTheme].icon} />
            )}
          </Pressable>
        </ThemedView>

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
  inputContainer: {
    position: 'relative',
    marginBottom: SPACING.md,
  },
  input: {
    width: '100%',
    height: 48,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    backgroundColor: 'transparent',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eyeIcon: {
    position: 'absolute',
    right: SPACING.md,
    top: 12,
    padding: SPACING.xs,
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
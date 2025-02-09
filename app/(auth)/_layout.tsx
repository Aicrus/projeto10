import { Stack } from 'expo-router';
import { COLORS } from '@/constants/DesignSystem';
import { useTheme } from '@/hooks/ThemeContext';

export default function AuthLayout() {
  const { currentTheme } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS[currentTheme].background,
        },
        headerTintColor: COLORS[currentTheme].text,
        headerShadowVisible: false,
        headerBackTitle: 'Voltar',
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: 'Cadastro',
        }}
      />
    </Stack>
  );
} 
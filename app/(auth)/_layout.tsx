import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animationDuration: 200,
        ...(Platform.OS === 'ios' ? {
          animation: 'fade',
        } : Platform.OS === 'android' ? {
          animation: 'fade',
          presentation: 'transparentModal',
        } : {
          animation: 'fade',
        })
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
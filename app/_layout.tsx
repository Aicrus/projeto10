import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ScrollView, Platform, ActivityIndicator } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/hooks/ThemeContext';
import { ThemeProvider } from '@/hooks/ThemeContext';
import { ToastProvider } from '@/hooks/useToast';
import { ThemedView } from '@/components/ThemedView';
import { AuthProvider } from '@/contexts/auth';
import { useAuth } from '@/contexts/auth';
import { COLORS } from '@/constants/DesignSystem';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function LoadingScreen() {
  const { currentTheme } = useTheme();
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={COLORS[currentTheme].primary} />
    </ThemedView>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ToastProvider>
          <AuthProvider>
            <RootLayoutNav />
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

function RootLayoutNav() {
  const { currentTheme } = useTheme();
  const { isLoading, isInitialized, session } = useAuth();

  console.log('📱 RootLayoutNav - Estado:', {
    isLoading,
    isInitialized,
    hasSession: !!session,
    theme: currentTheme
  });

  // Mostra tela de carregamento enquanto verifica a autenticação
  if (isLoading || !isInitialized) {
    console.log('⌛ Renderizando tela de carregamento...');
    return <LoadingScreen />;
  }

  console.log('🎯 Renderizando conteúdo principal');
  const MainContent = (
    <NavigationThemeProvider value={currentTheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ThemedView style={{ flex: 1 }}>
        <Stack 
          screenOptions={{
            headerShown: false,
            contentStyle: { flex: 1 },
            animation: 'fade'
          }}
          initialRouteName="(auth)"
        >
          <Stack.Screen 
            name="(auth)" 
            options={{
              gestureEnabled: false
            }}
          />
          <Stack.Screen 
            name="(tabs)"
            options={{
              gestureEnabled: false
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemedView>
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
    </NavigationThemeProvider>
  );

  if (Platform.OS === 'web') {
    console.log('🌐 Renderizando para web');
    return MainContent;
  }

  console.log('📱 Renderizando para dispositivo móvel');
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'right', 'left']}>
      {MainContent}
    </SafeAreaView>
  );
}

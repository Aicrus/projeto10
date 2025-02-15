import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ScrollView, Platform, ActivityIndicator, View } from 'react-native';
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
  const themeColors = COLORS[currentTheme];
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: themeColors.primaryBackground }}>
      <ActivityIndicator size="large" color={themeColors.primary} />
    </View>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        {!fontsLoaded ? (
          <LoadingScreen />
        ) : (
          <AuthProvider>
            <ToastProvider>
              <RootLayoutNav />
            </ToastProvider>
          </AuthProvider>
        )}
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
      <ThemedView style={{ flex: 1, backgroundColor: COLORS[currentTheme].primaryBackground }}>
        <Stack 
          screenOptions={{
            headerShown: false,
            contentStyle: { 
              flex: 1,
              backgroundColor: COLORS[currentTheme].primaryBackground 
            },
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

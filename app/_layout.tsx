import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { useEffect } from 'react';
import { ScrollView, Platform, ActivityIndicator, View, StatusBar as RNStatusBar } from 'react-native';
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

// Hook para gerenciar a cor da StatusBar
function useStatusBarColor(backgroundColor: string) {
  const { currentTheme } = useTheme();
  
  useEffect(() => {
    // Determina se o background é claro baseado no tema atual
    const isLightBackground = currentTheme === 'light';
    
    if (Platform.OS === 'ios') {
      RNStatusBar.setBarStyle(isLightBackground ? 'dark-content' : 'light-content', true);
    }
  }, [currentTheme, backgroundColor]);

  const style: StatusBarStyle = currentTheme === 'light' ? 'dark' : 'light';

  return {
    style,
    backgroundColor: COLORS[currentTheme].primaryBackground,
    translucent: true
  };
}

function LoadingScreen() {
  const { currentTheme } = useTheme();
  const themeColors = COLORS[currentTheme];
  const statusBarProps = useStatusBarColor(themeColors.primaryBackground);
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: themeColors.primaryBackground }}>
      <StatusBar {...statusBarProps} />
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
  const statusBarProps = useStatusBarColor(COLORS[currentTheme].primaryBackground);

  // Efeito para atualizar a StatusBar quando o tema mudar
  useEffect(() => {
    if (Platform.OS === 'ios') {
      const isLightTheme = currentTheme === 'light';
      RNStatusBar.setBarStyle(isLightTheme ? 'dark-content' : 'light-content', true);
    }
  }, [currentTheme]);

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
        <StatusBar {...statusBarProps} />
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

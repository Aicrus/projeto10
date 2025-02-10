import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useRouter, useRootNavigation } from 'expo-router';
import { useAuth } from '@/contexts/auth';
import { COLORS } from '@/constants/DesignSystem';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { session, isInitialized } = useAuth();
  const router = useRouter();
  const rootNav = useRootNavigation();

  useEffect(() => {
    if (!isInitialized || !rootNav?.isReady()) return;

    if (!session) {
      router.replace('/(auth)/login');
    }
  }, [session, isInitialized, rootNav?.isReady()]);

  if (!isInitialized || !session) {
    return (
      <View 
        style={{ 
          flex: 1, 
          backgroundColor: COLORS.light.background // Usando light por padrão para o splash
        }} 
      />
    );
  }

  return <>{children}</>;
} 
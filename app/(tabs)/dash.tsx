import { StyleSheet, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemeSelector } from '@/components/ThemeSelector';
import { Sidebar } from '@/components/Sidebar';
import { SPACING } from '@/constants/DesignSystem';

export default function DashScreen() {
  const router = useRouter();

  const handleNavigation = (route: string) => {
    if (route === '/dash') {
      router.push('/dash');
    } else if (route === '/config') {
      router.push('/config');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Sidebar onNavigate={handleNavigation} currentPath="/dash" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.content}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Dashboard</ThemedText>
            <HelloWave />
          </ThemedView>

          <ThemedView style={styles.themeContainer}>
            <ThemedText type="subtitle">Tema do Aplicativo</ThemedText>
            <ThemeSelector />
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    padding: SPACING.lg,
  },
  scrollContent: {
    flexGrow: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.xl,
  },
  themeContainer: {
    gap: SPACING.md,
    marginBottom: SPACING.xl,
  },
}); 
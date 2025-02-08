import { StyleSheet, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Sidebar } from '@/components/Sidebar';
import { SPACING } from '@/constants/DesignSystem';

export default function ConfigScreen() {
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
      <Sidebar onNavigate={handleNavigation} currentPath="/config" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.content}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Configurações</ThemedText>
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
});

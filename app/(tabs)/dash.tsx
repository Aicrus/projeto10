import { StyleSheet, Platform, ScrollView, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useRef } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemeSelector } from '@/components/ThemeSelector';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { SPACING } from '@/constants/DesignSystem';
import { useBreakpoints } from '@/hooks/useBreakpoints';

const EXPANDED_WIDTH = 240;
const COLLAPSED_WIDTH = 68;

export default function DashScreen() {
  const router = useRouter();
  const { isMobile } = useBreakpoints();
  const [isExpanded, setIsExpanded] = useState(true);
  const animatedWidth = useRef(new Animated.Value(isMobile ? 0 : EXPANDED_WIDTH)).current;

  const handleNavigation = (route: string) => {
    if (route === '/dash') {
      router.push('/dash');
    } else if (route === '/config') {
      router.push('/config');
    }
  };

  const handleSidebarToggle = (expanded: boolean) => {
    setIsExpanded(expanded);
    Animated.timing(animatedWidth, {
      toValue: expanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <ThemedView style={styles.container}>
      {!isMobile && (
        <Sidebar 
          onNavigate={handleNavigation} 
          currentPath="/dash"
          onToggle={handleSidebarToggle}
        />
      )}
      <Animated.View style={[
        styles.mainContent,
        { marginLeft: animatedWidth }
      ]}>
        <Header sidebarWidth={animatedWidth} onNavigate={handleNavigation} />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <ThemedView style={styles.content}>
            {/* Área livre para novos textos */}
          </ThemedView>
        </ScrollView>
      </Animated.View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    ...Platform.select({
      web: {
        transition: 'margin-left 0.3s ease',
      },
    }),
  },
  scrollView: {
    flex: 1,
    marginTop: 64, // Altura do header
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
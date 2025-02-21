import { StyleSheet, Platform, ScrollView, Animated, useWindowDimensions, DimensionValue, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useRef, useEffect } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemeSelector } from '@/components/ThemeSelector';
import SidebarPro from '@/components/SidebarPro';
import { SPACING, TYPOGRAPHY, getTypographyForBreakpoint, COLORS } from '@/constants/DesignSystem';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { useTheme } from '@/hooks/ThemeContext';
import { PageContainer } from '@/components/PageContainer';
import { Header } from '@/components/Header';
import LayoutDash from '@/components/LayoutDash';

const EXPANDED_WIDTH = 200;
const COLLAPSED_WIDTH = 60;

const globalStyles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
  },
});

export default function DashScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const typography = getTypographyForBreakpoint(width);
  const { isMobile, isTablet, isDesktop } = useBreakpoints();
  const [isExpanded, setIsExpanded] = useState(true);
  const animatedWidth = useRef(new Animated.Value(isMobile ? 0 : EXPANDED_WIDTH)).current;
  const { currentTheme } = useTheme();

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
    <ThemedView style={[styles.container, { backgroundColor: COLORS[currentTheme].primaryBackground }]}>
      {!isMobile && (
        <SidebarPro 
          onNavigate={handleNavigation} 
          currentPath="/dash"
          onToggle={handleSidebarToggle}
        />
      )}
      <Animated.View style={[
        styles.mainContent,
        { 
          left: isMobile ? 0 : animatedWidth,
          backgroundColor: COLORS[currentTheme].primaryBackground
        }
      ]}>
        <PageContainer>
          <ThemedView style={{ 
            backgroundColor: COLORS[currentTheme].backgroundHome,
            flex: 1, 
            borderRadius: isMobile ? 0 : isTablet ? 16 : 16,
            overflow: 'hidden',
            width: '100%',
          }}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}>
              <ThemedView style={[
                styles.contentContainer,
                {
                  maxWidth: isDesktop ? '100%' : 800,
                  alignSelf: 'center',
                  width: '100%',
                }
              ]}>
                <Header onNavigate={handleNavigation} currentPath="/dash" />
                
                <ThemedView style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: 20,
                  gap: 4,
                  width: '100%',
                  marginVertical: 0,
                }}>
                  <ThemedText style={[globalStyles.text, {
                    fontFamily: 'Inter_400Regular',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: 14,
                    lineHeight: 24,
                    letterSpacing: -0.3,
                    color: COLORS[currentTheme].secondaryText,
                  }]}>
                    Terça-feira, 4 de junho
                  </ThemedText>

                  <ThemedView style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: 4,
                  }}>
                    <ThemedText style={[globalStyles.text, {
                      fontFamily: 'Inter_400Regular',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 18,
                      lineHeight: 32,
                      letterSpacing: -0.4,
                      color: COLORS[currentTheme].secondaryText,
                    }]}>
                      Boa tarde
                    </ThemedText>
                    <ThemedText style={[globalStyles.text, {
                      marginLeft: 4,
                      fontFamily: 'Inter_400Regular',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 18,
                      lineHeight: 32,
                      letterSpacing: -0.4,
                      color: COLORS[currentTheme].primaryText,
                    }]}>
                      Paulo Morales
                    </ThemedText>
                  </ThemedView>
                </ThemedView>
                <LayoutDash />
              </ThemedView>
            </ScrollView>
          </ThemedView>
        </PageContainer>
      </Animated.View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
  },
  mainContent: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    ...Platform.select({
      web: {
        transition: 'left 0.3s ease',
      },
    }),
  },
  scrollView: {
    flex: 1,
    marginTop: 0,
  },
  scrollContent: {
    minHeight: '100%',
    flexGrow: 1,
    display: 'flex',
  },
  contentContainer: {
    flex: 1,
  },
  loremContainer: {
    gap: SPACING.lg,
  },
  quote: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  quoteTranslation: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  ad: {
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  paragraph: {
    marginBottom: SPACING.lg,
  },
}); 
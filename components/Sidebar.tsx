import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Platform, Pressable, useColorScheme, useWindowDimensions, TextStyle } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { HoverableView } from './HoverableView';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, getTypographyForBreakpoint } from '@/constants/DesignSystem';
import * as Icons from 'lucide-react-native';
import { useTheme } from '@/hooks/ThemeContext';
import type { Theme } from '@/src/hooks/useTheme';

interface SidebarProps {
  onNavigate?: (route: string) => void;
}

interface TypographyStyle {
  fontSize: number;
  lineHeight: number;
  fontWeight?: string;
}

const EXPANDED_WIDTH = 240;
const COLLAPSED_WIDTH = 68;

const getFontWeight = (weight?: string): TextStyle['fontWeight'] => {
  switch (weight) {
    case 'bold':
      return '700';
    case 'semibold':
      return '600';
    case 'medium':
      return '500';
    case 'normal':
      return '400';
    default:
      return '400';
  }
};

export const Sidebar = ({ onNavigate }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { currentTheme } = useTheme();
  const { width: windowWidth } = useWindowDimensions();
  const typographyBase = getTypographyForBreakpoint(windowWidth);
  
  // Convertendo a tipografia para o formato correto do React Native
  const typography = {
    title: {
      fontSize: typographyBase.title.fontSize,
      lineHeight: typographyBase.title.lineHeight,
      fontWeight: getFontWeight(typographyBase.title.fontWeight),
    },
    subtitle: {
      fontSize: typographyBase.subtitle.fontSize,
      lineHeight: typographyBase.subtitle.lineHeight,
      fontWeight: getFontWeight(typographyBase.subtitle.fontWeight),
    },
    body: {
      fontSize: typographyBase.body.fontSize,
      lineHeight: typographyBase.body.lineHeight,
      fontWeight: getFontWeight('normal'),
    },
  };

  const animatedWidth = React.useRef(new Animated.Value(EXPANDED_WIDTH)).current;
  const fadeAnim = React.useRef(new Animated.Value(1)).current;
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isToggleHovered, setIsToggleHovered] = useState(false);

  const toggleSidebar = () => {
    const toValue = isExpanded ? COLLAPSED_WIDTH : EXPANDED_WIDTH;
    Animated.parallel([
      Animated.timing(animatedWidth, {
        toValue,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnim, {
        toValue: isExpanded ? 0 : 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
    setIsExpanded(!isExpanded);
  };

  const themeColors = COLORS[currentTheme as keyof typeof COLORS];

  const menuItems = [
    { icon: 'LayoutDashboard', label: 'Dashboard', isActive: true },
    { icon: 'RotateCw', label: 'Transações' },
    { icon: 'Wallet', label: 'Carteira' },
    { icon: 'Target', label: 'Objetivos' },
    { icon: 'CircleDollarSign', label: 'Orçamento' },
    { icon: 'LineChart', label: 'Análises' },
    { icon: 'Settings', label: 'Configurações' }
  ];

  return (
    <Animated.View style={[
      styles.container,
      {
        width: animatedWidth,
        backgroundColor: currentTheme === 'dark' ? '#111' : 'white',
        borderRightWidth: 0.5,
        borderRightColor: themeColors.divider,
      }
    ]}>
      <ThemedView style={styles.content}>
        <ThemedView style={styles.header}>
          <View style={[
            styles.logoContainer,
            { backgroundColor: themeColors.primary }
          ]}>
            <ThemedText style={[
              styles.logoText,
              typography.title
            ]} type="title">F</ThemedText>
          </View>
          <Animated.View style={{
            opacity: fadeAnim,
            transform: [{ translateX: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0]
            })}]
          }}>
            {isExpanded && (
              <ThemedText type="subtitle" style={[styles.brandText, typography.subtitle]}>
                FinSet
              </ThemedText>
            )}
          </Animated.View>
          <HoverableView
            onPress={toggleSidebar}
            style={[
              styles.toggleButton,
              {
                backgroundColor: currentTheme === 'dark' ? '#222' : 'white',
                right: -8,
                top: 32,
                borderColor: themeColors.divider,
                borderWidth: 1,
              }
            ]}
            hoverScale={1.02}
          >
            {isExpanded ? (
              <Icons.ChevronLeft 
                color={currentTheme === 'dark' ? '#fff' : themeColors.primary} 
                size={16} 
                strokeWidth={2} 
              />
            ) : (
              <Icons.ChevronRight 
                color={currentTheme === 'dark' ? '#fff' : themeColors.primary} 
                size={16} 
                strokeWidth={2} 
              />
            )}
          </HoverableView>
        </ThemedView>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => {
            const IconComponent = (Icons as any)[item.icon];
            return (
              <HoverableView
                key={index}
                onPress={() => onNavigate?.(item.label)}
                style={styles.menuItem}
                isActive={item.isActive}
                activeBackgroundColor={themeColors.primary + '15'}
                hoverTranslateX={4}
              >
                <View style={styles.menuIconContainer}>
                  <IconComponent
                    size={20}
                    color={item.isActive ? themeColors.primary : currentTheme === 'dark' ? '#fff' : themeColors.text}
                    strokeWidth={2}
                  />
                </View>
                {isExpanded && (
                  <Animated.View style={{
                    opacity: fadeAnim,
                    transform: [{ translateX: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-20, 0]
                    })}]
                  }}>
                    <ThemedText
                      style={[
                        styles.menuItemText,
                        typography.body,
                        item.isActive && { color: themeColors.primary }
                      ]}
                    >
                      {item.label}
                    </ThemedText>
                  </Animated.View>
                )}
                {item.isActive && (
                  <View style={[
                    styles.activeIndicator,
                    { backgroundColor: themeColors.primary }
                  ]} />
                )}
              </HoverableView>
            );
          })}
        </View>

        <View style={[
          styles.footer,
          { 
            borderTopColor: themeColors.divider,
            marginTop: 'auto',
            paddingTop: SPACING.lg,
            borderTopWidth: 1,
          }
        ]}>
          {['Ajuda', 'Sair'].map((label, index) => {
            const IconComponent = index === 0 ? Icons.HelpCircle : Icons.LogOut;
            return (
              <HoverableView
                key={label}
                style={styles.menuItem}
                hoverTranslateX={4}
                activeBackgroundColor={themeColors.hover}
              >
                <View style={styles.menuIconContainer}>
                  <IconComponent
                    size={20}
                    color={currentTheme === 'dark' ? '#fff' : themeColors.text}
                    strokeWidth={2}
                  />
                </View>
                {isExpanded && (
                  <Animated.View style={{
                    opacity: fadeAnim,
                    transform: [{ translateX: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-20, 0]
                    })}]
                  }}>
                    <ThemedText
                      style={[
                        styles.menuItemText,
                        typography.body
                      ]}
                    >
                      {label}
                    </ThemedText>
                  </Animated.View>
                )}
              </HoverableView>
            );
          })}
        </View>
      </ThemedView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    paddingVertical: SPACING.lg,
  },
  header: {
    paddingHorizontal: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xl,
    position: 'relative',
  },
  logoContainer: {
    width: 36,
    height: 36,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      web: {
        transition: 'all 0.3s ease',
      },
    }),
  },
  logoText: {
    color: 'white',
  },
  brandText: {
    marginLeft: SPACING.md,
  },
  toggleButton: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: BORDER_RADIUS.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      },
      default: {
        elevation: 2,
      },
    }),
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: SPACING.sm,
    gap: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.sm,
    height: 44,
    borderRadius: BORDER_RADIUS.lg,
    position: 'relative',
    ...Platform.select({
      web: {
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      },
    }),
  },
  menuIconContainer: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      web: {
        transition: 'transform 0.2s ease',
      },
    }),
  },
  activeMenuItem: {
    position: 'relative',
  },
  activeIndicator: {
    position: 'absolute',
    left: 0,
    top: '50%',
    width: 3,
    height: 20,
    borderTopRightRadius: BORDER_RADIUS.sm,
    borderBottomRightRadius: BORDER_RADIUS.sm,
    transform: [{ translateY: -10 }],
    ...Platform.select({
      web: {
        transition: 'background-color 0.2s ease',
      },
    }),
  },
  menuItemText: {
    marginLeft: SPACING.sm,
    ...Platform.select({
      web: {
        transition: 'all 0.2s ease',
      },
    }),
  },
  footer: {
    paddingHorizontal: SPACING.sm,
    gap: 1,
    marginTop: 'auto',
    paddingTop: SPACING.lg,
    borderTopWidth: 1,
  },
}); 
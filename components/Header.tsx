import React from 'react';
import { StyleSheet, View, Platform, Pressable, Animated } from 'react-native';
import { Bell, Search, MessageSquare, Settings } from 'lucide-react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { HoverableView } from './HoverableView';
import { COLORS, SPACING, BORDER_RADIUS } from '@/constants/DesignSystem';
import { useTheme } from '@/hooks/ThemeContext';
import { useBreakpoints } from '@/hooks/useBreakpoints';

interface HeaderProps {
  sidebarWidth: Animated.Value;
}

export function Header({ sidebarWidth }: HeaderProps) {
  const { currentTheme } = useTheme();
  const { isMobile } = useBreakpoints();
  const themeColors = COLORS[currentTheme];

  return (
    <Animated.View 
      style={[
        styles.header,
        {
          borderBottomColor: themeColors.divider,
          left: isMobile ? 0 : sidebarWidth,
          right: 0,
          backgroundColor: currentTheme === 'dark' ? '#151718' : 'white',
        }
      ]}
    >
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <ThemedText type="subtitle">Dashboard</ThemedText>
        </View>

        <View style={styles.rightContent}>
          <HoverableView
            style={[
              styles.iconButton,
              { backgroundColor: currentTheme === 'dark' ? '#222' : themeColors.background }
            ]}
            hoverScale={1.02}
          >
            <Search size={20} color={themeColors.icon} strokeWidth={1.5} />
          </HoverableView>

          <HoverableView
            style={[
              styles.iconButton,
              { backgroundColor: currentTheme === 'dark' ? '#222' : themeColors.background }
            ]}
            hoverScale={1.02}
          >
            <MessageSquare size={20} color={themeColors.icon} strokeWidth={1.5} />
          </HoverableView>

          <HoverableView
            style={[
              styles.iconButton,
              { backgroundColor: currentTheme === 'dark' ? '#222' : themeColors.background }
            ]}
            hoverScale={1.02}
          >
            <Bell size={20} color={themeColors.icon} strokeWidth={1.5} />
            <View style={[styles.notificationBadge, { backgroundColor: themeColors.primary }]} />
          </HoverableView>

          <HoverableView
            style={[
              styles.iconButton,
              { backgroundColor: currentTheme === 'dark' ? '#222' : themeColors.background }
            ]}
            hoverScale={1.02}
          >
            <Settings size={20} color={themeColors.icon} strokeWidth={1.5} />
          </HoverableView>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 64,
    position: 'fixed',
    top: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 40,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: SPACING.lg,
    width: '100%',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.pill,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      },
    }),
  },
  notificationBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: BORDER_RADIUS.pill,
    borderWidth: 2,
    borderColor: 'white',
  },
}); 
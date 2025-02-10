import React, { useState } from 'react';
import { StyleSheet, View, Platform, Pressable, Animated, Image } from 'react-native';
import { Bell, Search } from 'lucide-react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { HoverableView } from './HoverableView';
import { ProfileMenu } from './ProfileMenu';
import { NotificationsMenu } from './NotificationsMenu';
import { COLORS, SPACING, BORDER_RADIUS, getTypographyForBreakpoint } from '@/constants/DesignSystem';
import { useTheme } from '@/hooks/ThemeContext';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { useAuth } from '@/contexts/auth';

interface HeaderProps {
  sidebarWidth: Animated.Value;
  onNavigate?: (route: string) => void;
  currentPath?: string;
}

export function Header({ sidebarWidth, onNavigate, currentPath = '/dash' }: HeaderProps) {
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);
  const [isNotificationsMenuVisible, setIsNotificationsMenuVisible] = useState(false);
  const { currentTheme } = useTheme();
  const { isMobile } = useBreakpoints();
  const { session } = useAuth();
  const themeColors = COLORS[currentTheme];
  const typography = getTypographyForBreakpoint(Platform.OS === 'web' ? window.innerWidth : 0);

  const userName = session?.user?.user_metadata?.display_name || session?.user?.user_metadata?.name || 'Usuário';
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=random&color=ffffff`;

  const getPageTitle = (path?: string) => {
    switch (path) {
      case '/config':
        return 'Configurações';
      case '/design-system':
        return 'Design System';
      case '/dash':
        return 'Dashboard';
      default:
        return 'Dashboard';
    }
  };

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
          <ThemedText 
            type="subtitle" 
            style={[
              styles.pageTitle,
              { fontWeight: '600' }
            ]}
          >
            {getPageTitle(currentPath)}
          </ThemedText>
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
            onPress={() => setIsNotificationsMenuVisible(true)}
          >
            <Bell size={20} color={themeColors.icon} strokeWidth={1.5} />
            <View style={[styles.notificationBadge, { backgroundColor: themeColors.primary }]} />
          </HoverableView>

          <HoverableView
            style={[
              styles.avatarButton,
              { 
                backgroundColor: currentTheme === 'dark' ? '#222' : themeColors.background,
                borderWidth: 2,
                borderColor: currentTheme === 'dark' ? '#333' : '#f0f0f0'
              }
            ]}
            hoverScale={1.02}
            onPress={() => setIsProfileMenuVisible(true)}
          >
            <Image 
              source={{ uri: avatarUrl }}
              style={styles.avatarImage}
            />
          </HoverableView>
        </View>
      </View>

      <ProfileMenu 
        isVisible={isProfileMenuVisible}
        onClose={() => setIsProfileMenuVisible(false)}
        onNavigate={onNavigate}
      />

      <NotificationsMenu 
        isVisible={isNotificationsMenuVisible}
        onClose={() => setIsNotificationsMenuVisible(false)}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 64,
    position: Platform.select({
      web: 'fixed',
      default: 'absolute'
    }) as 'fixed' | 'absolute',
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
  pageTitle: {
    fontSize: 18,
    letterSpacing: -0.5,
    ...Platform.select({
      web: {
        userSelect: 'none',
      },
    }),
  },
  avatarButton: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.pill,
    overflow: 'hidden',
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      },
    }),
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: BORDER_RADIUS.pill,
  },
}); 
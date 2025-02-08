import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity, Pressable, Platform } from 'react-native';
import { LogOut, Settings, Sun, Moon, Monitor } from 'lucide-react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { HoverableView } from './HoverableView';
import { COLORS, SPACING, BORDER_RADIUS } from '@/constants/DesignSystem';
import { useTheme } from '@/hooks/ThemeContext';

interface ProfileMenuProps {
  isVisible: boolean;
  onClose: () => void;
  onNavigate?: (route: string) => void;
}

export function ProfileMenu({ isVisible, onClose, onNavigate }: ProfileMenuProps) {
  const { currentTheme, themeMode, setThemeMode } = useTheme();
  const themeColors = COLORS[currentTheme];
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 10,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const MenuItem = ({ icon: Icon, label, onClick, color = themeColors.text }) => (
    <HoverableView
      style={styles.menuItem}
      onPress={onClick}
      hoverScale={1.01}
    >
      <Icon size={18} color={color} strokeWidth={1.5} />
      <ThemedText style={styles.menuItemText}>{label}</ThemedText>
    </HoverableView>
  );

  return (
    <>
      <Pressable style={styles.overlay} onPress={onClose} />
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: currentTheme === 'dark' ? '#1A1A1A' : 'white',
            borderColor: themeColors.divider,
            opacity: fadeAnim,
            transform: [{ translateY: translateYAnim }],
          },
        ]}
      >
        {/* Cabeçalho do Perfil */}
        <View style={styles.profileHeader}>
          <ThemedText style={styles.name}>Paulo Morales</ThemedText>
          <ThemedText style={styles.email}>canal.paulomorales@gmail.com</ThemedText>
        </View>

        <View style={[styles.divider, { backgroundColor: themeColors.divider }]} />

        {/* Opções de Tema */}
        <View style={styles.themeSection}>
          <ThemedText style={styles.sectionTitle}>Tema</ThemedText>
          <View style={styles.themeOptions}>
            <HoverableView
              style={[
                styles.themeOption,
                themeMode === 'light' && { backgroundColor: themeColors.primary + '15' }
              ]}
              onPress={() => setThemeMode('light')}
            >
              <Sun size={16} color={themeMode === 'light' ? themeColors.primary : themeColors.text} />
              <ThemedText style={[
                styles.themeText,
                themeMode === 'light' && { color: themeColors.primary }
              ]}>Claro</ThemedText>
            </HoverableView>

            <HoverableView
              style={[
                styles.themeOption,
                themeMode === 'dark' && { backgroundColor: themeColors.primary + '15' }
              ]}
              onPress={() => setThemeMode('dark')}
            >
              <Moon size={16} color={themeMode === 'dark' ? themeColors.primary : themeColors.text} />
              <ThemedText style={[
                styles.themeText,
                themeMode === 'dark' && { color: themeColors.primary }
              ]}>Escuro</ThemedText>
            </HoverableView>

            <HoverableView
              style={[
                styles.themeOption,
                themeMode === 'system' && { backgroundColor: themeColors.primary + '15' }
              ]}
              onPress={() => setThemeMode('system')}
            >
              <Monitor size={16} color={themeMode === 'system' ? themeColors.primary : themeColors.text} />
              <ThemedText style={[
                styles.themeText,
                themeMode === 'system' && { color: themeColors.primary }
              ]}>Sistema</ThemedText>
            </HoverableView>
          </View>
        </View>

        <View style={[styles.divider, { backgroundColor: themeColors.divider }]} />

        {/* Menu Items */}
        <MenuItem
          icon={Settings}
          label="Configurações"
          onClick={() => {
            onNavigate?.('/config');
            onClose();
          }}
        />
        <MenuItem
          icon={LogOut}
          label="Sair"
          onClick={() => {
            // Implementar lógica de logout
            onClose();
          }}
          color={themeColors.primary}
        />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 45,
  },
  container: {
    position: 'fixed',
    top: SPACING.xs + 52, // Aumentado de 48 para 52 para descer um pouquinho
    right: SPACING.lg,
    width: 200,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    zIndex: 50,
    ...Platform.select({
      web: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      default: {
        elevation: 4,
      },
    }),
  },
  profileHeader: {
    padding: SPACING.sm, // Reduzindo mais o padding
  },
  name: {
    fontSize: 13, // Fonte ainda menor
    fontWeight: '600',
    marginBottom: SPACING.xs / 2, // Reduzindo o espaço entre nome e email
  },
  email: {
    fontSize: 11, // Fonte ainda menor
    opacity: 0.8,
  },
  divider: {
    height: 1,
    width: '100%',
  },
  themeSection: {
    padding: SPACING.xs, // Reduzindo mais o padding
    paddingBottom: SPACING.sm,
  },
  sectionTitle: {
    fontSize: 11,
    opacity: 0.8,
    marginBottom: SPACING.xs,
    paddingLeft: SPACING.xs,
  },
  themeOptions: {
    flexDirection: 'row',
    gap: SPACING.xs / 2, // Reduzindo o gap entre as opções
  },
  themeOption: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: SPACING.xs / 2,
    paddingTop: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    gap: SPACING.xs / 2,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      },
    }),
  },
  themeText: {
    fontSize: 10, // Fonte ainda menor
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.xs, // Reduzindo mais o padding
    paddingHorizontal: SPACING.sm,
    gap: SPACING.sm,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      },
    }),
  },
  menuItemText: {
    fontSize: 12, // Fonte ainda menor
  },
}); 
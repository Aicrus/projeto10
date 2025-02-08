import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Pressable, Platform, Dimensions } from 'react-native';
import { Clock, DollarSign, Bell, ArrowUpRight } from 'lucide-react-native';
import { ThemedText } from './ThemedText';
import { HoverableView } from './HoverableView';
import { COLORS, SPACING, BORDER_RADIUS } from '@/constants/DesignSystem';
import { useTheme } from '@/hooks/ThemeContext';

interface NotificationsMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const NOTIFICATIONS = [
  {
    id: 1,
    icon: DollarSign,
    title: 'Nova transação recebida',
    description: 'Você recebeu uma transferência de R$ 1.500,00',
    time: '2 min atrás',
    isUnread: true,
  },
  {
    id: 2,
    icon: Bell,
    title: 'Lembrete de meta',
    description: 'Sua meta "Viagem para Europa" está próxima do prazo',
    time: '1 hora atrás',
    isUnread: true,
  },
  {
    id: 3,
    icon: ArrowUpRight,
    title: 'Limite do cartão atualizado',
    description: 'Seu limite foi aumentado para R$ 15.000,00',
    time: '3 horas atrás',
    isUnread: false,
  },
  {
    id: 4,
    icon: Clock,
    title: 'Fatura próxima do vencimento',
    description: 'Sua fatura vence em 3 dias',
    time: '5 horas atrás',
    isUnread: false,
  },
  {
    id: 5,
    icon: Bell,
    title: 'Novo recurso disponível',
    description: 'Agora você pode personalizar suas metas de investimento com mais opções',
    time: '1 dia atrás',
    isUnread: false,
  },
];

export function NotificationsMenu({ isVisible, onClose }: NotificationsMenuProps) {
  const { currentTheme } = useTheme();
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

  return (
    <>
      <Pressable 
        style={[
          styles.overlay,
          Platform.select({
            native: {
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,0.1)'
            }
          })
        ]} 
        onPress={onClose} 
      />
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: currentTheme === 'dark' ? '#1A1A1A' : 'white',
            borderColor: themeColors.divider,
            opacity: fadeAnim,
            transform: [{ translateY: translateYAnim }],
            ...Platform.select({
              native: {
                top: SPACING.xs + 52 + 35
              }
            })
          },
        ]}
      >
        <View style={styles.header}>
          <ThemedText style={styles.title}>Notificações</ThemedText>
          <ThemedText style={styles.subtitle}>Últimas atualizações</ThemedText>
        </View>

        <View style={[styles.divider, { backgroundColor: themeColors.divider }]} />

        <View style={styles.notificationsList}>
          {NOTIFICATIONS.map((notification) => (
            <HoverableView
              key={notification.id}
              style={[
                styles.notificationItem,
                notification.isUnread ? {
                  backgroundColor: themeColors.primary + '08',
                } : {}
              ]}
              hoverScale={1.01}
            >
              <View style={[
                styles.iconContainer,
                { backgroundColor: themeColors.primary + '15' }
              ]}>
                <notification.icon
                  size={16}
                  color={themeColors.primary}
                  strokeWidth={2}
                />
              </View>
              <View style={styles.notificationContent}>
                <View style={styles.notificationHeader}>
                  <ThemedText style={styles.notificationTitle}>
                    {notification.title}
                  </ThemedText>
                  <ThemedText style={styles.notificationTime}>
                    {notification.time}
                  </ThemedText>
                </View>
                <ThemedText style={styles.notificationDescription}>
                  {notification.description}
                </ThemedText>
              </View>
              {notification.isUnread && (
                <View style={[
                  styles.unreadDot,
                  { backgroundColor: themeColors.primary }
                ]} />
              )}
            </HoverableView>
          ))}
        </View>

        <View style={[styles.divider, { backgroundColor: themeColors.divider }]} />

        <HoverableView style={styles.footer} hoverScale={1.01}>
          <ThemedText style={styles.viewAll}>Ver todas as notificações</ThemedText>
        </HoverableView>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...Platform.select({
      web: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 45,
      },
      default: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 45,
      }
    })
  },
  container: {
    ...Platform.select({
      web: {
        position: 'fixed',
        top: SPACING.xs + 52,
        right: SPACING.lg + 60,
      },
      default: {
        position: 'absolute',
        right: SPACING.lg + 60,
      }
    }),
    width: 320,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    zIndex: 50,
    ...Platform.select({
      web: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      default: {
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    }),
  },
  header: {
    padding: SPACING.sm,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    opacity: 0.7,
  },
  divider: {
    height: 1,
    width: '100%',
  },
  notificationsList: {
    maxHeight: 320,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: SPACING.sm,
    gap: SPACING.sm,
    position: 'relative',
    width: '100%',
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      },
    }),
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationContent: {
    flex: 1,
    minWidth: 0,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  notificationTitle: {
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
    marginRight: SPACING.sm,
  },
  notificationTime: {
    fontSize: 11,
    opacity: 0.5,
  },
  notificationDescription: {
    fontSize: 12,
    opacity: 0.8,
    lineHeight: 16,
    ...Platform.select({
      web: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
      },
    }),
  },
  unreadDot: {
    width: 6,
    height: 6,
    borderRadius: BORDER_RADIUS.pill,
    position: 'absolute',
    top: SPACING.sm,
    right: SPACING.sm,
  },
  footer: {
    padding: SPACING.sm,
    alignItems: 'center',
  },
  viewAll: {
    fontSize: 13,
    color: '#0a7ea4',
    fontWeight: '500',
  },
}); 
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { SPACING, BORDER_RADIUS, ICONS } from '@/constants/DesignSystem';
import { useTheme } from '@/hooks/ThemeContext';
import { FEEDBACK_COLORS } from '@/constants/DesignSystem';
import * as LucideIcons from 'lucide-react-native';

type FeedbackType = 'success' | 'warning' | 'error' | 'info';

interface FeedbackMessageProps {
  type: FeedbackType;
  message: string;
  description?: string;
}

const getFeedbackIcon = (type: FeedbackType) => {
  switch (type) {
    case 'success':
      return LucideIcons.CheckCircle;
    case 'warning':
      return LucideIcons.AlertTriangle;
    case 'error':
      return LucideIcons.XCircle;
    case 'info':
      return LucideIcons.Info;
  }
};

export function FeedbackMessage({ type, message, description }: FeedbackMessageProps) {
  const { currentTheme } = useTheme();
  const colors = FEEDBACK_COLORS[currentTheme][type];
  const Icon = getFeedbackIcon(type);

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: colors.background,
        borderColor: colors.border,
      }
    ]}>
      <View style={styles.header}>
        <Icon
          size={ICONS.sizes.md}
          color={colors.text}
          strokeWidth={2}
        />
        <ThemedText style={[styles.message, { color: colors.text }]} type="defaultSemiBold">
          {message}
        </ThemedText>
      </View>
      {description && (
        <ThemedText style={[styles.description, { color: colors.text }]}>
          {description}
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    gap: SPACING.xs,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  message: {
    flex: 1,
  },
  description: {
    opacity: 0.9,
    paddingLeft: SPACING.md + SPACING.sm, // Alinha com o texto do título
  },
}); 
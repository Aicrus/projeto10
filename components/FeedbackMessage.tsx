import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { useTheme } from '@/hooks/ThemeContext';
import { FEEDBACK_COLORS } from '@/constants/DesignSystem';

type FeedbackType = 'success' | 'warning' | 'error' | 'info';

interface FeedbackMessageProps {
  type: FeedbackType;
  message: string;
  description?: string;
}

export function FeedbackMessage({ type, message, description }: FeedbackMessageProps) {
  const { currentTheme } = useTheme();
  const colors = FEEDBACK_COLORS[currentTheme][type];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
        },
      ]}>
      <ThemedText
        style={[styles.message, { color: colors.text }]}
        type="defaultSemiBold">
        {message}
      </ThemedText>
      {description && (
        <ThemedText style={[styles.description, { color: colors.text }]} type="small">
          {description}
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    gap: 4,
  },
  message: {
    fontSize: 14,
    lineHeight: 20,
  },
  description: {
    opacity: 0.8,
  },
}); 
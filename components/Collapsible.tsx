import React, { useState } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

import { ThemedText } from './ThemedText';
import { useTheme } from '@/hooks/ThemeContext';
import { COLORS } from '@/constants/DesignSystem';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

export function Collapsible({ title, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme } = useTheme();

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withSpring(isOpen ? '180deg' : '0deg', {
            damping: 15,
            stiffness: 150,
          }),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIsOpen(!isOpen)} style={styles.header}>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
        <Animated.View style={iconStyle}>
          <Ionicons
            name="chevron-down"
            size={20}
            color={COLORS[currentTheme].text}
          />
        </Animated.View>
      </Pressable>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  content: {
    paddingTop: 8,
  },
});

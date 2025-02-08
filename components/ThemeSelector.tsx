import React, { useCallback, useEffect } from 'react';
import { StyleSheet, Pressable, View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  runOnJS,
} from 'react-native-reanimated';

import { ThemedView } from './ThemedView';
import { useTheme } from '@/hooks/ThemeContext';

const THEME_ICONS = {
  system: 'desktop-outline',
  light: 'sunny-outline',
  dark: 'moon-outline',
} as const;

const BUTTON_WIDTH = 32;
const PADDING = 2;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const getInitialPosition = (mode: 'system' | 'light' | 'dark') => {
  return mode === 'light' ? 0 : mode === 'dark' ? 1 : 2;
};

// Configurações específicas para cada plataforma
const SPRING_CONFIG = Platform.select({
  web: {
    damping: 15,
    stiffness: 150,
  },
  default: {
    damping: 20,
    stiffness: 200,
    mass: 0.5,
  },
});

export function ThemeSelector() {
  const { themeMode, setThemeMode, currentTheme } = useTheme();
  const translateX = useSharedValue(getInitialPosition(themeMode));

  // Atualiza a posição do slider quando o themeMode muda
  useEffect(() => {
    translateX.value = withSpring(
      getInitialPosition(themeMode) * BUTTON_WIDTH,
      SPRING_CONFIG
    );
  }, [themeMode]);

  const handlePress = useCallback((mode: 'system' | 'light' | 'dark') => {
    if (mode === themeMode) return; // Evita animações desnecessárias
    setThemeMode(mode);
  }, [setThemeMode, themeMode]);

  const animatedSliderStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const isDark = currentTheme === 'dark';

  return (
    <ThemedView style={styles.container}>
      <View 
        style={[
          styles.switchContainer, 
          { backgroundColor: isDark ? '#2C2C2C' : '#F1F1F1' }
        ]}>
        <Animated.View 
          style={[
            styles.slider, 
            animatedSliderStyle,
            { backgroundColor: '#0a7ea4' }
          ]} 
        />
        {(['light', 'dark', 'system'] as const).map((mode, index) => (
          <Pressable
            key={mode}
            style={[
              styles.option,
              index === 0 && styles.leftOption,
              index === 2 && styles.rightOption,
            ]}
            onPress={() => handlePress(mode)}>
            <Ionicons
              name={THEME_ICONS[mode]}
              size={16}
              color={themeMode === mode ? '#FFFFFF' : '#666666'}
            />
          </Pressable>
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 4,
  },
  switchContainer: {
    flexDirection: 'row',
    borderRadius: 6,
    padding: PADDING,
    position: 'relative',
    width: BUTTON_WIDTH * 3 + PADDING * 2,
    height: 32,
  },
  option: {
    width: BUTTON_WIDTH,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: PADDING,
    zIndex: 1,
  },
  slider: {
    position: 'absolute',
    width: BUTTON_WIDTH,
    height: 28,
    borderRadius: 4,
    zIndex: 0,
    left: PADDING,
    top: 2,
  },
  leftOption: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  rightOption: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
}); 
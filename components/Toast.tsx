import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Animated, Dimensions, Platform, Pressable } from 'react-native';
import { FeedbackMessage } from './FeedbackMessage';
import { SPACING, BORDER_RADIUS } from '@/constants/DesignSystem';

export type ToastPosition = 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type ToastType = 'success' | 'warning' | 'error' | 'info';

interface ToastProps {
  visible: boolean;
  message: string;
  description?: string;
  type: ToastType;
  position?: ToastPosition;
  duration?: number;
  onHide: () => void;
}

export function Toast({
  visible,
  message,
  description,
  type,
  position = 'top',
  duration = 5000,
  onHide,
}: ToastProps) {
  const [isPaused, setIsPaused] = useState(false);
  const translateY = useRef(new Animated.Value(visible ? 0 : -100)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const { width: screenWidth } = Dimensions.get('window');
  const hideTimeoutRef = useRef<NodeJS.Timeout>();

  const startHideTimer = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    
    hideTimeoutRef.current = setTimeout(() => {
      if (!isPaused) {
        hideToast();
      }
    }, duration);
  };

  useEffect(() => {
    if (visible) {
      // Animação de entrada
      Animated.parallel([
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
          tension: 50,
          friction: 8,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          tension: 50,
          friction: 8,
        }),
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
          tension: 50,
          friction: 8,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();

      startHideTimer();
    }

    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [visible]);

  useEffect(() => {
    if (!isPaused && visible) {
      startHideTimer();
    } else if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
  }, [isPaused]);

  const hideToast = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 0.8,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: -100,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onHide();
    });
  };

  const getPositionStyle = () => {
    const maxWidth = 400; // Largura máxima para o toast
    const horizontalPadding = SPACING.lg;
    
    const baseStyle = {
      position: 'absolute' as const,
      maxWidth: Math.min(maxWidth, screenWidth - (horizontalPadding * 2)),
      minWidth: Math.min(320, screenWidth - (horizontalPadding * 2)),
    };

    const getHorizontalPosition = (align: 'left' | 'right' | 'center') => {
      switch (align) {
        case 'left':
          return { left: horizontalPadding };
        case 'right':
          return { right: horizontalPadding };
        case 'center':
          return {
            left: '50%',
            transform: [
              { translateX: -baseStyle.maxWidth / 2 }
            ]
          };
      }
    };

    switch (position) {
      case 'top':
        return {
          ...baseStyle,
          top: SPACING.lg,
          ...getHorizontalPosition('center'),
        };
      case 'bottom':
        return {
          ...baseStyle,
          bottom: SPACING.lg,
          ...getHorizontalPosition('center'),
        };
      case 'top-left':
        return {
          ...baseStyle,
          top: SPACING.lg,
          ...getHorizontalPosition('left'),
        };
      case 'top-right':
        return {
          ...baseStyle,
          top: SPACING.lg,
          ...getHorizontalPosition('right'),
        };
      case 'bottom-left':
        return {
          ...baseStyle,
          bottom: SPACING.lg,
          ...getHorizontalPosition('left'),
        };
      case 'bottom-right':
        return {
          ...baseStyle,
          bottom: SPACING.lg,
          ...getHorizontalPosition('right'),
        };
      default:
        return baseStyle;
    }
  };

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        getPositionStyle(),
        {
          opacity,
          transform: [
            { translateY },
            { scale },
          ],
        },
      ]}>
      <Pressable
        onHoverIn={() => Platform.OS === 'web' && setIsPaused(true)}
        onHoverOut={() => Platform.OS === 'web' && setIsPaused(false)}
        onPressIn={() => Platform.OS !== 'web' && setIsPaused(true)}
        onPressOut={() => Platform.OS !== 'web' && setIsPaused(false)}
        style={styles.pressable}>
        <FeedbackMessage
          type={type}
          message={message}
          description={description}
        />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9999,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderRadius: BORDER_RADIUS.lg,
  },
  pressable: {
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    ...Platform.select({
      web: {
        cursor: 'default' as const,
      },
    }),
  },
}); 
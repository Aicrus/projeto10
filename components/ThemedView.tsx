import { View, type ViewProps } from 'react-native';

import { useTheme } from '@/hooks/ThemeContext';
import { COLORS } from '@/constants/DesignSystem';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const { currentTheme } = useTheme();
  const backgroundColor = currentTheme === 'dark' 
    ? darkColor ?? COLORS.dark.background
    : lightColor ?? COLORS.light.background;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}

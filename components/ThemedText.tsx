import { Text, type TextProps, StyleSheet, useWindowDimensions } from 'react-native';

import { useTheme } from '@/hooks/ThemeContext';
import { COLORS, getTypographyForBreakpoint } from '@/constants/DesignSystem';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 
    | 'default'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link'
    | 'small'
    // Display
    | 'displayLarge'
    | 'displayMedium'
    | 'displaySmall'
    // Headline
    | 'headlineLarge'
    | 'headlineMedium'
    | 'headlineSmall'
    // Label
    | 'labelLarge'
    | 'labelMedium'
    | 'labelSmall'
    // Body
    | 'bodySemiBold';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const { currentTheme } = useTheme();
  const { width } = useWindowDimensions();
  
  const typography = getTypographyForBreakpoint(width);
  
  const color = currentTheme === 'dark'
    ? darkColor ?? COLORS.dark.primaryText
    : lightColor ?? COLORS.light.primaryText;

  const getTypographyStyle = () => {
    switch (type) {
      // Display
      case 'displayLarge':
        return typography.displayLarge;
      case 'displayMedium':
        return typography.displayMedium;
      case 'displaySmall':
        return typography.displaySmall;
      // Headline
      case 'headlineLarge':
        return typography.headlineLarge;
      case 'headlineMedium':
        return typography.headlineMedium;
      case 'headlineSmall':
        return typography.headlineSmall;
      // Label
      case 'labelLarge':
        return typography.labelLarge;
      case 'labelMedium':
        return typography.labelMedium;
      case 'labelSmall':
        return typography.labelSmall;
      // Títulos existentes (mantidos para compatibilidade)
      case 'title':
        return typography.title;
      case 'subtitle':
        return typography.subtitle;
      case 'defaultSemiBold':
        return typography.bodySemiBold;
      case 'small':
        return typography.small;
      case 'link':
        return { ...typography.link, color: COLORS[currentTheme].primary };
      default:
        return typography.body;
    }
  };

  return (
    <Text
      style={[
        { color },
        getTypographyStyle(),
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});

import { Text, type TextProps, StyleSheet, useWindowDimensions } from 'react-native';

import { useTheme } from '@/hooks/ThemeContext';
import { COLORS, getTypographyForBreakpoint } from '@/constants/DesignSystem';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'small';
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
    ? darkColor ?? COLORS.dark.text
    : lightColor ?? COLORS.light.text;

  const getTypographyStyle = () => {
    switch (type) {
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

/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useTheme } from './ThemeContext';
import { COLORS } from '@/constants/DesignSystem';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof COLORS.light & keyof typeof COLORS.dark
) {
  const { currentTheme } = useTheme();
  const color = props[currentTheme] ?? COLORS[currentTheme][colorName];

  return color;
}

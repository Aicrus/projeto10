import { useWindowDimensions } from 'react-native';
import { BREAKPOINTS } from '@/constants/DesignSystem';

export function useBreakpoints() {
  const { width } = useWindowDimensions();

  return {
    isMobile: width < BREAKPOINTS.tablet, // Até 742px
    isTablet: width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop, // De 742px até 1024px
    isDesktop: width >= BREAKPOINTS.desktop, // 1024px ou mais
  };
} 
import { useWindowDimensions } from 'react-native';

export const BREAKPOINTS = {
  mobile: 0,    // De 0 até 742px
  tablet: 742,  // De 742px até 1024px
  desktop: 1024 // 1024px ou mais
} as const;

export function useBreakpoints() {
  const { width } = useWindowDimensions();

  return {
    isMobile: width < BREAKPOINTS.tablet, // Até 742px
    isTablet: width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop, // De 742px até 1024px
    isDesktop: width >= BREAKPOINTS.desktop, // 1024px ou mais
  };
} 
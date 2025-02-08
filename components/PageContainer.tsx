import { StyleSheet, ViewStyle, Platform } from 'react-native';
import { SPACING } from '@/constants/DesignSystem';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { ThemedView } from './ThemedView';

interface PageContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function PageContainer({ children, style }: PageContainerProps) {
  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  const nativePadding = Platform.OS !== 'web' ? {
    paddingBottom: 75,
    paddingTop: 45,
  } : {
    paddingBottom: undefined,
    paddingTop: undefined,
  };

  return (
    <ThemedView style={[
      styles.container,
      {
        maxWidth: isDesktop ? 1200 : 800,
        paddingHorizontal: isMobile ? SPACING.md : isTablet ? SPACING.xl : SPACING.xxl,
        paddingVertical: isMobile ? SPACING.md : isTablet ? SPACING.xl : SPACING.xxl,
        ...nativePadding,
      },
      style
    ]}>
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
  },
}); 
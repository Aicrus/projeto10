import { StyleSheet, Platform, ScrollView, Animated, useWindowDimensions, DimensionValue } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useRef, useEffect } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemeSelector } from '@/components/ThemeSelector';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { SPACING, TYPOGRAPHY, getTypographyForBreakpoint, COLORS } from '@/constants/DesignSystem';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { PageContainer } from '@/components/PageContainer';
import { useTheme } from '@/hooks/ThemeContext';

const EXPANDED_WIDTH = 240;
const COLLAPSED_WIDTH = 68;

export default function DashScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const typography = getTypographyForBreakpoint(width);
  const { isMobile, isTablet, isDesktop } = useBreakpoints();
  const [isExpanded, setIsExpanded] = useState(true);
  const animatedWidth = useRef(new Animated.Value(isMobile ? 0 : EXPANDED_WIDTH)).current;
  const { currentTheme } = useTheme();

  const handleNavigation = (route: string) => {
    if (route === '/dash') {
      router.push('/dash');
    } else if (route === '/config') {
      router.push('/config');
    }
  };

  const handleSidebarToggle = (expanded: boolean) => {
    setIsExpanded(expanded);
    Animated.timing(animatedWidth, {
      toValue: expanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <ThemedView style={[styles.container, { backgroundColor: COLORS[currentTheme].primaryBackground }]}>
      {!isMobile && (
        <Sidebar 
          onNavigate={handleNavigation} 
          currentPath="/dash"
          onToggle={handleSidebarToggle}
        />
      )}
      <Animated.View style={[
        styles.mainContent,
        { 
          left: isMobile ? 0 : animatedWidth,
          backgroundColor: COLORS[currentTheme].primaryBackground
        }
      ]}>
        <Header sidebarWidth={animatedWidth} onNavigate={handleNavigation} currentPath="/dash" />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <ThemedView style={[
            styles.contentContainer,
            {
              maxWidth: isDesktop ? 1200 : 800,
              alignSelf: 'center',
              width: '100%'
            }
          ]}>
            <PageContainer>
              <ThemedView style={styles.loremContainer}>
                <ThemedText style={[styles.quote, { 
                  fontSize: typography.title.fontSize,
                  lineHeight: typography.title.lineHeight,
                  fontWeight: '600'
                }]}>
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                </ThemedText>
                <ThemedText style={[styles.quoteTranslation, { 
                  fontSize: typography.subtitle.fontSize,
                  lineHeight: typography.subtitle.lineHeight,
                  fontWeight: '500'
                }]}>
                  "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                </ThemedText>
                
                <ThemedText style={[styles.ad, { 
                  fontSize: typography.bodySemiBold.fontSize,
                  lineHeight: typography.bodySemiBold.lineHeight,
                  fontWeight: '600'
                }]}>AD</ThemedText>
                
                <ThemedText style={[styles.paragraph, { 
                  fontSize: typography.body.fontSize,
                  lineHeight: typography.body.lineHeight,
                  fontWeight: '400'
                }]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id tempus augue. Mauris erat neque, dictum eu mollis nec, semper auctor erat. Nullam porttitor ipsum nec odio convallis, sed volutpat diam hendrerit. Suspendisse nec magna dapibus, lacinia elit ut, aliquet ipsum. Maecenas commodo libero ut erat fringilla, eu aliquam mi lobortis. Curabitur sit amet maximus enim. Cras facilisis rutrum sem at tincidunt. Cras commodo tempus dictum. Vestibulum ut varius mauris. Integer fringilla bibendum nulla eu pellentesque.
                </ThemedText>

                <ThemedText style={[styles.paragraph, { 
                  fontSize: typography.body.fontSize,
                  lineHeight: typography.body.lineHeight 
                }]}>
                  Curabitur nisi dolor, fringilla ullamcorper placerat non, scelerisque sed felis. Cras id massa nec sem tincidunt fringilla. Pellentesque venenatis sapien diam. Aliquam tincidunt bibendum massa eget mattis. Aliquam commodo ipsum odio, nec fringilla nisl mattis in. Suspendisse at dignissim ante, at placerat tortor. Proin sed elit mi. Cras vel consequat quam, sed auctor metus. Pellentesque aliquet dignissim erat quis dapibus. Nullam aliquet volutpat interdum. Nam aliquet facilisis tristique. Sed non cursus sapien, eu feugiat dui. Fusce eu risus consequat eros commodo vestibulum. Phasellus lacinia mollis lectus, et lacinia nibh lobortis et. Nam feugiat elit in vestibulum mollis. Donec commodo consectetur nunc, ac fermentum turpis pellentesque ac.
                </ThemedText>

                <ThemedText style={[styles.paragraph, { 
                  fontSize: typography.body.fontSize,
                  lineHeight: typography.body.lineHeight 
                }]}>
                  Maecenas a diam et justo hendrerit dapibus. Maecenas sit amet lobortis metus. Proin eleifend nisi quis ipsum placerat sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam eleifend nisl ut elit molestie, eget aliquet dui lobortis. Vestibulum in dolor vitae risus faucibus congue non eget nunc. Maecenas eu odio id dolor ullamcorper scelerisque. Ut vitae vehicula ex, non accumsan massa. In varius suscipit felis a bibendum. Sed varius, augue eleifend iaculis mattis, nibh neque suscipit augue, quis faucibus nibh felis id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque tempus quam quis nulla tincidunt mattis.
                </ThemedText>

                <ThemedText style={[styles.paragraph, { 
                  fontSize: typography.body.fontSize,
                  lineHeight: typography.body.lineHeight 
                }]}>
                  Cras non fringilla urna. Mauris viverra viverra laoreet. Nulla aliquam sagittis nisl. Vestibulum dignissim est nec tortor maximus, sit amet dapibus est lacinia. Quisque suscipit elementum nulla id laoreet. Donec porta arcu vel augue eleifend condimentum. Nulla id velit vitae velit sagittis ultrices. Morbi sit amet ultrices libero, id tempor mauris. Sed condimentum diam nec metus vehicula dignissim in a nunc. Duis ultricies vel lectus in consectetur. Vestibulum ac tempor purus. Sed eu odio viverra, consectetur ante interdum, interdum eros. Nullam lobortis, mi ut laoreet blandit, metus felis sagittis orci, sit amet rutrum sem neque eu tortor. Pellentesque rhoncus felis a pellentesque consectetur. Nunc finibus, sapien eget placerat tincidunt, orci nibh efficitur nunc, sit amet accumsan purus libero eu arcu. Morbi nisi metus, volutpat quis ipsum quis, auctor venenatis lectus.
                </ThemedText>

                <ThemedText style={[styles.paragraph, { 
                  fontSize: typography.body.fontSize,
                  lineHeight: typography.body.lineHeight 
                }]}>
                  Praesent tempus nisl nulla, eget pulvinar arcu molestie at. Integer mollis sit amet massa a dignissim. Integer lectus justo, varius id tellus nec, posuere pulvinar est. Nam nec laoreet magna. Nam sapien sapien, dapibus in scelerisque eget, porta ut orci. Curabitur ut tempor sem. Pellentesque ut felis id velit bibendum rutrum laoreet et urna.
                </ThemedText>
              </ThemedView>
            </PageContainer>
          </ThemedView>
        </ScrollView>
      </Animated.View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
  },
  mainContent: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    ...Platform.select({
      web: {
        transition: 'left 0.3s ease',
      },
    }),
  },
  scrollView: {
    flex: 1,
    marginTop: 64,
  },
  scrollContent: {
    minHeight: '100%',
    flexGrow: 1,
    display: 'flex',
  },
  contentContainer: {
    flex: 1,
  },
  loremContainer: {
    gap: SPACING.lg,
  },
  quote: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  quoteTranslation: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  ad: {
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  paragraph: {
    marginBottom: SPACING.lg,
  },
}); 
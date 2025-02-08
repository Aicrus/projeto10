import React from 'react';
import { StyleSheet, ScrollView, View, useWindowDimensions, Platform } from 'react-native';
import { useBreakpoints, BREAKPOINTS } from '@/hooks/useBreakpoints';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ThemeSelector } from '@/components/ThemeSelector';
import { useTheme } from '@/hooks/ThemeContext';
import { HelloWave } from '@/components/HelloWave';
import { FeedbackMessage } from '@/components/FeedbackMessage';
import { COLORS, FEEDBACK_COLORS, SPACING, SHADOWS, ICONS } from '@/constants/DesignSystem';
import { Home, Search, User } from 'lucide-react-native';

export default function DesignSystemScreen() {
  const { currentTheme } = useTheme();
  const breakpoints = useBreakpoints();
  const { width } = useWindowDimensions();

  const ColorBox = ({ color, name }: { color: string; name: string }) => (
    <ThemedView style={[styles.colorBox, SHADOWS[currentTheme].sm]}>
      <View style={[styles.colorSquare, { backgroundColor: color }]} />
      <ThemedText style={styles.colorName}>{name}</ThemedText>
      <ThemedText style={styles.colorHex}>{color}</ThemedText>
    </ThemedView>
  );

  const ComponentShowcase = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <ThemedView style={[styles.componentShowcase, SHADOWS[currentTheme].sm]}>
      <ThemedText type="defaultSemiBold">{title}</ThemedText>
      <ThemedView style={styles.componentDemo}>
        {children}
      </ThemedView>
    </ThemedView>
  );

  const SpacingBox = ({ size, value }: { size: string; value: number }) => (
    <ThemedView style={[styles.spacingBox, SHADOWS[currentTheme].sm]}>
      <View style={[styles.spacingVisual, { width: value, height: value }]} />
      <ThemedText style={styles.spacingLabel}>{size}: {value}px</ThemedText>
    </ThemedView>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <ThemedView style={styles.sectionTitle}>
      <ThemedView style={styles.sectionTitleAccent} />
      <ThemedText type="subtitle">{children}</ThemedText>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        
        {/* Cabeçalho com Informações do Tema */}
        <ThemedView style={[styles.header, SHADOWS[currentTheme].sm]}>
          <ThemedText type="title">Design System</ThemedText>
          <ThemedText type="small" style={styles.deviceInfo}>
            Tema Atual: {currentTheme === 'dark' ? 'Escuro' : 'Claro'} • Largura: {width}px
          </ThemedText>
          <ThemedText type="small" style={styles.deviceInfo}>
            Dispositivo: {
              width < BREAKPOINTS.tablet ? 'Mobile' :
              width < BREAKPOINTS.desktop ? 'Tablet' : 'Desktop'
            }
          </ThemedText>
          <ThemedView style={styles.themeControl}>
            <ThemedText type="defaultSemiBold">Alterar Tema</ThemedText>
            <ThemeSelector />
          </ThemedView>
        </ThemedView>

        {/* Guia de Cores */}
        <ThemedView style={styles.section}>
          <SectionTitle>Guia de Cores</SectionTitle>
          <ThemedText style={styles.sectionDescription}>
            Cores principais do sistema que definem a identidade visual da aplicação
          </ThemedText>

          <ThemedView style={styles.colorSection}>
            <ThemedText type="defaultSemiBold" style={styles.colorSectionTitle}>Cor Primária</ThemedText>
            <ThemedText style={styles.colorSectionDescription}>
              Usada para destacar elementos importantes, ações principais e indicar interatividade
            </ThemedText>
            <View style={styles.colorsGrid}>
              <ColorBox color={COLORS[currentTheme].primary} name="Primary" />
            </View>
          </ThemedView>

          <ThemedView style={styles.colorSection}>
            <ThemedText type="defaultSemiBold" style={styles.colorSectionTitle}>Cores Base</ThemedText>
            <ThemedText style={styles.colorSectionDescription}>
              Cores fundamentais para textos e fundos
            </ThemedText>
            <View style={styles.colorsGrid}>
              <ColorBox color={COLORS[currentTheme].text} name="Text" />
              <ColorBox color={COLORS[currentTheme].background} name="Background" />
            </View>
          </ThemedView>

          <ThemedView style={styles.colorSection}>
            <ThemedText type="defaultSemiBold" style={styles.colorSectionTitle}>Cores de Interface</ThemedText>
            <ThemedText style={styles.colorSectionDescription}>
              Utilizadas em ícones e elementos de navegação
            </ThemedText>
            <View style={styles.colorsGrid}>
              <ColorBox color={COLORS[currentTheme].icon} name="Icon" />
              <ColorBox color={COLORS[currentTheme].tabIconDefault} name="Tab Icon" />
              <ColorBox color={COLORS[currentTheme].tabIconSelected} name="Tab Selected" />
            </View>
          </ThemedView>

          <ThemedText style={[styles.componentDescription, { textAlign: 'left', marginTop: 16 }]}>
            💡 Para modificar as cores, edite o arquivo:
            <ThemedText style={{ fontFamily: 'SpaceMono' }}> constants/DesignSystem.ts</ThemedText>
          </ThemedText>
        </ThemedView>

        {/* Tipografia */}
        <ThemedView style={[styles.section, styles.typographySection]}>
          <SectionTitle>Tipografia</SectionTitle>
          <ThemedText style={styles.sectionDescription}>
            Sistema de textos responsivo que se adapta ao tamanho da tela
          </ThemedText>
          <ThemedView style={[styles.typographyContainer, SHADOWS[currentTheme].sm]}>
            <View style={styles.typographyItem}>
              <ThemedText type="title">Título</ThemedText>
              <ThemedText type="small" style={styles.typographyInfo}>
                {width < BREAKPOINTS.tablet ? '28px' : width < BREAKPOINTS.desktop ? '32px' : '36px'} • Bold
              </ThemedText>
            </View>
            <View style={styles.typographyItem}>
              <ThemedText type="subtitle">Subtítulo</ThemedText>
              <ThemedText type="small" style={styles.typographyInfo}>
                {width < BREAKPOINTS.tablet ? '18px' : width < BREAKPOINTS.desktop ? '20px' : '24px'} • Bold
              </ThemedText>
            </View>
            <View style={styles.typographyItem}>
              <ThemedText type="defaultSemiBold">Texto Semi-Bold</ThemedText>
              <ThemedText type="small" style={styles.typographyInfo}>
                {width < BREAKPOINTS.tablet ? '14px' : '16px'} • SemiBold
              </ThemedText>
            </View>
            <View style={styles.typographyItem}>
              <ThemedText>Texto Regular</ThemedText>
              <ThemedText type="small" style={styles.typographyInfo}>
                {width < BREAKPOINTS.tablet ? '14px' : '16px'} • Regular
              </ThemedText>
            </View>
            <View style={styles.typographyItem}>
              <ThemedText type="small">Texto Pequeno</ThemedText>
              <ThemedText type="small" style={styles.typographyInfo}>
                {width < BREAKPOINTS.tablet ? '12px' : '14px'} • Regular
              </ThemedText>
            </View>
            <View style={styles.typographyItem}>
              <ThemedText type="link">Link</ThemedText>
              <ThemedText type="small" style={styles.typographyInfo}>
                {width < BREAKPOINTS.tablet ? '14px' : '16px'} • Regular • Underline
              </ThemedText>
            </View>
            <View style={styles.typographyItem}>
              <ThemedText style={{ fontFamily: 'SpaceMono' }}>SpaceMono Font</ThemedText>
              <ThemedText type="small" style={styles.typographyInfo}>
                Fonte especial para código
              </ThemedText>
            </View>
          </ThemedView>
        </ThemedView>

        {/* Breakpoints */}
        <ThemedView style={styles.section}>
          <SectionTitle>Breakpoints</SectionTitle>
          <ThemedText style={styles.sectionDescription}>
            Pontos de quebra que definem a adaptação do layout em diferentes tamanhos de tela
          </ThemedText>
          <View style={styles.breakpointsContainer}>
            <ThemedView style={[styles.breakpointBox, SHADOWS[currentTheme].sm, breakpoints.isMobile && styles.activeBreakpoint]}>
              <ThemedText>Mobile</ThemedText>
              <ThemedText style={styles.breakpointValue}>{`0-${BREAKPOINTS.tablet-1}px`}</ThemedText>
              {breakpoints.isMobile && (
                <ThemedText type="small" style={styles.activeLabel}>Ativo</ThemedText>
              )}
            </ThemedView>
            <ThemedView style={[styles.breakpointBox, SHADOWS[currentTheme].sm, breakpoints.isTablet && styles.activeBreakpoint]}>
              <ThemedText>Tablet</ThemedText>
              <ThemedText style={styles.breakpointValue}>{`${BREAKPOINTS.tablet}-${BREAKPOINTS.desktop-1}px`}</ThemedText>
              {breakpoints.isTablet && (
                <ThemedText type="small" style={styles.activeLabel}>Ativo</ThemedText>
              )}
            </ThemedView>
            <ThemedView style={[styles.breakpointBox, SHADOWS[currentTheme].sm, breakpoints.isDesktop && styles.activeBreakpoint]}>
              <ThemedText>Desktop</ThemedText>
              <ThemedText style={styles.breakpointValue}>{`${BREAKPOINTS.desktop}px+`}</ThemedText>
              {breakpoints.isDesktop && (
                <ThemedText type="small" style={styles.activeLabel}>Ativo</ThemedText>
              )}
            </ThemedView>
          </View>
        </ThemedView>

        {/* Feedback Visual */}
        <ThemedView style={styles.section}>
          <SectionTitle>Feedback Visual</SectionTitle>
          <ThemedText style={styles.sectionDescription}>
            Mensagens e alertas para comunicação com o usuário
          </ThemedText>
          <View style={styles.feedbackContainer}>
            <FeedbackMessage
              type="success"
              message="Operação realizada com sucesso!"
              description="Feedback positivo para ações bem-sucedidas"
            />
            <FeedbackMessage
              type="warning"
              message="Atenção necessária"
              description="Alertas para situações que requerem atenção do usuário"
            />
            <FeedbackMessage
              type="error"
              message="Erro encontrado"
              description="Mensagens de erro para problemas e falhas"
            />
            <FeedbackMessage
              type="info"
              message="Informação importante"
              description="Mensagens informativas e dicas para o usuário"
            />
          </View>
        </ThemedView>

        {/* Espaçamento */}
        <ThemedView style={styles.section}>
          <SectionTitle>Sistema de Espaçamento</SectionTitle>
          <ThemedText style={styles.sectionDescription}>
            Escala de espaçamentos para manter consistência no layout
          </ThemedText>
          <View style={styles.spacingContainer}>
            {Object.entries(SPACING).map(([size, value]) => (
              <SpacingBox key={size} size={size} value={value} />
            ))}
          </View>
        </ThemedView>

        {/* Sombras */}
        <ThemedView style={styles.section}>
          <SectionTitle>Sistema de Elevação</SectionTitle>
          <ThemedText style={styles.sectionDescription}>
            Sombras para criar hierarquia visual e profundidade
          </ThemedText>
          <ThemedView style={[styles.shadowsContainer, SHADOWS[currentTheme].sm]}>
            <ThemedView style={[
              styles.shadowBox, 
              SHADOWS[currentTheme].sm,
              { backgroundColor: COLORS[currentTheme].background }
            ]}>
              <ThemedText>Small</ThemedText>
              <ThemedText type="small" style={styles.shadowInfo}>Elevação Sutil</ThemedText>
            </ThemedView>
            <ThemedView style={[
              styles.shadowBox, 
              SHADOWS[currentTheme].md,
              { backgroundColor: COLORS[currentTheme].background }
            ]}>
              <ThemedText>Medium</ThemedText>
              <ThemedText type="small" style={styles.shadowInfo}>Elevação Média</ThemedText>
            </ThemedView>
            <ThemedView style={[
              styles.shadowBox, 
              SHADOWS[currentTheme].lg,
              { backgroundColor: COLORS[currentTheme].background }
            ]}>
              <ThemedText>Large</ThemedText>
              <ThemedText type="small" style={styles.shadowInfo}>Elevação Alta</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {/* Componentes */}
        <ThemedView style={styles.section}>
          <SectionTitle>Biblioteca de Componentes</SectionTitle>
          <ThemedText style={styles.sectionDescription}>
            Componentes reutilizáveis que seguem o design system
          </ThemedText>
          
          <ThemedView style={[styles.componentGroup, SHADOWS[currentTheme].sm]}>
            <ThemedText type="defaultSemiBold">ThemeSelector</ThemedText>
            <ThemedText style={styles.componentDescription}>
              Controle para alternar entre temas claro, escuro e do sistema
            </ThemedText>
            <ThemeSelector />
          </ThemedView>

          <ThemedView style={[styles.componentGroup, SHADOWS[currentTheme].sm]}>
            <ThemedText type="defaultSemiBold">ThemedView</ThemedText>
            <ThemedText style={styles.componentDescription}>
              Container que se adapta automaticamente ao tema atual
            </ThemedText>
            <ThemedView style={styles.demoThemedView}>
              <ThemedText>Conteúdo do ThemedView</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={[styles.componentGroup, SHADOWS[currentTheme].sm]}>
            <ThemedText type="defaultSemiBold">HelloWave</ThemedText>
            <ThemedText style={styles.componentDescription}>
              Animação de onda para elementos interativos
            </ThemedText>
            <HelloWave />
          </ThemedView>

          <ThemedView style={[styles.componentGroup, SHADOWS[currentTheme].sm]}>
            <ThemedText type="defaultSemiBold">Sistema de Ícones</ThemedText>
            <ThemedText style={styles.componentDescription}>
              Sistema de ícones baseado no Lucide React. Oferece uma biblioteca completa de ícones consistentes e personalizáveis.
            </ThemedText>
            <ThemedText style={[styles.componentDescription, { marginTop: -8 }]}>
              Importar de: lucide-react-native
            </ThemedText>
            <View style={styles.iconGrid}>
              <View style={styles.iconItem}>
                <Home size={24} color={COLORS[currentTheme].text} strokeWidth={1.5} />
                <ThemedText style={styles.iconLabel}>Home</ThemedText>
              </View>
              <View style={styles.iconItem}>
                <Search size={24} color={COLORS[currentTheme].text} strokeWidth={1.5} />
                <ThemedText style={styles.iconLabel}>Search</ThemedText>
              </View>
              <View style={styles.iconItem}>
                <User size={24} color={COLORS[currentTheme].text} strokeWidth={1.5} />
                <ThemedText style={styles.iconLabel}>User</ThemedText>
              </View>
            </View>
            <ThemedText style={[styles.componentDescription, { marginTop: 8 }]}>
              Personalize com: size, color, strokeWidth
            </ThemedText>
          </ThemedView>
        </ThemedView>

      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 32,
  },
  header: {
    gap: 16,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  deviceInfo: {
    opacity: 0.7,
  },
  section: {
    gap: 24,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  sectionTitleAccent: {
    width: 4,
    height: 24,
    backgroundColor: COLORS.light.primary,
    borderRadius: 2,
  },
  breakpointsContainer: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  breakpointBox: {
    padding: 16,
    borderRadius: 12,
    flex: 1,
    minWidth: 150,
    alignItems: 'center',
  },
  activeBreakpoint: {
    backgroundColor: COLORS.light.primary + '10',
  },
  breakpointValue: {
    fontSize: 12,
    opacity: 0.7,
    marginTop: 4,
  },
  typographySection: {
    gap: 16,
  },
  typographyContainer: {
    padding: 24,
    borderRadius: 16,
    gap: 16,
  },
  colorsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
  },
  colorBox: {
    alignItems: 'center',
    gap: 12,
    minWidth: 120,
    padding: 16,
    borderRadius: 12,
  },
  colorSquare: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.light.icon,
  },
  colorName: {
    fontSize: 14,
    fontWeight: '600',
  },
  colorHex: {
    fontSize: 12,
    opacity: 0.7,
  },
  componentShowcase: {
    gap: 12,
    padding: 20,
    borderRadius: 16,
  },
  componentDemo: {
    padding: 20,
    gap: 12,
    borderRadius: 12,
    backgroundColor: COLORS.light.background + '10',
    alignItems: 'center',
  },
  demoThemedView: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.light.background + '10',
  },
  iconGrid: {
    flexDirection: 'row',
    gap: 24,
    justifyContent: 'center',
    padding: 8,
    width: '100%',
  },
  iconItem: {
    alignItems: 'center',
    gap: 8,
  },
  iconLabel: {
    fontSize: 12,
    opacity: 0.7,
  },
  feedbackContainer: {
    gap: 16,
  },
  spacingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'center',
  },
  spacingBox: {
    alignItems: 'center',
    gap: 12,
    padding: 16,
    borderRadius: 12,
  },
  spacingVisual: {
    backgroundColor: COLORS.light.primary + '40',
    borderRadius: 6,
  },
  spacingLabel: {
    fontSize: 12,
  },
  shadowsContainer: {
    flexDirection: 'row',
    gap: 24,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    borderRadius: 16,
  },
  shadowBox: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 120,
  },
  themeControl: {
    gap: 8,
    alignItems: 'center',
  },
  sectionDescription: {
    opacity: 0.7,
    marginBottom: 16,
  },
  typographyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  typographyInfo: {
    opacity: 0.7,
  },
  componentDescription: {
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 8,
  },
  activeLabel: {
    color: COLORS.light.primary,
    marginTop: 4,
  },
  shadowInfo: {
    opacity: 0.7,
    marginTop: 4,
  },
  componentGroup: {
    padding: 20,
    borderRadius: 16,
    gap: 16,
    alignItems: 'center',
    width: '100%',
  },
  colorSection: {
    gap: 12,
    marginBottom: 24,
  },
  colorSectionTitle: {
    marginBottom: 4,
  },
  colorSectionDescription: {
    opacity: 0.7,
    marginBottom: 16,
  },
}); 
import { TextStyle } from 'react-native';

// Breakpoints do Sistema
export const BREAKPOINTS = {
  mobile: 0,    // De 0 até 742px
  tablet: 742,  // De 742px até 1024px
  desktop: 1024 // 1024px ou mais
} as const;

// Cores do Sistema
export const COLORS = {
  light: {
    // Brand Colors - Cores principais da marca
    primary: '#6366F1',    // Indigo vibrante - Cor principal moderna e tecnológica
    secondary: '#22D3EE',  // Ciano vibrante - Complementa o indigo com um tom refrescante
    tertiary: '#F43F5E',   // Rosa vibrante - Adiciona energia e contraste
    alternate: '#e0e3e7',  // Cor alternativa (igual à imagem #e0e3e7)

    // Utility Colors - Cores utilitárias para texto e fundo
    primaryText: '#14181b',    // Cor principal para textos (igual à imagem)
    secondaryText: '#57636c',  // Cor secundária para textos (igual à imagem)
    primaryBackground: '#F7F8FA',   // Cor de fundo principal (igual à imagem)
    secondaryBackground: '#ffffff', // Cor de fundo secundária (igual à imagem)

    // System Colors - Cores do sistema
    icon: '#57636c',           // Mesma cor do secondaryText para consistência
    tabIconDefault: '#57636c', // Mesma cor do secondaryText para consistência
    tabIconSelected: '#6366F1',// Usa a cor primary
    divider: '#e0e3e7',        // Mesma cor do alternate
    hover: '#00000008',        // Hover suave
  },
  dark: {
    // Brand Colors - Cores principais da marca no tema escuro
    primary: '#6366F1',    // Mantém a mesma cor primária
    secondary: '#22D3EE',  // Mantém a mesma cor secundária
    tertiary: '#F43F5E',   // Mantém a mesma cor terciária
    alternate: '#262d34',  // Cor alternativa (igual à imagem #262d34)

    // Utility Colors - Cores utilitárias adaptadas para o tema escuro
    primaryText: '#ffffff',    // Texto principal (igual à imagem)
    secondaryText: '#95a1ac',  // Texto secundário (igual à imagem)
    primaryBackground: '#1d2428',   // Fundo principal (igual à imagem)
    secondaryBackground: '#14181b', // Fundo secundário (igual à imagem)

    // System Colors - Cores do sistema adaptadas para o tema escuro
    icon: '#95a1ac',           // Mesma cor do secondaryText para consistência
    tabIconDefault: '#95a1ac', // Mesma cor do secondaryText para consistência
    tabIconSelected: '#ffffff',// Branco para melhor contraste
    divider: '#262d34',        // Mesma cor do alternate
    hover: '#FFFFFF08',        // Hover suave
  },
} as const;

// Cores de Feedback - Usadas para mensagens e alertas
export const FEEDBACK_COLORS = {
  light: {
    success: {
      background: '#E7F7EE', // Fundo verde suave para sucesso
      text: '#1B4332',      // Texto verde escuro para contraste
      border: '#2D6A4F',    // Borda verde média para destaque
    },
    warning: {
      background: '#FEF3C7', // Fundo amarelo suave para avisos
      text: '#92400E',      // Texto laranja escuro para contraste
      border: '#D97706',    // Borda laranja para destaque
    },
    error: {
      background: '#FEE2E2', // Fundo vermelho suave para erros
      text: '#991B1B',      // Texto vermelho escuro para contraste
      border: '#DC2626',    // Borda vermelha para destaque
    },
    info: {
      background: '#E0F2FE', // Fundo azul suave para informações
      text: '#075985',      // Texto azul escuro para contraste
      border: '#0284C7',    // Borda azul para destaque
    },
  },
  dark: {
    success: {
      background: '#064E3B', // Fundo verde escuro para sucesso
      text: '#ECFDF5',      // Texto verde claro para contraste
      border: '#059669',    // Borda verde média para destaque
    },
    warning: {
      background: '#451A03', // Fundo laranja escuro para avisos
      text: '#FEF3C7',      // Texto amarelo claro para contraste
      border: '#D97706',    // Borda laranja para destaque
    },
    error: {
      background: '#450A0A', // Fundo vermelho escuro para erros
      text: '#FEE2E2',      // Texto vermelho claro para contraste
      border: '#DC2626',    // Borda vermelha para destaque
    },
    info: {
      background: '#082F49', // Fundo azul escuro para informações
      text: '#E0F2FE',      // Texto azul claro para contraste
      border: '#0284C7',    // Borda azul para destaque
    },
  },
};

// Tipografia Responsiva
export const TYPOGRAPHY: {
  mobile: { [key: string]: TextStyle };
  tablet: { [key: string]: TextStyle };
  desktop: { [key: string]: TextStyle };
} = {
  mobile: {
    // Display - Títulos grandes e impactantes
    displayLarge: {
      fontSize: 48,
      lineHeight: 56,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    displayMedium: {
      fontSize: 40,
      lineHeight: 48,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    displaySmall: {
      fontSize: 36,
      lineHeight: 44,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    // Headings - Títulos de seção
    headlineLarge: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    headlineMedium: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    headlineSmall: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    // Títulos existentes (mantidos para compatibilidade)
    title: {
      fontSize: 28,
      lineHeight: 32,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    subtitle: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    // Labels - Textos de destaque
    labelLarge: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
      fontFamily: 'Inter_600SemiBold',
    },
    labelMedium: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '600',
      fontFamily: 'Inter_600SemiBold',
    },
    labelSmall: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '600',
      fontFamily: 'Inter_600SemiBold',
    },
    // Body - Textos de conteúdo
    body: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400',
      fontFamily: 'Inter_400Regular',
    },
    bodySemiBold: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '600',
      fontFamily: 'Inter_600SemiBold',
    },
    small: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '400',
      fontFamily: 'Inter_400Regular',
    },
    link: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400',
      fontFamily: 'Inter_400Regular',
      textDecorationLine: 'underline',
    },
  },
  tablet: {
    // Display - Títulos grandes e impactantes
    displayLarge: {
      fontSize: 56,
      lineHeight: 64,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    displayMedium: {
      fontSize: 48,
      lineHeight: 56,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    displaySmall: {
      fontSize: 40,
      lineHeight: 48,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    // Headings - Títulos de seção
    headlineLarge: {
      fontSize: 36,
      lineHeight: 44,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    headlineMedium: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    headlineSmall: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    // Títulos existentes (mantidos para compatibilidade)
    title: {
      fontSize: 32,
      lineHeight: 36,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    subtitle: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    // Labels - Textos de destaque
    labelLarge: {
      fontSize: 18,
      lineHeight: 28,
      fontWeight: '600',
      fontFamily: 'Inter_600SemiBold',
    },
    labelMedium: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
      fontFamily: 'Inter_600SemiBold',
    },
    labelSmall: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '600',
      fontFamily: 'Inter_600SemiBold',
    },
    // Body - Textos de conteúdo
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
      fontFamily: 'Inter_400Regular',
    },
    bodySemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
      fontFamily: 'Inter_600SemiBold',
    },
    small: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400',
      fontFamily: 'Inter_400Regular',
    },
    link: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
      fontFamily: 'Inter_400Regular',
      textDecorationLine: 'underline',
    },
  },
  desktop: {
    // Display - Títulos grandes e impactantes
    displayLarge: {
      fontSize: 64,
      lineHeight: 72,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    displayMedium: {
      fontSize: 56,
      lineHeight: 64,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    displaySmall: {
      fontSize: 48,
      lineHeight: 56,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    // Headings - Títulos de seção
    headlineLarge: {
      fontSize: 40,
      lineHeight: 48,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    headlineMedium: {
      fontSize: 36,
      lineHeight: 44,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    headlineSmall: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    // Títulos existentes (mantidos para compatibilidade)
    title: {
      fontSize: 36,
      lineHeight: 40,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    subtitle: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
    // Labels - Textos de destaque
    labelLarge: {
      fontSize: 20,
      lineHeight: 32,
      fontWeight: '600',
      fontFamily: 'Inter_600SemiBold',
    },
    labelMedium: {
      fontSize: 18,
      lineHeight: 28,
      fontWeight: '600',
      fontFamily: 'Inter_600SemiBold',
    },
    labelSmall: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
      fontFamily: 'Inter_600SemiBold',
    },
    // Body - Textos de conteúdo
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
      fontFamily: 'Inter_400Regular',
    },
    bodySemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
      fontFamily: 'Inter_600SemiBold',
    },
    small: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400',
      fontFamily: 'Inter_400Regular',
    },
    link: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
      fontFamily: 'Inter_400Regular',
      textDecorationLine: 'underline',
    },
  },
};

// Espaçamento
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Bordas
export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  pill: 999,
};

// Sombras
export const SHADOWS = {
  light: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 8,
    },
  },
  dark: {
    sm: {
      shadowColor: '#fff',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#fff',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#fff',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 8,
      elevation: 8,
    },
  },
};

// Sistema de Ícones
export const ICONS = {
  // Ícones do Lucide React
  // Para Web: import { Home } from 'lucide-react';
  // Para Native: import { Home } from 'lucide-react-native';
  // Exemplo Web/Native: <Home size={ICONS.sizes.md} color={COLORS[currentTheme].text} />
  types: {
    navigation: {
      home: 'LayoutDashboard',
      explore: 'Compass',
      profile: 'User',
      designSystem: 'Palette',
    },
    interface: {
      chevronDown: 'ChevronDown',
      chevronRight: 'ChevronRight',
      close: 'X',
      menu: 'Menu',
    },
    feedback: {
      success: 'CheckCircle',
      warning: 'AlertTriangle',
      error: 'XCircle',
      info: 'Info',
    },
  },
  sizes: {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
  },
} as const;

// Helpers para responsividade
export function getTypographyForBreakpoint(width: number) {
  if (width >= BREAKPOINTS.desktop) {
    return TYPOGRAPHY.desktop;
  } else if (width >= BREAKPOINTS.tablet) {
    return TYPOGRAPHY.tablet;
  }
  return TYPOGRAPHY.mobile;
} 
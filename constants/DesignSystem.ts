import { BREAKPOINTS } from '@/hooks/useBreakpoints';

// Cores do Sistema
export const COLORS = {
  light: {
    primary: '#0a7ea4', // Cor principal do projeto
    text: '#11181C',    // Cor base para textos
    background: '#fff', // Cor de fundo padrão
    icon: '#71717A',    // Cor padrão para ícones
    tabIconDefault: '#71717A', // Cor dos ícones inativos na tab
    tabIconSelected: '#0a7ea4', // Cor dos ícones ativos na tab (igual à primary)
  },
  dark: {
    primary: '#0a7ea4', // Cor principal do projeto
    text: '#ECEDEE',    // Cor base para textos no tema escuro
    background: '#151718', // Cor de fundo no tema escuro
    icon: '#A1A1AA',    // Cor padrão para ícones no tema escuro
    tabIconDefault: '#A1A1AA', // Cor dos ícones inativos na tab no tema escuro
    tabIconSelected: '#fff', // Cor dos ícones ativos na tab no tema escuro
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
export const TYPOGRAPHY = {
  mobile: {
    title: {
      fontSize: 28,
      lineHeight: 32,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 14,
      lineHeight: 20,
    },
    bodySemiBold: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '600',
    },
    small: {
      fontSize: 12,
      lineHeight: 16,
    },
    link: {
      fontSize: 14,
      lineHeight: 20,
      textDecorationLine: 'underline',
    },
  },
  tablet: {
    title: {
      fontSize: 32,
      lineHeight: 36,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    bodySemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
    },
    small: {
      fontSize: 14,
      lineHeight: 20,
    },
    link: {
      fontSize: 16,
      lineHeight: 24,
      textDecorationLine: 'underline',
    },
  },
  desktop: {
    title: {
      fontSize: 36,
      lineHeight: 40,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    bodySemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
    },
    small: {
      fontSize: 14,
      lineHeight: 20,
    },
    link: {
      fontSize: 16,
      lineHeight: 24,
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
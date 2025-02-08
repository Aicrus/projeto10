# 🔒 REGRAS_FUNDAMENTAIS.md

## 🎯 Propósito
Este documento é o guia mestre do projeto. Ele contém todas as regras e padrões que DEVEM ser seguidos em TODAS as modificações.

## ⚡ Atenção
Este documento é OBRIGATÓRIO em todos os novos chats. Suas regras são invioláveis e devem ser seguidas à risca.

## ⚡ Lembre-se
Ao receber este documento em um novo chat, você DEVE seguir TODAS as regras e diretrizes aqui estabelecidas.

## ⚠️ Regras de Modificação de Código

### Princípio Fundamental
Altere APENAS o que foi explicitamente solicitado. Mantenha todo o resto intacto.

### O que NÃO fazer:
- ❌ Não remova código existente sem autorização
- ❌ Não altere cores que não foram mencionadas
- ❌ Não mude posicionamentos não solicitados
- ❌ Não modifique a estrutura existente
- ❌ Não altere nomes de variáveis/funções sem pedido
- ❌ Não atualize bibliotecas/dependências sem solicitação

### O que fazer:
- ✅ Faça APENAS as alterações solicitadas
- ✅ Mantenha a consistência com o código existente
- ✅ Preserve todas as funcionalidades não mencionadas
- ✅ Se houver dúvida, pergunte antes de alterar
- ✅ Informe se identificar problemas em outras partes

### Exemplo:
Se o pedido for "mude a cor do botão para azul":
```typescript
// ✅ CORRETO: Altera apenas a cor do botão
style={{ backgroundColor: 'blue' }}

// ❌ ERRADO: Altera outras propriedades não solicitadas
style={{ 
  backgroundColor: 'blue',
  margin: 20,        // Não solicitado
  padding: 10,       // Não solicitado
  borderRadius: 8    // Não solicitado
}}
```

## 🎨 Sistema de Tema

O projeto usa um sistema de tema centralizado através do `ThemeContext`. Este é o ÚNICO sistema de tema que deve ser usado.

### Funcionalidades do Tema
- Suporta modos claro, escuro e sistema
- Persiste a preferência no AsyncStorage
- Sincroniza com o tema do sistema operacional
- Integra com o Design System
- Atualiza componentes automaticamente

### Como Usar o Tema
```typescript
import { useTheme } from '@/hooks/ThemeContext';

function MeuComponente() {
  const { currentTheme, themeMode, setThemeMode } = useTheme();
  
  // currentTheme: 'light' | 'dark' (tema atual)
  // themeMode: 'light' | 'dark' | 'system' (preferência do usuário)
  // setThemeMode: função para mudar o tema
  
  return (
    <ThemedView>
      <ThemedText>Seu conteúdo aqui</ThemedText>
    </ThemedView>
  );
}
```

## 🎨 Design System

### Imports Essenciais
```typescript
// Design System
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, getTypographyForBreakpoint } from '@/constants/DesignSystem';

// Tema
import { useTheme } from '@/hooks/ThemeContext';

// Componentes Base
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
```

### Breakpoints
```typescript
const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};
```

### Uso do Tema
```typescript
const { currentTheme } = useTheme();
const themeColors = COLORS[currentTheme];
```

### Tipografia Responsiva
```typescript
const { width } = useWindowDimensions();
const typography = getTypographyForBreakpoint(width);
```

## 🚫 Práticas a Evitar

1. **NÃO** usar imports de tema de outros lugares:
```typescript
// ❌ ERRADO
import { useTheme } from '@/src/hooks/useTheme';

// ✅ CORRETO
import { useTheme } from '@/hooks/ThemeContext';
```

2. **NÃO** definir cores hardcoded:
```typescript
// ❌ ERRADO
style={{ color: '#000000' }}

// ✅ CORRETO
style={{ color: COLORS[currentTheme].text }}
```

## 📱 Componentes Responsivos

Sempre considerar os três breakpoints:
- 📱 Mobile (0-767px)
- 📟 Tablet (768-1023px)
- 🖥️ Desktop (1024px+)

## 🎨 Cores do Sistema

```typescript
const COLORS = {
  light: {
    primary: '#0a7ea4',
    text: '#11181C',
    background: '#fff',
    icon: '#71717A',
    divider: '#EBEBEB',
  },
  dark: {
    primary: '#0a7ea4',
    text: '#ECEDEE',
    background: '#151718',
    icon: '#A1A1AA',
    divider: '#292929',
  },
};
```

## 📏 Espaçamento

```typescript
const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};
```

## 🔲 Bordas

```typescript
const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  pill: 999,
};
```

## 🎯 Checklist para Novos Componentes

1. [ ] Usar imports corretos do Design System
2. [ ] Implementar suporte a tema claro/escuro
3. [ ] Usar tipografia responsiva
4. [ ] Considerar os três breakpoints
5. [ ] Usar espaçamentos do Design System
6. [ ] Usar cores do tema atual
7. [ ] Implementar animações suaves (quando necessário)

## 💡 Dicas

1. Use `ThemedView` e `ThemedText` para componentes que precisam respeitar o tema
2. Sempre teste em modo claro e escuro
3. Verifique a responsividade em diferentes tamanhos de tela
4. Use as constantes do Design System para manter consistência 
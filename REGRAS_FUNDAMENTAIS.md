# 🔒 REGRAS_FUNDAMENTAIS.md

## 🎯 Propósito e Escopo
Este documento é o guia mestre OBRIGATÓRIO que estabelece as regras invioláveis para TODAS as modificações no projeto. Toda interação deve seguir estas diretrizes RIGOROSAMENTE.

## 🚨 Regras Primárias (NUNCA IGNORAR)

1. **Princípio da Preservação**
   - NUNCA modifique código existente sem solicitação explícita
   - SEMPRE preserve toda a estrutura atual do projeto
   - MANTENHA todos os padrões e convenções existentes

2. **Princípio da Consistência**
   - SEMPRE siga o Design System estabelecido
   - NUNCA introduza novos padrões sem autorização
   - MANTENHA a coerência com o código existente

3. **Princípio da Mínima Interferência**
   - FAÇA apenas o que foi especificamente solicitado
   - EVITE alterações além do escopo definido
   - CONSULTE antes de fazer alterações adicionais

## ⚡ Diretrizes de Modificação

### 🚫 Proibições Absolutas
1. NÃO altere:
   - Cores não mencionadas
   - Estrutura de arquivos
   - Nomes de variáveis/funções
   - Dependências/versões
   - Configurações existentes
   - Padrões de código

2. NÃO adicione:
   - Novas dependências sem autorização
   - Funcionalidades não solicitadas
   - Novos arquivos sem pedido explícito

### ✅ Ações Obrigatórias
1. SEMPRE:
   - Siga o Design System
   - Use os componentes temáticos (ThemedView, ThemedText)
   - Mantenha a responsividade
   - Preserve a tipagem TypeScript
   - Respeite os breakpoints definidos

2. ANTES de cada modificação:
   - Confirme o escopo exato da mudança
   - Verifique impactos em outras partes
   - Valide a necessidade real da alteração

## 🎨 Sistema de Design (NUNCA IGNORAR)

### Imports Obrigatórios
```typescript
// SEMPRE use estes imports para consistência
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY } from '@/constants/DesignSystem';
import { useTheme } from '@/hooks/ThemeContext';
import { ThemedView, ThemedText } from '@/components/ui';
```

### Cores e Temas
```typescript
// ✅ CORRETO
const { currentTheme } = useTheme();
style={{ color: COLORS[currentTheme].text }}

// ❌ ERRADO - NUNCA faça isso
style={{ color: '#000000' }}
```

### Breakpoints (SEMPRE RESPEITAR)
```typescript
const BREAKPOINTS = {
  mobile: 0,      // 0-767px
  tablet: 768,    // 768-1023px
  desktop: 1024,  // 1024px+
};

// ✅ CORRETO
import { useWindowDimensions } from 'react-native';

const { width } = useWindowDimensions();
const isMobile = width < BREAKPOINTS.tablet;
const isTablet = width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop;
const isDesktop = width >= BREAKPOINTS.desktop;
```

## 📱 Regras Específicas do Expo

1. **Configurações do Expo**
   - NUNCA altere o app.json sem autorização
   - MANTENHA as configurações de plugins inalteradas
   - RESPEITE as configurações específicas de plataforma
## 🔍 Checklist de Verificação (USAR EM TODA MODIFICAÇÃO)
```

1. [ ] A modificação foi EXPLICITAMENTE solicitada?
2. [ ] Está usando APENAS os imports corretos?
3. [ ] Mantém suporte a tema claro/escuro?
4. [ ] Respeita TODOS os breakpoints?
5. [ ] Usa APENAS constantes do Design System?
6. [ ] Preserva TODA a estrutura existente?
7. [ ] Mantém TODA a tipagem TypeScript?

## ⚠️ Processo de Modificação

1. **ANTES de modificar:**
   - Confirme o escopo EXATO
   - Verifique dependências
   - Identifique impactos

2. **DURANTE a modificação:**
   - Siga o checklist RIGOROSAMENTE
   - Mantenha o escopo limitado
   - Documente alterações

3. **APÓS a modificação:**
   - Verifique em todos os temas
   - Teste em todos os breakpoints
   - Confirme tipagem TypeScript

## 📋 Exemplo Prático

Se receber: "Mude a cor do botão para azul"

```typescript
// ✅ CORRETO - Apenas o solicitado
style={{ 
  backgroundColor: COLORS[currentTheme].primary 
}}

// ❌ ERRADO - Alterações não solicitadas
style={{ 
  backgroundColor: COLORS[currentTheme].primary,
  margin: 20,        // NÃO SOLICITADO
  padding: 10,       // NÃO SOLICITADO
  borderRadius: 8    // NÃO SOLICITADO
}}
```

## 🎯 Conclusão

Este documento é a BASE de todas as modificações. NUNCA ignore estas regras. Em caso de dúvida, SEMPRE pergunte antes de modificar.

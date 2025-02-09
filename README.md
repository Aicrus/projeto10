# 🎨 Projeto Base com Design System

## 📋 Índice
- [👋 Introdução](#-introdução)
- [✨ Destaques](#-destaques)
- [🚀 Começando](#-começando)
- [🔐 Configuração do Supabase](#-configuração-do-supabase)
- [🚀 Deploy](#-deploy)
- [📱 Executando o Projeto](#-executando-o-projeto)
- [🎯 Estrutura de Navegação](#-estrutura-de-navegação)
- [🎨 Design System](#-design-system)
- [📦 Componentes Principais](#-componentes-principais)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [💻 Desenvolvimento](#-desenvolvimento)
- [🤝 Suporte](#-suporte)

## 👋 Introdução

Bem-vindo ao nosso projeto base! Este é um template moderno e flexível para criar aplicações incríveis que funcionam tanto na web quanto em dispositivos móveis. Nosso objetivo é tornar o desenvolvimento mais fácil e divertido, fornecendo uma base sólida com as melhores práticas já implementadas.

## ✨ Destaques

- 🌓 Modo Claro e Escuro (igual ao Instagram/WhatsApp)
- 📱 Design Responsivo (funciona em qualquer tela)
- 🎯 Componentes Reutilizáveis
- 🖌️ Design System Completo
- 🌐 Suporte Web e Mobile Nativo
- 🚀 Deploy Simplificado

## 🚀 Começando

### 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

1. [Git](https://git-scm.com) - Para baixar e versionar o projeto
2. [Node.js](https://nodejs.org/) - Use a versão LTS
3. [npm](https://www.npmjs.com/) - Vem junto com o Node.js
4. [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) - Para desenvolvimento mobile

> 💡 **Dica**: Verifique se já tem algo instalado usando estes comandos:
> ```bash
> git --version
> node --version
> npm --version
> ```

### 🎮 Configuração Inicial

1. **Clone o Projeto**
   ```bash
   git clone [url-do-repositório]
   cd [nome-do-projeto]
   ```

2. **Instale as Dependências**
   ```bash
   npm install
   ```

3. **Instale o Expo CLI**
   ```bash
   npm install -g expo-cli
   ```

## 🔐 Configuração do Supabase

### 🎯 Passo a Passo

1. **Crie o Arquivo de Ambiente**
   ```bash
   # Mac/Linux
   touch .env
   # Windows
   type nul > .env
   ```

2. **Configure as Variáveis**
   - Copie o conteúdo de `.env.example` para `.env`
   ```bash
   cp .env.example .env
   ```

3. **Obtenha suas Credenciais**
   1. Acesse [supabase.com](https://supabase.com)
   2. Crie uma conta ou faça login
   3. Crie um novo projeto
   4. Vá em "Settings" > "API"
   5. Copie:
      - Project URL → Cole em `EXPO_PUBLIC_SUPABASE_URL`
      - anon public → Cole em `EXPO_PUBLIC_SUPABASE_ANON_KEY`

## 🚀 Deploy

### 💡 Configuração na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Vá em seu projeto
3. Clique em "Settings" > "Environment Variables"
4. Adicione cada variável separadamente:

   **Primeira Variável:**
   - Key: `EXPO_PUBLIC_SUPABASE_URL`
   - Value: sua_url_do_supabase (exemplo: https://seu-projeto.supabase.co)

   **Segunda Variável:**
   - Key: `EXPO_PUBLIC_SUPABASE_ANON_KEY`
   - Value: sua_chave_anonima_do_supabase

   > 💡 **Dica**: Você verá dois campos separados para cada variável: um para a "Key" (nome da variável) e outro para o "Value" (valor da variável)

> ⚠️ **Importante**: Use EXATAMENTE estes nomes de variáveis e mantenha suas credenciais seguras!

### 🎯 Por que a Vercel?

- ✨ Padrão da Indústria
- 🚀 Performance Excepcional
- 🎁 Plano Gratuito Generoso
- 🔒 Segurança de Primeira
- 🎯 Deploy Automático
- 📊 Analytics Incluído

## 📱 Executando o Projeto

Escolha como deseja executar:

```bash
# Web
npm run web

# iOS
npm run ios

# Android
npm run android
```

## 🎯 Estrutura de Navegação

### 🔄 Rotas Principais

1. **Usuários Não Logados**
   - Padrão: `/(auth)/login`
   - Para alterar, edite `app/index.tsx`:
   ```typescript
   import { Redirect } from 'expo-router';
   
   export default function Index() {
     return <Redirect href="/(auth)/sua-nova-rota" />;
   }
   ```
   > 💡 **Dica**: Crie o arquivo correspondente em `app/(auth)/sua-nova-rota.tsx`

2. **Usuários Logados**
   - Padrão: `/(tabs)/dash` (nossa tela inicial após login)
   - Para alterar, edite `contexts/auth.tsx`

### 📱 Fluxo de Autenticação
- Login: `/(auth)/login`
- Cadastro: `/(auth)/signup`
- Home após login: `/(tabs)/dash`

## 🎨 Design System

### 🎨 Cores do Sistema
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

### 📏 Sistema de Espaçamento
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

### 📱 Breakpoints
```typescript
const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};
```

## 📦 Componentes Principais

### 🔔 Toast
```typescript
import { useToast } from '@/hooks/useToast';

const { showToast } = useToast();
showToast({
  type: 'success', // 'success' | 'warning' | 'error' | 'info'
  message: 'Deu tudo certo!',
  description: 'Seus dados foram salvos', // Opcional
  position: 'top', // Opcional
  duration: 5000, // Opcional
});
```

### 📄 PageContainer
```typescript
import { PageContainer } from '@/components/PageContainer';

export default function MinhaTelaLinda() {
  return (
    <PageContainer>
      {/* Seu conteúdo aqui */}
    </PageContainer>
  );
}
```

### 🧭 Sidebar e Header
```typescript
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';

// Usar na sua tela
<Sidebar 
  onNavigate={handleNavigation} 
  currentPath="/sua-rota"
/>

<Header 
  sidebarWidth={currentSidebarWidth} 
  onNavigate={handleNavigation}
/>
```

## 📁 Estrutura do Projeto

```
📱 Estrutura Principal
/.expo              # Configurações do Expo
/app                # Páginas e rotas da aplicação
  /(auth)           # Rotas de autenticação
    /_layout.tsx    # Layout das telas de auth
    /login.tsx      # Tela de login
    /register.tsx   # Tela de registro
  /(tabs)           # Rotas autenticadas
    /_layout.tsx    # Layout das tabs
    /dash.tsx       # Dashboard (tela inicial)
    /design-system.tsx  # Visualização do Design System
  /+not-found.tsx   # Página 404

🎨 Assets e Componentes
/assets            # Recursos estáticos
/components        # Componentes reutilizáveis
  /ui             # Componentes base (botões, inputs, etc)
/constants        # Design System e configurações
/contexts         # Contextos do React
/hooks            # Hooks personalizados
/lib              # Bibliotecas e utilitários
/types            # Definições de tipos TypeScript

🛠️ Configuração
/.env             # Variáveis de ambiente
/.env.example     # Exemplo de variáveis de ambiente
/package.json     # Dependências e scripts
/tsconfig.json    # Configuração do TypeScript
```

## 💻 Desenvolvimento

### 📤 Git e GitHub

**Primeira vez?**
```bash
git remote add origin [URL_DO_SEU_REPOSITÓRIO]
git branch -M main
git push -u origin main
```

**Commits diários**
```bash
git add .
git commit -m "Explique o que você mudou"
git push
```

### 🎯 Checklist para Novos Componentes

1. [ ] Usar imports corretos do Design System
2. [ ] Implementar suporte a tema claro/escuro
3. [ ] Usar tipografia responsiva
4. [ ] Considerar os três breakpoints
5. [ ] Usar espaçamentos do Design System
6. [ ] Usar cores do tema atual
7. [ ] Implementar animações suaves (quando necessário)

## 🤝 Suporte

- 📖 Consulte nossa documentação acima
- 🐛 Encontrou um bug? Abra uma issue no GitHub
- 💡 Tem uma sugestão? Adoramos ouvir ideias novas!

---

Feito com ❤️ pela [Aicrus Tech](https://www.aicrustech.com/)
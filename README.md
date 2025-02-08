# 🎨 Projeto Base com Design System

Bem-vindo ao nosso projeto base! Este é um template moderno e flexível para criar aplicações incríveis que funcionam tanto na web quanto em dispositivos móveis/nativo. 

## ✨ Destaques

- 🌓 Temas Claro e Escuro
- 📱 Design Responsivo
- 🎯 Componentes Reutilizáveis
- 🖌️ Design System Completo
- 🌐 Funciona na Web e Mobile

## 🎯 Design System

Nosso Design System foi criado para tornar o desenvolvimento mais fácil e consistente. Você pode visualizar todos os elementos acessando a tela "Design System" no projeto.

### 📱 Layout Responsivo

O projeto se adapta automaticamente a três tipos de tela:

- 📱 Mobile (0-767px)
- 📟 Tablet (768-1023px)
- 🖥️ Desktop (1024px+)

> 💡 **Dica**: A barra de navegação (tabs) aparece apenas nas versões Mobile e Tablet, mas todo o conteúdo está disponível em todas as versões!

### 🎨 Elementos do Design System

Na tela de Design System você encontra:

- 🎨 Cores do Sistema
- 📝 Tipografia
- 📏 Breakpoints
- ⚡ Feedback Visual
- 📐 Sistema de Espaçamento
- 🔲 Sistema de Elevação (Sombras)
- 🧩 Biblioteca de Componentes
- 🎭 Sistema de Ícones (SF Symbols via Expo)

### 🎯 Barra de Navegação (Tab Bar)

Nossa Tab Bar é adaptativa e oferece uma experiência consistente em todas as plataformas:

#### 🌐 Diferenças Web vs. Nativo:
- **Web**: Ícones ficam acima do texto com efeito de vidro (blur)
- **Nativo**: Ícones ficam ao lado do texto com background semi-transparente

#### 🎨 Personalizando a Tab Bar:

1. **Cores dos Ícones e Textos**:
   - Edite em `constants/DesignSystem.ts`:
   ```typescript
   COLORS: {
     light: {
       primary: '#seu-hex', // Cor do item selecionado
       tabIconDefault: '#seu-hex', // Cor dos ícones não selecionados
     }
   }
   ```

2. **Background**:
   - **Web**: Em `app/(tabs)/_layout.tsx`, ajuste:
     ```typescript
     backgroundColor: currentTheme === 'dark' 
       ? 'rgba(0, 0, 0, 0.25)' // Opacidade do tema escuro
       : 'rgba(255, 255, 255, 0.25)' // Opacidade do tema claro
     ```
   - **iOS**: Em `components/ui/TabBarBackground.ios.tsx`, ajuste a `intensity` do blur
   - **Android**: Em `components/ui/TabBarBackground.tsx`, ajuste a opacidade do rgba

3. **Ícones**:
   - Troque os ícones em `app/(tabs)/_layout.tsx`:
   ```typescript
   tabBarIcon: ({ color }) => <IconSymbol name="seu-icone" size={28} color={color} />
   ```
   - Lista completa de ícones: [SF Symbols via Expo](https://icons.expo.fyi/Index)

4. **Espaçamentos**:
   - Ajuste no StyleSheet em `app/(tabs)/_layout.tsx`:
     ```typescript
     tabBar: { height, paddingBottom },
     webTabBar: { height, paddingTop, paddingBottom },
     tabItem: { paddingTop, gap }
     ```

> 💡 **Dica**: Todas as configurações da Tab Bar estão centralizadas em `app/(tabs)/_layout.tsx` com comentários explicativos!

### 🛠️ Personalizando

Quer mudar as cores, tamanhos ou estilos? É super fácil!

1. Abra a pasta `constants`
2. Encontre o arquivo `DesignSystem.ts`
3. Modifique os valores conforme sua necessidade

> 🎯 Todas as alterações serão refletidas automaticamente em todo o projeto!

## 🚀 Começando

### 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Git](https://git-scm.com) - Para clonar o projeto e controlar as versões
- [Node.js](https://nodejs.org/) - Recomendamos a versão LTS
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) - Para gerenciar os pacotes
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) - Para rodar o projeto

> 💡 **Dica**: Não tem certeza se já tem algo instalado? Abra seu terminal e tente estes comandos:
> - `git --version`
> - `node --version`
> - `npm --version` ou `yarn --version`

### ⚙️ Configuração Inicial

1. **Clone o repositório**
```bash
git clone [url-do-repositório]
cd [nome-do-projeto]
```

2. **Instale as dependências**
```bash
# Com npm
npm install

# Com yarn
yarn install
```

3. **Instale o Expo CLI globalmente** (se ainda não tiver)
```bash
# Com npm
npm install -g expo-cli

# Com yarn
yarn global add expo-cli
```

## 📱 Rodando o Projeto

Escolha como quer rodar o projeto:

### 🌐 Web
```bash
# Com npm
npm run web

# Com yarn
yarn web
```

### 📱 iOS
```bash
# Com npm
npm run ios

# Com yarn
yarn ios
```

### 🤖 Android
```bash
# Com npm
npm run android

# Com yarn
yarn android
```

## 📤 GitHub

### Primeira vez enviando para o GitHub?

1. Crie um novo repositório no GitHub
2. Configure o repositório local e envie seu código:
```bash
git remote add origin [URL_DO_SEU_REPOSITÓRIO]
git branch -M main
git push -u origin main
```

### Enviando atualizações

Depois da configuração inicial, você pode enviar novas alterações com apenas três comandos:

```bash
git add .
git commit -m "Sua mensagem explicando o que mudou"
git push
```

> 💡 **Dica**: Use mensagens claras nos commits para manter um histórico organizado!

---

Feito com ❤️ pela [Aicrus Tech](https://www.aicrustech.com/) para tornar o desenvolvimento mais fácil e divertido!

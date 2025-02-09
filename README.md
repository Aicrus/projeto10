# 🎨 Projeto Base com Design System

## 👋 Olá, Seja Bem-Vindo(a)!

Este é um projeto incrível que funciona tanto no seu celular quanto no computador! 
Ele já vem com tudo preparado para você criar aplicativos modernos e bonitos.

## 🎁 O Que Você Ganha Com Este Projeto?

- 🌓 Modo Claro e Escuro (igual ao Instagram/WhatsApp)
- 📱 Funciona em Qualquer Tela (celular, tablet ou computador)
- 🎯 Componentes Prontos para Usar
- 🖌️ Design Moderno e Consistente
- 🌐 Roda na Web e no Celular

## 🚀 Vamos Começar?

### 📱 O Que Você Precisa Ter no Seu Computador

Não se preocupe! É mais simples do que parece. Você só precisa instalar:

1. [Git](https://git-scm.com) - Para baixar o projeto
2. [Node.js](https://nodejs.org/) - Para rodar o projeto (pegue a versão LTS)
3. [npm](https://www.npmjs.com/) - Vem junto com o Node.js!
4. [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) - Para rodar no celular

> 🤔 **Não Sabe Se Já Tem Algo Instalado?**
> Digite estes comandos no terminal do seu computador:
> - `git --version` (para verificar o Git)
> - `node --version` (para verificar o Node.js)
> - `npm --version` (para verificar o npm)

### 🎮 Primeiros Passos

1. **Baixe o Projeto**
   ```bash
   git clone [url-do-repositório]
   cd [nome-do-projeto]
   ```

2. **Instale o Que Precisa**
   ```bash
   npm install
   ```

3. **Instale o Expo** (só precisa fazer uma vez)
   ```bash
   npm install -g expo-cli
   ```

## 🔐 Configurando o Supabase (Nosso Backend)

### 🎯 Passo a Passo Simples

1. **Crie o Arquivo de Configuração**
   - Crie um arquivo chamado `.env` na pasta principal
   ```bash
   touch .env   # No Mac/Linux
   # OU
   type nul > .env   # No Windows
   ```

2. **Copie as Configurações Base**
   - Copie o conteúdo do arquivo `.env.example` para seu novo `.env`
   ```bash
   cp .env.example .env
   ```

3. **Pegue Suas Credenciais**
   - Entre no [site do Supabase](https://supabase.com)
   - Faça login ou crie uma conta
   - Crie um projeto novo
   - Vá em "Settings" > "API"
   - Copie:
     - `Project URL` → Cole em `EXPO_PUBLIC_SUPABASE_URL`
     - `anon public` → Cole em `EXPO_PUBLIC_SUPABASE_ANON_KEY`

## 🚀 Como Colocar em Produção?

### 💡 É Mais Fácil do Que Parece!

1. **Durante o Desenvolvimento**
   - Use seu arquivo `.env` local
   - Teste tudo normalmente

2. **Na Hora de Publicar na Vercel**
   - Entre no site da Vercel
   - Vá em seu projeto
   - Clique em "Settings" > "Environment Variables"
   - Cole suas variáveis lá
   - Pronto! 🎉

> 🔒 **Fique Tranquilo**: Suas credenciais ficam seguras e criptografadas!

## 📱 Como Rodar o Projeto?

Escolha como quer ver o projeto:

### 💻 No Computador
```bash
npm run web
```

### 📱 No iPhone
```bash
npm run ios
```

### 🤖 No Android
```bash
npm run android
```

## 🎨 Personalizando o Visual

Quer mudar as cores ou o estilo? Super fácil:

1. Abra a pasta `constants`
2. Encontre o arquivo `DesignSystem.ts`
3. Mude os valores que quiser!

> 💡 **Dica**: Todas as mudanças aparecem automaticamente no projeto!

## 🤝 Precisa de Ajuda?

- 📖 Consulte nossa documentação detalhada nas seções abaixo
- 🐛 Encontrou um bug? Abra uma issue no GitHub
- 💡 Tem uma sugestão? Adoramos ouvir ideias novas!

---

Feito com ❤️ pela [Aicrus Tech](https://www.aicrustech.com/)

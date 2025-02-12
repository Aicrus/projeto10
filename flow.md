# 🔄 Fluxo do Projeto Base

## 0. Estrutura de Arquivos
```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'fontFamily': 'arial' }}}%%
graph TD
    A[projeto-base] --> B[app]
    A --> C[components]
    A --> D[contexts]
    A --> E[lib]
    A --> F[constants]
    A --> G[assets]
    A --> H[hooks]
    A --> I[types]
    
    B --> B1[_layout.tsx]
    B --> B2[index.tsx]
    B --> B3[(auth)]
    B --> B4[(tabs)]
    
    B3 --> AUTH1[login.tsx]
    B3 --> AUTH2[register.tsx]
    
    B4 --> TAB1[dash.tsx]
    B4 --> TAB2[config.tsx]
    
    style A fill:#2D3748,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style B fill:#2C5282,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style C fill:#285E61,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style D fill:#285E61,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style E fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style F fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style G fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style H fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style I fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
```

### Descrição dos Diretórios
| Diretório    | Função |
|--------------|--------|
| 📱 `app/`      | Rotas e páginas usando Expo Router |
| 🧩 `components/`| Componentes React reutilizáveis |
| 🔄 `contexts/` | Contextos globais (Auth, Theme) |
| 📚 `lib/`      | Configurações (Supabase, etc) |
| 🎨 `constants/`| Design System e constantes |
| 🖼️ `assets/`   | Imagens, fontes e recursos |
| 🎣 `hooks/`    | Hooks personalizados |
| 📝 `types/`    | Tipagens TypeScript |

### Arquivos Principais
| Arquivo | Função |
|---------|--------|
| `app/_layout.tsx` | Layout principal e providers |
| `app/index.tsx` | Redirecionamento inicial |
| `app/(auth)/login.tsx` | Tela de login |
| `app/(auth)/register.tsx` | Tela de cadastro |
| `app/(tabs)/dash.tsx` | Dashboard principal |
| `app/(tabs)/config.tsx` | Configurações do app |

## 1. Estrutura de Navegação
```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'fontFamily': 'arial' }}}%%
graph TD
    A[Ponto de Entrada] --> B{Layout Principal}
    B --> C[Layout Auth]
    B --> D[Layout Tabs]
    
    C --> E[Login]
    C --> F[Registro]
    
    D --> G[Dashboard]
    D --> H[Configurações]
    
    style A fill:#2D3748,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style B fill:#2C5282,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style C fill:#285E61,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style D fill:#285E61,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style E fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style F fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style G fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style H fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
```

## 2. Fluxo de Autenticação
```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'fontFamily': 'arial' }}}%%
graph LR
    A[Início] --> B{Sessão Válida?}
    B -->|Não| C[Tela de Login]
    B -->|Sim| D[Dashboard]
    
    C --> E[Form Login]
    C --> F[Form Registro]
    
    E --> G{Validar}
    F --> G
    
    G -->|Sucesso| H[Criar Sessão]
    G -->|Falha| C
    
    H --> D
    
    style A fill:#2D3748,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style B fill:#2C5282,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style C fill:#285E61,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style D fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style E fill:#2D3748,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style F fill:#2D3748,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style G fill:#2C5282,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style H fill:#285E61,stroke:#90CDF4,stroke-width:2px,color:#FFF
```

## 3. Arquitetura de Dados
```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'fontFamily': 'arial' }}}%%
graph TD
    A[Frontend] --> B[Cliente Supabase]
    
    subgraph Backend Supabase
        C[(Banco Auth)]
        D[(Banco Principal)]
        E[(Armazenamento)]
    end
    
    B --> C
    B --> D
    B --> E
    
    F[Context API] --> B
    
    G[Componentes] --> F
    G --> B
    
    style A fill:#2D3748,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style B fill:#2C5282,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style C fill:#285E61,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style D fill:#285E61,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style E fill:#285E61,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style F fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style G fill:#2D3748,stroke:#90CDF4,stroke-width:2px,color:#FFF
```

## 4. Sistema de Design
```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'fontFamily': 'arial' }}}%%
graph TD
    A[Sistema de Design] --> B{Tema}
    B -->|Claro| C[Tema Claro]
    B -->|Escuro| D[Tema Escuro]
    
    A --> E[Componentes]
    E --> F[Botões]
    E --> G[Campos]
    E --> H[Cartões]
    E --> I[Navegação]
    
    style A fill:#2D3748,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style B fill:#2C5282,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style C fill:#285E61,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style D fill:#285E61,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style E fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style F fill:#2D3748,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style G fill:#2D3748,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style H fill:#2D3748,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style I fill:#2D3748,stroke:#90CDF4,stroke-width:2px,color:#FFF
```

## 5. Ciclo de Vida da Aplicação
```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'fontFamily': 'arial' }}}%%
sequenceDiagram
    participant U as Usuário
    participant A as Aplicação
    participant T as Tema
    participant S as Supabase
    
    U->>A: Abre App
    A->>T: Carrega Tema
    A->>S: Verifica Sessão
    
    alt Sem Sessão
        S-->>A: Não Autorizado
        A->>U: Mostra Login
    else Com Sessão
        S-->>A: Autorizado
        A->>U: Mostra Dashboard
    end
    
    U->>A: Interage
    A->>S: Sync em Tempo Real
    S-->>A: Atualizações
    A->>U: Atualiza Interface
```

## 6. Modelo de Dados
```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'fontFamily': 'arial' }}}%%
erDiagram
    USUARIO ||--o{ SESSAO : possui
    USUARIO {
        uuid id PK
        string email
        string senha_criptografada
        timestamp criado_em
        timestamp atualizado_em
    }
    
    USUARIO ||--o{ PERFIL : possui
    PERFIL {
        uuid id PK
        uuid usuario_id FK
        string url_avatar
        string nome
        string bio
    }
    
    USUARIO ||--o{ CONFIGURACAO : possui
    CONFIGURACAO {
        uuid id PK
        uuid usuario_id FK
        string tema
        boolean notificacoes
        json preferencias
    }
```

## 7. Fluxo de Deploy
```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'fontFamily': 'arial' }}}%%
graph LR
    A[Código Fonte] --> B{Plataforma Build}
    
    B -->|Web| C[Build Vercel]
    B -->|Mobile| D[Build EAS]
    
    C --> E[Deploy Vercel]
    D --> F[App Store]
    D --> G[Play Store]
    
    E --> H{Produção}
    F --> H
    G --> H
    
    style A fill:#2D3748,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style B fill:#2C5282,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style C fill:#285E61,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style D fill:#285E61,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style E fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style F fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style G fill:#2A4365,stroke:#90CDF4,stroke-width:2px,color:#FFF
    style H fill:#2C5282,stroke:#90CDF4,stroke-width:2px,color:#FFF
```

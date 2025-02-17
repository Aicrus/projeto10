# Diretrizes de Interação com Github

**OBSERVAÇÃO:** Commits só devem ser enviados quando solicitados por um dos comandos de envio e não automaticamente.

## Repositório do projeto

https://github.com/nomeperfil/nomerepositorio

## DIRETRIZES FUNDAMENTAIS:

- Sempre trabalhar diretamente na branch `main` por padrão
- Criar branches específicas SOMENTE quando explicitamente solicitado
- Analisar automaticamente o histórico Git para determinar tipo de commit
- Verificar automaticamente todas as mudanças antes de gerar mensagens de commit

## Comandos para Envio:

Para enviar alterações, basta dizer:

- "Enviar alterações"
- "Enviar mudanças"
- "Enviar código"
- "Commit"
- "Push"

## Tipos de commits:

1. Primeiro commit do projeto:
    - Usar mensagem: "feat: initial commit - project setup"
2. Commits subsequentes:
    - Seguir o padrão: "tipo: descrição breve"
    - Tipos comuns:
        - feat (nova funcionalidade)
        - fix (correção)
        - docs (documentação)
        - style (formatação)
        - refactor (refatoração)
        - test (testes)
        - chore (tarefas)

## Processo de Envio de Alterações:

1. Verificar configuração Git e autenticação:
    
    ```bash
    # Verificar configuração Git
    git config --get user.name
    git config --get user.email
    
    # Se não estiver configurado, configurar:
    # git config --global user.name "Seu Nome"
    # git config --global user.email "seu@email.com"
    
    ```
    
2. Verificar login Github:
    
    ```bash
    gh auth status
    # Se não estiver logado:
    # gh auth login
    
    ```
    
3. Verificar e atualizar URL do repositório remoto:
    
    ```bash
    REMOTE_URL=$(git remote get-url origin 2>/dev/null)
    REPO_URL="<https://github.com/nomeperfil/nomerepositorio>"
    if [ "$REMOTE_URL" != "$REPO_URL" ]; then
        git remote remove origin 2>/dev/null
        git remote add origin "$REPO_URL"
        echo "Remote atualizado para: $REPO_URL"
    fi
    
    ```
    
4. Verificar status das alterações:
    
    ```bash
    git status
    
    ```
    
5. Se houver alterações:
    
    ```bash
    # Adicionar alterações
    git add .
    
    # Criar commit com mensagem descritiva
    git commit -m "tipo: descrição das alterações"
    
    # Enviar para o repositório remoto
    git push origin main
    
    ```
    

## Regras para Mensagens de Commit:

- Antes de criar um commit, verificar arquivos alterados com `git status`
- Criar mensagem descritiva e breve
- Para alterações menores, usar um único commit
- Para alterações maiores, separar em commits lógicos

## Casos Especiais:

Se for explicitamente solicitado trabalhar em outra branch:

1. Criar nova branch: `git checkout -b nome-da-branch`
2. Fazer alterações necessárias
3. Seguir processo normal de commit
4. Criar PR para main quando solicitado

## Criação de PR (SOMENTE quando solicitado):

`gh pr create --title "Título aqui..." --body "Descrição das alterações"`

- Mensagem do PR deve ser única, sem quebras de linha
- Descrever todas as alterações de forma clara e concisa

Esta versão enfatiza que:
1. Por padrão, todas as alterações devem ser feitas diretamente na branch `main`
2. Só devemos criar branches específicas quando explicitamente solicitado
3. O processo é simplificado para focar no fluxo direto com a main
4. PRs só devem ser criados em casos especiais quando explicitamente solicitado
5. Os comandos são mais diretos e focados no trabalho com a main
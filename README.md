# 📂 Git – Repositório Local (Guia Prático)

Este repositório apresenta um **guia completo e prático sobre Git Local**, criado como material de apoio para estudo e para um vídeo educacional voltado a iniciantes em tecnologia.

O foco principal deste projeto é ensinar **como funciona o Git no ambiente local**, explicando desde a criação do repositório até o fluxo básico de versionamento utilizado no dia a dia profissional.

---

## 🎯 Objetivo

- Explicar o que é Git e como funciona localmente  
- Criar e gerenciar um repositório Git local  
- Demonstrar o fluxo básico de versionamento  
- Ensinar os principais comandos do Git  
- Mostrar como o Git Local é a base para GitHub, CI/CD e DevOps  
- Servir como material de estudo para iniciantes  

---

## 🧠 O que é Git?

Git é um **sistema de controle de versão distribuído**, utilizado para registrar, controlar e acompanhar alterações em arquivos ao longo do tempo.

Com o Git, você pode:

- Controlar versões de arquivos  
- Voltar para versões anteriores do projeto  
- Manter histórico completo de alterações  
- Trabalhar com segurança no código  
- Criar diferentes linhas de desenvolvimento (branches)  

📌 O Git funciona **100% local**, sem necessidade de internet.

---

## 📁 O que é um Repositório Local?

Um repositório local é uma **pasta do seu computador monitorada pelo Git**.

Dentro dele, o Git controla:

- Arquivos do projeto  
- Alterações realizadas  
- Commits (versões salvas)  
- Histórico completo  
- Branches  

É a base de qualquer projeto profissional com Git.

---

## ⚙️ Criando um Repositório Git Local

### Entrar na pasta do projeto

```bash
cd nome-da-pasta
```

### Iniciar o Git

```bash
git init
```

Esse comando cria a pasta oculta `.git`, responsável por todo o controle de versão.

---

## 🔍 Ver o Status do Repositório

```bash
git status
```

Mostra:

- Arquivos novos  
- Arquivos modificados  
- Arquivos prontos para commit  

---

## 📦 Adicionar Arquivos ao Stage

Adicionar arquivo específico:

```bash
git add nome-do-arquivo
```

Adicionar todos os arquivos:

```bash
git add .
```

O **Stage** é a área de preparação antes do commit.

---

## 🧾 Configurar Nome e E-mail no Git

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

Essas informações identificam quem fez o commit.

---

## 💾 Criar um Commit

```bash
git commit -m "descrição do que foi feito"
```

O commit salva uma versão do projeto no histórico.

---

## 📜 Ver Histórico de Commits

```bash
git log
```

Mostra todas as versões salvas do projeto.

---

## ⏪ Voltar para Versão Anterior

```bash
git checkout <id-do-commit>
```

Permite voltar para qualquer versão do projeto.

---

## 🌿 Trabalhando com Branches

Criar branch:

```bash
git branch nova-branch
```

Trocar de branch:

```bash
git checkout nova-branch
```

Mesclar branch:

```bash
git merge nome-da-branch
```

---

## 🧩 Como o Git Local é usado no mundo real

Todo fluxo profissional começa com **Git Local**:

```text
Git Local → GitHub → CI/CD → Deploy → Produção
```

Este repositório demonstra a base de:

- Versionamento profissional  
- Controle de mudanças  
- Histórico de código  
- Base para DevOps e Cloud  

---

## 🚀 Evolução Natural após Git Local

Depois de dominar Git local, você pode:

- Conectar ao GitHub  
- Trabalhar com repositório remoto  
- Criar pipelines CI/CD  
- Automatizar deploy  
- Publicar projetos na nuvem (AWS, Azure, etc)  

Mas tudo começa com **Git Local**.

---

## 📚 Público-Alvo

- Iniciantes em TI  
- Estudantes de programação  
- Quem quer aprender Git do zero  
- Quem deseja entrar em DevOps / Cloud  

---

## 👨‍💻 Autor

**Luiz Augusto**  
🔗 GitHub: https://github.com/luizinhesta  

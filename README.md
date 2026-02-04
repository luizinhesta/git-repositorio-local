# 📂 Git – Repositório Local (Guia Prático)

Este repositório apresenta um **guia prático de Git Local**, criado como material de apoio para um vídeo educacional voltado a iniciantes em tecnologia.

O foco deste conteúdo é ensinar **como criar e utilizar um repositório Git local**, explicando os principais conceitos e comandos básicos.

---

## 🎯 Objetivo

- Explicar o que é Git  
- Mostrar como criar um repositório local  
- Apresentar o fluxo básico de versionamento  
- Demonstrar os principais comandos do Git  
- Servir como material de estudo para iniciantes  

---

## 🧠 O que é Git?

Git é um **sistema de controle de versão**, utilizado para registrar e acompanhar alterações em arquivos ao longo do tempo.

Com o Git, é possível:
- Controlar versões de arquivos  
- Voltar para estados anteriores do projeto  
- Manter histórico de mudanças  
- Trabalhar com mais segurança no código  

📌 O Git pode ser usado **localmente**, sem necessidade de internet.

---

## 📁 O que é um Repositório Local?

Um repositório local é uma **pasta no computador** que passa a ser monitorada pelo Git.

Nela, o Git controla:
- Arquivos  
- Alterações  
- Commits  
- Histórico do projeto  

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

Esse comando cria a pasta oculta `.git`, responsável pelo controle de versão.

---

## 🔍 Ver o Status do Repositório

```bash
git status
```

Exibe:
- Arquivos não rastreados  
- Arquivos modificados  
- Arquivos prontos para commit  

---

## 📦 Adicionar Arquivos ao Stage

```bash
git add nome-do-arquivo
git add .
```

---

## 🧾 Configurar Nome e E-mail no Git

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

---

## 💾 Criar um Commit

```bash
git commit -m "descrição do que foi feito"
```

---

## 📜 Ver Histórico de Commits

```bash
git log
```

---

## ⏪ Voltar para uma Versão Anterior

```bash
git checkout <6 primeiros caracteres do commit>
```

---

## 🌿 Trabalhando com Branches

```bash
git merge nome-da-branch
```

---

## 🚀 Próximos Passos

Após aprender Git local:
- Criar um repositório no GitHub  
- Conectar o repositório local ao remoto  
- Enviar commits para a nuvem  

---

## 👨‍💻 Autor

**Luiz Augusto**  
GitHub: https://github.com/luizinhesta

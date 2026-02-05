# 📂 Git -- Repositório Local (Guia Prático)

Este repositório apresenta um **guia completo e prático sobre Git
Local**, criado como material de apoio para estudo e para um vídeo
educacional voltado a iniciantes em tecnologia.

O foco principal deste projeto é ensinar **como funciona o Git no
ambiente local**, explicando desde a criação do repositório até o fluxo
básico de versionamento utilizado no dia a dia profissional.

------------------------------------------------------------------------

## 🎯 Objetivo

-   Explicar o que é Git e como funciona localmente\
-   Criar e gerenciar um repositório Git local\
-   Demonstrar o fluxo básico de versionamento\
-   Ensinar os principais comandos do Git\
-   Mostrar como o Git Local é a base para GitHub, CI/CD e DevOps\
-   Servir como material de estudo para iniciantes

------------------------------------------------------------------------

## 🧠 O que é Git?

Git é um **sistema de controle de versão distribuído**, utilizado para
registrar, controlar e acompanhar alterações em arquivos ao longo do
tempo.

Com o Git, você pode:

-   Controlar versões de arquivos\
-   Voltar para versões anteriores do projeto\
-   Manter histórico completo de alterações\
-   Trabalhar com segurança no código\
-   Criar diferentes linhas de desenvolvimento (branches)

📌 O Git funciona **100% local**, sem necessidade de internet.

------------------------------------------------------------------------

## 📁 O que é um Repositório Local?

Um repositório local é uma **pasta do seu computador monitorada pelo
Git**.

Dentro dele, o Git controla:

-   Arquivos do projeto\
-   Alterações realizadas\
-   Commits (versões salvas)\
-   Histórico completo\
-   Branches

É a base de qualquer projeto profissional com Git.

------------------------------------------------------------------------

## ⚙️ Criando um Repositório Git Local

### Entrar na pasta do projeto

``` bash
cd nome-da-pasta
```

### Iniciar o Git

``` bash
git init
```

Esse comando cria a pasta oculta `.git`, responsável por todo o controle
de versão.

------------------------------------------------------------------------

## 🔍 Ver o Status do Repositório

``` bash
git status
```

------------------------------------------------------------------------

## 📦 Adicionar Arquivos ao Stage

``` bash
git add .
```

------------------------------------------------------------------------

## 💾 Criar um Commit

``` bash
git commit -m "descrição do que foi feito"
```


------------------------------------------------------------------------

## 💾 Envia os commits para o repositório remoto

``` bash
git push origin main
```

------------------------------------------------------------------------

## 🌿 Trabalhando com Branches

``` bash
git branch nova-branch
git checkout nova-branch
git merge nome-da-branch
```

------------------------------------------------------------------------

## 🧩 Fluxo Profissional (Visão Geral)

Embora o foco principal seja **Git Local**, este projeto também
demonstra, de forma resumida, como o versionamento evolui para um fluxo
moderno de **DevOps e Cloud**:

``` text
Git Local → GitHub → CodePipeline → Amazon S3 → CloudFront → ACM (Certificado SSL) → Route 53 → Site em Produção
```

### 🔧 O que está sendo implementado

-   Versionamento com **Git Local (base do projeto)**\
-   Integração com **GitHub**\
-   Pipeline automatizado (**AWS CodePipeline**)\
-   Deploy automático para **Amazon S3 (Static Website)**\
-   Distribuição global via **CloudFront (CDN)**\
-   Certificado SSL com **AWS Certificate Manager (ACM)**\
-   DNS gerenciado pelo **Amazon Route 53**

📌 Este fluxo representa um **deploy automatizado de site estático em
produção**, porém o foco educacional principal continua sendo **Git e
versionamento local**.

------------------------------------------------------------------------



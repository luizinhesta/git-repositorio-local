# 🎬 Roteiro de Vídeo – Git do Zero (Repositório Local)

## 📌 Tema do Vídeo
Git do Zero: Como Criar um Repositório Local e Usar os Principais Comandos

⏱️ Duração estimada: 10 a 15 minutos  
🎯 Público-alvo: Iniciantes em Git e Tecnologia  
🎥 Formato: Gravação de tela + terminal + voz  

---

## 1️⃣ Abertura (0:00 – 0:40)

Fala pessoal, tudo bem? 👋  
Seja bem-vindo ao canal!

No vídeo de hoje eu vou te ensinar **Git do zero**, focando apenas no **Git local**.  
Você vai aprender o que é Git, para que ele serve e como criar um repositório local passo a passo.

Esse vídeo é ideal para quem está começando agora na área de tecnologia 🚀

---

## 2️⃣ O que é Git? (0:40 – 1:40)

Git é um **sistema de controle de versão**.  
Ele serve para controlar as mudanças dos arquivos ao longo do tempo.

Com o Git você consegue:
- Controlar versões
- Voltar versões antigas
- Acompanhar a evolução do projeto

Tudo isso pode ser feito **localmente**, sem internet.

---

## 3️⃣ O que é um Repositório Local? (1:40 – 2:30)

Um repositório local é uma **pasta no seu computador** que o Git passa a monitorar.

Dentro dela, o Git controla:
- Arquivos
- Alterações
- Commits
- Histórico

Agora vamos criar isso na prática.

---

## 4️⃣ Criando o Repositório Git Local (2:30 – 4:00)

Entrar na pasta do projeto:

```bash
cd nome-da-pasta
```

Iniciar o Git:

```bash
git init
```

Esse comando cria a pasta `.git`, onde fica todo o controle de versão.

---

## 5️⃣ Verificando o Status do Git (4:00 – 5:00)

```bash
git status
```

Esse comando mostra:
- Arquivos não rastreados
- Arquivos modificados
- Arquivos prontos para commit

---

## 6️⃣ Adicionando Arquivos ao Stage (5:00 – 6:30)

Adicionar um arquivo específico:

```bash
git add nome-do-arquivo
```

Adicionar todos os arquivos:

```bash
git add .
```

O Stage é a área de preparação antes do commit.

---

## 7️⃣ Configurando Nome e E-mail (6:30 – 7:30)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

Essa configuração normalmente é feita apenas uma vez.

---

## 8️⃣ Criando um Commit (7:30 – 8:40)

```bash
git commit -m "Primeiro commit do projeto"
```

O commit registra uma versão do projeto naquele momento.

---

## 9️⃣ Histórico e Voltar Versões (8:40 – 10:30)

```bash
git log
```

Para voltar para uma versão anterior:

```bash
git checkout <6 primeiros caracteres do commit>
```

Ideal para testes e estudos.

---

## 🔟 Branches e Merge (10:30 – 11:30)

Branches são linhas do tempo paralelas.

Para mesclar uma branch:

```bash
git merge nome-da-branch
```

---

## 🔚 Encerramento (11:30 – 12:30)

Nesse vídeo você aprendeu o básico de **Git local**.

No próximo vídeo vamos ver:
- GitHub
- Repositório remoto
- Enviar commits para a nuvem ☁️

Se gostou do conteúdo:
- Deixe o like 👍
- Se inscreva no canal 🔔
- Comente suas dúvidas

Até o próximo vídeo! 🚀

---

## 👨‍💻 Autor

Luiz Augusto  
GitHub: https://github.com/luizinhesta

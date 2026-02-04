## Comandos Git

---

### Iniciar Git na pasta.
 - git init

### Ver como esta Status do Git
- git status

### Adicinar Arquivos no Stage
- git add "nome do arquivos"
- git add . 

### Adicinar nome e e-mail descirção no commit
- git config --global user.name Nome-Usuário
- git config --global user.email e-mail@email.com.br

### Adicinar informação com commit
- git commit -m "colocar aqui descrição do commit"

### Ver descrição dos commits
- git log

### Voltar para passado 
- git checkout "6 primeiros digitos"
 
### Mesclar linhas do tempo branch
- git merge "nome do branch"

Obs: Criar um repositorio no github, para colocar os documentos

### Logar no Github
- git remote add origin https://github.com/luizinhesta/guia-do-programador.git
- git branch -M main
- git push -u origin main

### clonar github para outra pasta ou lugar
Obs: criar outra pasta local

- git clone https://github.com/luizinhesta/guia-do-programador.git
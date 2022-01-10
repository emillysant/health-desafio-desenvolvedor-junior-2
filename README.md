 ![SoftMakers](https://www.softmakers.com.br/assets/img/logotipo14xxhdpi.png)

# Desafio - Desenvolvedor Fullstack Júnior 2 - Health
Seja bem-vindo! Este desafio foi projetado para avaliar a sua capacidade técnica como candidato à vaga de Desenvolvedor Fullstack Júnior 2 na Health Team.

## Instruções
- Faça um fork deste repositório;
- O conjunto mínimo de tecnologias a serem utilizadas são: HTML, CSS, JavaScript e React.js no front-end e Node.js no back-end;
- Crie um passo a passo de como rodar a sua aplicação;
- Após finalizar, submeta um pull request com um comentário informando o seu e-mail de contato e aguarde nossa avaliação.

## Proposta
Você deverá desenvolver um projeto no padrão MVC utilizando Node.js para o back-end e React.js para o front-end com a finalidade de que seja possível listar, visualizar, criar, editar, excluir animais de estimação de uma petshop.
> **Observações:**
> - Você deve utilizar o banco de dados relacional PostgreSQL para esse projeto;
> - Cada animal de estimação precisa ter um identificador único, nome, idade, se é gato ou cachorro e sua respectiva raça; Além do nome e telefone para contato de seu dono.

## Diferenciais
Será considerado como diferenciais a utilização ou o conhecimento nas seguintes tecnologias:
- Express JS
- Sequelize
- Redis
- Firebase Realtime Database
- Firebase Firestore
- Serviços de arquitetura em nuvem do Google Cloud Platform

### DEPLOY (SURGE)

http://successful-alarm.surge.sh/

### DOCUMENTAÇÃO DA API 

https://documenter.getpostman.com/view/13917264/UVXgKwmi

#### Frontend

Foi criado em React.js usando o booststrap e styled-icons para estilização.
O react-router para criar rotas para as paginas de criação, lista de animais e edição de animais. 
Fiz o deploy com o surge (link disponível acima)

Para iniciar a aplicação apenas click em start no NPM SCRIPT ou digite 'npm run start' no terminal

#### Backend

Criado em Node, typescript, express, cors e uuid para gerar os id dos animais. 
A comunicação com banco mySQL foi feita usando o knex. 
Criei um migration para logar os animais salvos na pasta data.
Segui uma arquitetura de sotware em Camadas que divide a aplicação em 3 principais parte (Controller, Business e Data)

Para inicializar apenas click em start no NPM SCRIPTS ou digite no terminal'tsc && node ./build/index'.
Porém também fiz o deploy da aplicação no site do heroku.


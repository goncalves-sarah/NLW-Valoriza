<h1 align="center">
    NLW Valoriza
</h1>
<h2 align="center">
    Node.js | TypeScript | SQlite
</h2>

<p align="center">
  <a href="#book-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed_book-regras-de-negócio">Regras de Negócio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#boom-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :book: Sobre

O **NLW Valoriza** é uma aplicação feita para proporcionar que indivíduos enviem elogios uns aos outros! Um usuário da plataforma poderá escolher entre vários tipos de elogios, adicionar uma mensagem e enviar a qualquer outro usuário da plataforma. Ao enviar um elogio, um email será enviado ao usuário receptor, o informando sobre o novo elogio.

Essa aplicação foi realizada durante o NLW Together da Rockeseat!

## :closed_book: Regras de Negócio

- Para utilizar a plataforma o usuário deverá possuir uma conta e estar devidamente autenticado. 
- O usuário não pode enviar um elogio para ele/a mesmo
- Um novo tipo de elogio só poderá ser cadastrado por um usuário administrador

## :computer: Tecnologias

-  [Typescript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/en/)
-  [Express](https://expressjs.com/)
-  [TypeORM](https://typeorm.io/)
-  [SQlite](https://www.sqlite.org/)
-  [NodeMailer](https://nodemailer.com/)

## :boom: Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/goncalves-sarah/NLW-Valoriza.git
```

2. Executando a Aplicação:

```sh
  # API
  $ cd backend
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  
  # Inicie a API
  $ yarn start # ou npm start
```

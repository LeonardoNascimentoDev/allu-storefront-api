
# Nome do Projeto
<h1 align="center">AlluStorefrontAPI</h1>

## Descrição do Projeto
<p align="center">Allu Storefront API</p>


## Framework

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Instalação

```bash

# clone repositório 
$ git clone git@github.com:LeonardoNascimentoDev/allu-storefront.git

# acessar a pasta do projeto
$ cd allu-storefront

# instalar dependências do projeto
$ npm install


```

## Executando a aplicação com Docker

```bash
# development

# configurando para usar o docker
$ crie o arquivo .env na raiz do projeto e insira as variáveis
NODE_ENV=local
DB_HOST=db
DB_USER=root
DB_PASSWORD=root
DB_NAME=products_db

# construir e iniciar os contêineres
$ docker-compose up --build
```

##  Executando a aplicação com NPM

```bash
# desenvolvimento
$ npm run start

# watch mode
$ npm run start:dev
```

##  Rodando testes unitários com Jest.js

```bash
# desenvolvimento
$ npm run test

```

## Tecnologias
  - Typescript
  - Nest.js
  - MySQL
  - Swagger
  - Jest.js
  - Docker

## Documentação com Swagger

 - Swagger: http://localhost:4000/api/ 
 
## Stay in touch

- Author - Leonardo Nascimento

## License

  Nest is [MIT licensed](LICENSE).

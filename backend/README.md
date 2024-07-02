
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

# OBS: é necessário tem o docker instalado na máquina

# configurando para usar o docker
$ crie o arquivo .env na raiz do projeto e insira as variáveis
NODE_ENV=local
DB_HOST=db
DB_USER=root
DB_PASSWORD=root
DB_NAME=products_db
LOGGLY_TOKEN=3e9bd9c4-b041-4419-b62e-075747adbf98
LOGGLY_SUBDOMAIN=https://testeallu.loggly.com/

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
##  Monitorando Logs

```bash
# Conta teste Loggly (monitorar logs)
$ Link para painel: https://testeallu.loggly.com/search#terms=&from=2024-07-02T17:04:50.352Z&until=2024-07-02T18:04:50.352Z&source_group=
$ Login: testealug@gmail.com
$ Senha: @Testeallugator2024

```

## Tecnologias
  - Typescript
  - Nest.js
  - MySQL
  - Swagger
  - Jest.js
  - Docker
  - Winston
    
## Documentação com Swagger

 - Swagger: http://localhost:4000/api/ 
 
## Stay in touch

- Author - Leonardo Nascimento

## License

  Nest is [MIT licensed](LICENSE).

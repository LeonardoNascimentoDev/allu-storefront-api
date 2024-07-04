# Allu Frontstore

Projeto de frente de loja da Allu.

## Instalação

```bash

# clone repositório 
$ git clone git@github.com:LeonardoNascimentoDev/allu-storefront.git

# acessar a pasta do projeto
$ cd allu-storefront

```

## Executando a aplicação com Docker

```bash
# development

# OBS: É necessário ter o docker instalado na máquina

# construir e iniciar os contêineres (também cria todas as tabelas e faz os inserts necessários)
$ docker-compose up --build

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

##  Monitorando Logs

```bash
# Conta teste Loggly (monitorar logs)
$ Link para painel: https://testeallu.loggly.com/search#terms=&from=2024-07-02T17:04:50.352Z&until=2024-07-02T18:04:50.352Z&source_group=
$ Login: testealug@gmail.com
$ Senha: @Testeallugator2024

```

## Documentação com Swagger

 - Swagger: http://localhost:4000/api/ 

### 🚀 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:
 - Node.js
 - NestJS
 - React.js
 - Next.js
 - PostgreSQL
 - Swagger
 - Docker 
 - Jest.js
 - Winton Logger

 ### 📕 Boas práticas e Arquitetura
 - Clean Code
 - Hexagonal Architecture
 - Microservice
 - Unit testing
 - Monitoring and Logs


### 🎨 Frontend
Para ver informações sobre o frontend ver README da pasta 📁frontend

### 🚧 Backend
Para ver a documentação e outras informações sobre o backend ver README da pasta 📁backend

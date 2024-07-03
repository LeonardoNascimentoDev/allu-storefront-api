# Allu Frontstore

Projeto de frente de loja da Allu.

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

## Documentação com Swagger

 - Swagger: http://localhost:4000/api/ 

### 🚀 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:
 - Node.js
 - NestJS
 - React.js
 - Next.js
 - MySQL
 - Swagger
 - Docker (Implementando)
 - Jest.js (Implementando)
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

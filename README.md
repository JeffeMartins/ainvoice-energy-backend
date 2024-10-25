# API de Faturas de Energia

Esta API foi desenvolvida para gerenciar faturas de energia elétrica, incluindo funcionalidades de upload de PDFs, consulta de dados específicos e visualização de PDFs armazenados. O projeto foi construído utilizando **Clean Architecture**, **TypeScript**, **Express**, **PostgreSQL** (via Prisma ORM) e **Docker Compose**.

## Índice

- [Configuração e Execução Local](#configuração-e-execução-local)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Arquitetura](#arquitetura)
- [Endpoints da API](#endpoints-da-api)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Acessando o pgAdmin](#acessando-o-pgadmin)

## Configuração e Execução Local

### Passo a Passo para Iniciar o Projeto

1. Clone o repositório:
   ```bash
   git clone <repo_url>
   cd <repo_name>

Verifique se o Docker e o Docker Compose estão instalados e em execução.
Suba o ambiente Docker com:
docker-compose up --build



## Nota: As migrações do Prisma são aplicadas automaticamente ao iniciar o container, criando as tabelas necessárias no banco de dados.

### Estrutura do Projeto

Express para a criação de rotas da API
TypeScript para tipagem estática e maior segurança do código
Prisma ORM para interações com o banco de dados PostgreSQL
PostgreSQL como banco de dados relacional
Docker Compose para orquestração dos containers

### Arquitetura

O projeto segue os princípios da Clean Architecture para garantir modularidade e separação de responsabilidades, facilitando a manutenção e escalabilidade. As camadas são divididas da seguinte forma:

Controllers: Responsáveis por lidar com as requisições HTTP, delegando a lógica de negócio para os casos de uso.
Use Cases: Implementam a lógica de negócios e atuam como intermediários entre os controladores e os repositórios.
Repositories: Realizam a interação com o banco de dados (via Prisma ORM) e fornecem uma interface para os casos de uso.
Entities: Modelam os objetos principais do domínio e garantem a integridade dos dados.
Essa arquitetura permite uma fácil substituição ou adaptação de cada camada sem afetar diretamente outras partes do sistema.


### Endpoints da API

## Rota de Saúde
GET /health
Retorna o status da API.

## Rotas de Faturas

GET /invoices

Retorna todas as faturas no banco de dados.
POST /upload

Faz o upload de uma fatura em PDF.
Header:
Content-Type: multipart/form-data
Body:
file: Arquivo PDF da fatura.
GET /view-pdf/:filename

Visualiza um PDF específico pelo nome do arquivo.
Parâmetros:
filename: Nome do arquivo PDF.
GET /getVariablesOfInterest

Retorna variáveis de interesse de cada fatura.
GET /allNumberClient

Retorna todos os números de clientes cadastrados.

### Variáveis de Ambiente

As variáveis são configuradas no docker-compose.yml, mas podem ser ajustadas em um arquivo .env para testes locais.

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/energy_db
NODE_ENV=development
URL_BASE=http://localhost:3000
JWT_SECRET=my_super_secret_key
JWT_EXPIRES_IN=1h
BCRYPT_SALT_ROUNDS=10

### Acessando o pgAdmin

Acesse http://localhost:8080.
Credenciais:
Email: admin@admin.com
Senha: admin
Para conectar ao PostgreSQL:
Host: db
Username: postgres
Senha: postgres



# Atividade API CRUD

Nesta atividade, desenvolvemos uma API CRUD (Create, Read, Update, Delete) utilizando Node.js e Express, juntamente com o banco de dados MySQL. O objetivo foi criar endpoints que permitissem realizar operações básicas de manipulação de dados em uma tabela chamada "informacoes".

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- **Config/connection.js**: Arquivo responsável por estabelecer a conexão com o banco de dados MySQL.
- **Controller/controller_info.js**: Contém as funções de controle que são chamadas pelos endpoints para realizar operações no banco de dados.
- **Imagem/**: Diretório que armazena as imagens do cliente REST, utilizadas para realizar requisições HTTP.
- **node_modules/**: Diretório que contém os módulos do Node.js instalados para o projeto.
- **Routes/routes_info.js**: Define os endpoints da API e associa cada um deles às funções correspondentes no controlador.
- **demo.http**: Arquivo de exemplo do cliente REST, com requisições HTTP para testar os endpoints da API.
- **server.js**: Arquivo principal que inicializa o servidor Express e configura o roteamento.

## O que aprendemos

- Configuração de um servidor Node.js utilizando o framework Express.
- Estabelecimento de conexão com um banco de dados MySQL em uma aplicação Node.js.
- Implementação de endpoints RESTful para realizar operações CRUD (Create, Read, Update, Delete) em uma tabela do banco de dados.
- Utilização de um cliente REST para testar as requisições HTTP aos endpoints da API.
- Manipulação de requisições e respostas HTTP para realizar operações de CRUD no banco de dados.

## Demonstração das Requisições HTTP

Para demonstrar o funcionamento da API CRUD, utilizamos um cliente REST, como exemplificado na imagem abaixo:

![Cliente REST](Imagem/rest_client.png)

O cliente REST permite realizar requisições HTTP para os endpoints da API, como:

- **GET**: Obter todos os registros da tabela "informacoes".
- **POST**: Inserir um novo registro na tabela.
- **PUT**: Atualizar um registro existente na tabela.
- **DELETE**: Excluir um registro da tabela.

### GET
![GET](Imagem/get.png)

### POST
![POST](Imagem/insert.png)

### PUT
![PUT](Imagem/update.png)

### DELETE
![DELETE](Imagem/delete.png)

Cada requisição é acompanhada de um corpo em formato JSON, contendo os dados a serem manipulados no banco de dados.

## Código Fonte

Segue abaixo uma breve descrição dos principais arquivos do projeto:

### `server.js`

Responsável por iniciar o servidor Express, configurar o middleware para tratamento de requisições JSON e URL-encoded, e associar as rotas definidas em `routes_info.js`.

### `routes_info.js`

Define os endpoints da API e associa cada um deles às funções correspondentes no controlador `controller_info.js`.

### `controller_info.js`

Contém as funções de controle que realizam operações no banco de dados, como consultar, inserir, atualizar e excluir registros da tabela "informacoes".

### `connection.js`

Estabelece a conexão com o banco de dados MySQL utilizando o módulo `mysql2/promise`. Essa conexão é reutilizada em toda a aplicação para executar consultas SQL.

## Conclusão

Com esta atividade, adquirimos conhecimento prático na criação de uma API CRUD utilizando Node.js, Express e MySQL. Aprendemos a configurar um servidor, estabelecer conexão com o banco de dados, definir endpoints RESTful e realizar operações de CRUD em um banco de dados relacional. Essas habilidades são fundamentais para o desenvolvimento de aplicações web escaláveis e robustas.
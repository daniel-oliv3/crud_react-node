##
### C R U D
##

### Pré-Requisitos.

React.js, Node.js, JavaScript, MySQL.

CRUD Full Stack de um cadastro de usuários, onde o backend será em node, frontend em React.JS e o MySQL como banco.

**Node.js**
- Site: https://nodejs.org/en/

**React.js**
- Site: https://pt-br.reactjs.org/

**MySQL**
- Site: https://www.mysql.com/

**Wamp-Server**
- Site: https://www.wampserver.com/en/


### Ferramentas do programador.

**Visual Studio Code**
- Site: https://code.visualstudio.com/download

**MySQL Workbench 8.0.31**
- Site: https://dev.mysql.com/downloads/workbench/


### Criação do projeto
- Base de dados

**Banco de Dados**
- Criação da base de dados `crud_fullstack`
- Tabela `usuarios`

```sql
/*Tabela Usuarios*/
CREATE TABLE `crud_fullstack`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(245) NOT NULL,
  `email` VARCHAR(245) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  PRIMARY KEY (`id`));
```
- Configuração da instância SQL
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
```

##
### Back-End
##

- Criar a pasta `backend`
- Acessar a pasta `backend`
- criar o arquivo `package.json`

```
npm init -y
```

**Bibliotecas**
- Express, Nodemon, MySQL, Cors.
```
yarn add express nodemon mysql cors
```
- Alterar trecho de código no arquivo `package.json`
```json
  "scripts": {
    "start": "nodemon index.js"
  },
```
- Incluir trecho de código no arquivo `package.json`
```json
  {
    "type": "module",
  }
```

**Conexão com o Banco de Dados**
- Criação do arquivo de conexão com o banco de dados
- Arquivo `db.js`
```js
//Conexão com o banco de dados
import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_fullstack"
});
```

**Configuração das Rotas**
- Apenas uma rota neste exemplo
- Criar a pasta na raiz com o nome `routes`
- Criar o arquivo `users.js` na pasta `routes`
- Criar a pasta na raiz com o nome `controllers`
- Criar o arquivo `user.js` na pasta `controllers`


**Rodar o projeto**
- Comando para rodar o projeto `backend` no terminal
```
yarn start
```
- Localhost: http://localhost:8800/






















##

- By:  **Daniel Oliveira**

  - `Instagram` - https://www.instagram.com/danieloliv3/
  - `Facebook` - https://web.facebook.com/danielsapup3/
  - `Twitter` - https://twitter.com/danielsapup3/
  - `Linkedin` - https://www.linkedin.com/in/danielsapup3/

##
















//Conexão com o banco de dados
import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_fullstack"
});
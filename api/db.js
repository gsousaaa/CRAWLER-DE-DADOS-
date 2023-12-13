const mysql = require("mysql")

 const db = mysql.createConnection({
    host: "localhost",
    user: "glaucosousa",
    password:"projetocrud123",
    database: "crud"
})

module.exports = db



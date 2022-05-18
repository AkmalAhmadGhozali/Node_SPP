'use strict'

const mysql = require('mysql');

//koneksi
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "app_spp",
})

module.exports = db;
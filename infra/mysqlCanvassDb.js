const process  = require('process');
const mysql = require('mysql2');

const connectionPool = mysql.createPool({
    connectionLimit: 1,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "canvass",
});

module.exports = connectionPool;

'use strict'; 
 
const mysql = require('mysql2'); 
 
const Pool = mysql.createConnection({ 
  host: "localhost", 
  user: "root", 
  password: "OlympusHad3s", 
  database: "opinio" 
}); 

module.exports = { Pool };
//***************** Constanten and Vairiables *****************
//Express server
const express = require("express");
const server = express();
const port = 2000;

const cors = require('cors');

// File handler
const fs = require('fs');

// Add colors
const colors = require('colors');

// MariaDB
const mysql = require('mysql');
const DBConfig = {
    host: 'localhost',
    user: 'pato',
    password: 'duck',
    database: 'product'
  }
  
// ----------------- File Handling -----------------
const logData = data => {
    
  fs.writeFile(
    './log/log.txt', 
    data,
    { flag: 'a+' }, 
    err => {if(err) console.log('Log failed: ', err);});
}
    
    
// ----------------- Server hochfahren -----------------
// server.use(express.static('public', { extensions: ['html'] }));
    
    
// ----------------- Middleware -----------------
server.use(express.json());
server.use(cors());
    
    
//***************** Routing *****************
    
// Show all products
server.get(
  '/allProducts',
  (req,res) =>
  // Log request
  {logData(`Request received: ${JSON.stringify(req.url)}\n`);
      
  // Prepare SQL statement
  const sqlStatement = 
  "SELECT productID, productItem, productDescription FROM products";
      
  // Fetch from DB
  inquireDatabase(sqlStatement)
  .then(rows => res.send(JSON.stringify(rows)));

});
    
//***************** Functions *****************
    
const inquireDatabase = (sqlStatement) => {
  
  return new Promise(function(resolve, reject) {
  
      
    // Establishing DBConnection
    const DBConnection = mysql.createConnection(DBConfig);

    // Inquire DB 
    DBConnection.query(sqlStatement, (err, rows, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);  
    }) // END Inquire DB
  }) // END Promise

} // END inquireDatabase


// Starting server
server.listen(
    port, 
    err => console.log(err || `Server Running On Port ${port}`.green)
);

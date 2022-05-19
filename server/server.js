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

}); // END Get All Products

// Show Details product
server.get(
  '/detail/:ID',
  (req,res) => {

  // Reading ID from the URL
  const ID = req.params.ID;
  
  // Log request
  logData(`Request received: ${JSON.stringify(req.url)}\n`);
      
  // Prepare SQL statement
  const sqlStatement = 
  `SELECT productItem, productDescription, productDetails FROM products WHERE productID = ${ID}  `;
      
  // Fetch from DB
  inquireDatabase(sqlStatement)
  .then(rows => res.send(JSON.stringify(rows)));

}); // END Get Details product  

// Edit product
server.put(
  '/edit/:ID',
  (req,res) => {

  // Reading ID from the URL
  const ID = req.params.ID;

  console.log('ID: ', ID);
  // Take body out of POST request
  const product = req.body;
  
  // Log request
  logData(`Request received: ${JSON.stringify(req.url)}\n`);
      
  // Prepare SQL statement
  let sqlStatement = `UPDATE products `; 
  sqlStatement += `SET productItem = '${product.item}', `;
  sqlStatement += `productDescription = '${product.description}', `;
  sqlStatement += `productDetails = '${product.details}' `;
  sqlStatement += `WHERE productID = ${ID}  `;
      
  console.log('sql', sqlStatement );

  // Fetch from DB
  inquireDatabase(sqlStatement)
  .then(rows => res.send(JSON.stringify(rows)));
  // .then(rows => console.log('DB res', rows));

}); // END Get Details product  

// Add new product
server.post(
  '/add',
  (req,res) => {

  // Take body out of POST request
  const product = req.body;
   
  // Log request
  logData(`Request received: ${JSON.stringify(req.url)}\n`);
      
  // // Prepare SQL statement
  let sqlStatement = 
  `INSERT INTO products (productItem, productDescription, productDetails) `;
  sqlStatement += `VALUES ('${product.item}', '${product.description}',`;
  sqlStatement += `'${product.details}')`;

  console.log('sql', sqlStatement );
  
  // Fetch from DB
  inquireDatabase(sqlStatement)
  .then(rows => res.send(JSON.stringify(rows)));
  // .then(rows => console.log('DB res', rows));


}); // END Post new product

// Delete product
server.get(
  '/delete/:ID',
  (req,res) => {

  // Reading ID from the URL
  const ID = req.params.ID;
   
  // Log request
  logData(`Request received: ${JSON.stringify(req.url)}\n`);
      
  // // Prepare SQL statement
  let sqlStatement = `DELETE FROM products `;
  sqlStatement += `WHERE productID = '${ID}'`;

  console.log('sql', sqlStatement );
  
  // Fetch from DB
  inquireDatabase(sqlStatement)
  .then(rows => res.send(JSON.stringify(rows)));
  // .then(rows => console.log('DB res', rows));


}); // END GET Delete product

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

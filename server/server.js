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
const DBConnection = mysql.createConnection({
    host: 'localhost',
    user: 'pato',
    password: 'duck',
    database: 'product'
  })

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
    {
      logData(`Request received: ${JSON.stringify(req.url)}\n`);
      console.log('erver req.url: ', req.url);
    return res.send("allProducts req received");
    });
    
//***************** Funvtions *****************

const inquireDatabase = () => {

// Establishing DBConnection
DBConnection.connect(err => {
    if (err) console.log('DBConnection failed', err);
    else console.log('DBConnection successfull');
});

DBConnection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

DBConnection.end()  // Close DBConnection
} // END inquireDatabase


// Starting server
server.listen(
    port, 
    err => console.log(err || `Server Running On Port ${port}`.green)
);

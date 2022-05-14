//***************** Constanten and Vairiables *****************
//Express server
const express = require("express");
const server = express();
const port = 2000;

// Add colors
const colors = require('colors');


// Starting server
server.listen(
    port, 
    err => console.log(err || `Server Running On Port ${port}`.green)
);

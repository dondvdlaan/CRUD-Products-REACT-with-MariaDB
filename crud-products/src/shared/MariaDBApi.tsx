import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

function MariaDBApi(method:string, path: string ) {

    console.log('method: ', method);
    console.log('path: ', path);
    
  useEffect(() => {

    axios({
      method,
      url: `http://localhost:2000/${path}`})
  .then(function (response) {
    // handle success
    console.log('response: ', response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
},[]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing MariaDBApi</h1>        

      </header>
    </div>
  );
}

export default MariaDBApi;

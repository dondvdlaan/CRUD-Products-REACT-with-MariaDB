import React from 'react';
import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

function App() {

  useEffect(() => {

    axios({
      method: "get",
      url: 'http://localhost:2000/allProducts'})
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
        <h1>Testing Comm</h1>        

      </header>
    </div>
  );
}

export default App;

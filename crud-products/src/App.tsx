import React from 'react';
import { useEffect, useState } from "react";
import './App.css';
import MariaDBApi from './shared/MariaDBApi';

function App() {

console.log('Now calling MariaDBApi');
  
MariaDBApi('get','allProducts');
  


  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing Comm with MariaDB</h1>        

      </header>
    </div>
  );
}

export default App;

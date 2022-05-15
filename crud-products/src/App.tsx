import React from 'react';
import { useEffect, useState } from "react";
import './App.css';
import MariaDBApi from './shared/MariaDBApi';
import pic from './logo/logo.png';

function App() {

//Now calling MariaDBApi
const rows = MariaDBApi('get','allProducts');

console.log(rows[0]);

// Wait till rows are there
if (!rows) {
  return <p>Lade</p>;
}
  


return (
<>
<section className='p-3'>


<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="https://www.manyroads.dev/">
    <img src={pic} width="100" height="40" alt="" />
  </a>
</nav>
<br />
    <table className="table table-hover table-sm ">
    <caption>List of Products</caption>
    <thead >
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Item</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    {rows.map(row =>(
    <tr key={row.productID}>
      <th className="table-primary" scope="row">{row.productID}</th>
      <td>{row.productItem}</td>
      <td>{row.productDescription}</td>
    </tr>
    ))}
    
  </tbody>
</table>
</section>
</>
    
  );  // END Return
}

export default App;

import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

function mariaDBApi(method:string, path: string ) {
  // UseState declaration
  const [rows, setRows] = useState([]);

  useEffect(() => {

    axios({
      method,
      url: `http://localhost:2000/${path}`})
    .then(response => setRows(response.data) )
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  },[path]);

  return rows;
}

export default mariaDBApi;

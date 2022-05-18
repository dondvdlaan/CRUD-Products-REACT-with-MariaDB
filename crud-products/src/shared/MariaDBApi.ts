import React from 'react';
import { useEffect, useState } from "react";
import axios, { AxiosResponse, Method } from "axios";
import { Product } from '../types/Product';

// Constants
const BASE_URL = 'http://localhost:2000/';


export function useMariaDBApi(method:Method, path: string ): Product[] {
  
  // Constants
  const [rows, setRows] = useState([]);

  useEffect(() => {

    mariaDBApi(method, path, setRows); 

  },[path]);

  return rows;
}

export const mariaDBApi = (method: Method, path:string, callback:(data: any) => void) => {

  // Constants
  const config = {
    method,
    url: `${BASE_URL}${path}`};

  axios(config)
  .then((response: AxiosResponse<any>) => callback(response.data) )
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}


'use strict';
//import axios, { AxiosResponse } from "./axios";

    axios({
        method: "get",
        url: 'https://localhost/allProducts',})
    .then(response => {
      // handle success
      console.log('response: ',response);
    })
    .catch(error => {
      // handle error
      console.log('error: ' ,error);
    })
    

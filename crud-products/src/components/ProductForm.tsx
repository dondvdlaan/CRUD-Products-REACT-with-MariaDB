import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/Product";
import {Method } from "axios";
import { mariaDBApi } from "../shared/MariaDBApi";

interface Props extends Required<Product>{
  isEdit: Boolean;
}

export const ProductForm = (props: Props) => {

//****************** Constants ******************
// Hooks
  const navigate = useNavigate();
  const [ID, setID] = useState(props.productID);
  const [item, setItem] = useState(props.productItem);
  const [description, setDescription] = useState(props.productDescription);
  const [details, setDetails] = useState(props.productDetails);
 
console.log('ID: ', ID);
console.log('Item: ', item);
console.log('Desc: ', description);
console.log('details: ', details);




//****************** Functions ******************

const product = () => ({
  ID,
  item,
  description,
  details
}); 

//****************** Eventhandlers ******************
const onGoToDashboard = () =>{
  navigate('/');
}
const onFormFinished = (e: React.FormEvent) =>{
  e.preventDefault();
  const [method, path]: [Method, string] = props.isEdit
  ? ["put", `edit/${ID}`]
  : ["post", "add"];

  console.log('method: ', method, 'path: ', path);
  
  mariaDBApi(method, path, () => navigate(`/`), product());
}
return (
  <>

<form onSubmit={onFormFinished}>
  <div className="form-group row">
    <label  className="col-sm-3 col-form-label">Product Item: </label>
    <div className="col-sm-8">
      <input 
      type="text" 
      className="form-control" 
      placeholder="Product Item"
      required
      value={item}
      onChange = {(e) => {setItem(e.target.value)}}
      />
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-3 col-form-label">Product Description:</label>
    <div className="col-sm-8">
      <input 
      type="text" 
      className="form-control" 
      placeholder="Product Description"
      required
      value={description}
      onChange = {(e) => {setDescription(e.target.value)}}
      />
    </div>

  </div>
  <div className="form-group row">
    <label className="col-sm-3 col-form-label">Detailed Description:</label>
    <div className="col-sm-8">
      <input
      type="text" 
      className="form-control" 
      placeholder="Detailed Description"
      required
      value={details}
      onChange = {(e) => {setDetails(e.target.value)}}
       />
    </div>
  </div>
  <br />
   <div className="form-group row">
     <div className="col-sm-3">

     </div>
    <div className="col-sm-2">
      <button type="submit" className="btn btn-primary">Finished</button>
    </div>
    <div className="col-sm-2">
      <button onClick={onGoToDashboard} className="btn btn-warning">Cancel</button>
    </div>
  </div>
</form>
</>
);
}
import { useNavigate } from "react-router-dom";
import {useMariaDBApi} from "../shared/MariaDBApi";
import { Product } from "../types/Product";
import { LoadingSpinner } from "./shared/LoadingSpinner";


const ProductTable = () => {

//****************** Constants ******************
// Hooks
const navigate = useNavigate();
const rows = useMariaDBApi('get','allProducts');  //Now calling MariaDBApi

const VIEW_SYMBOL = "D";
const EDIT_SYMBOL = "E";

//****************** Event handlers ******************
const onProductDetail = (row: Product) => {
  navigate(`/detail/${row.productID}`)}

const onProductEdit = (row: Product) => {
  navigate(`/edit/${row.productID}`)}
    
const onProductAdd = () => {
  navigate(`/add`)}

// Wait till rows are there
if (!rows) {
  return <LoadingSpinner />;
}
const row = rows[0];
console.log('row: ', row);

return (
<>
<table className="table table-hover table-sm ">
    <caption>List of Products</caption>
    <thead >
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Item</th>
      <th scope="col">Description</th>
      <th scope="col">Details</th>
      <th scope="col">Edit</th>

    </tr>
  </thead>
  <tbody>
    {rows.map(row => 
    <tr key={row.productID}>
      <th className="table-primary" scope="row">{row.productID}</th>
      <td>{row.productItem}</td>
      <td>{row.productDescription}</td>
      <td 
      onClick={() => onProductDetail(row)}
      className="table-secondary">{VIEW_SYMBOL}</td>
      <td 
      onClick={() => onProductEdit(row)}
      className="table-success">{EDIT_SYMBOL}</td>
    </tr>
    )} 
  </tbody>
</table>
<button onClick={onProductAdd} type="button" className="btn btn-primary">Add Product</button>
</>
    ); // END return
}

export default ProductTable;
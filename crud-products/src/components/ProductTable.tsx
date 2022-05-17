import { useNavigate } from "react-router-dom";
import useMariaDBApi from "../shared/useMariaDBApi";


const ProductTable = () => {

//****************** Constants ******************
// Hooks
const navigate = useNavigate();
const rows = useMariaDBApi('get','allProducts');  //Now calling MariaDBApi

const VIEW_SYMBOL = "D";

//****************** Event handlers ******************
const onProductDetail = (row) => {
  navigate(`/detail/${row.productID}`)
}

// Wait till rows are there
if (!rows) {
  return <p>Lade</p>;
}
const row = rows[0];
console.log('row: ', row);

return (
<table className="table table-hover table-sm ">
    <caption>List of Products</caption>
    <thead >
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Item</th>
      <th scope="col">Description</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    {rows.map(row => 
    <tr key={row.productID}>
      <th className="table-primary" scope="row">{row.productID}</th>
      <td>{row.productItem}</td>
      <td>{row.productDescription}</td>
      <td 
      id={row.productID}
      onClick={() => onProductDetail(row)}
      className="table-secondary">{VIEW_SYMBOL}</td>
    </tr>
    )} 
  </tbody>
</table>
    ); // END return
}

export default ProductTable;
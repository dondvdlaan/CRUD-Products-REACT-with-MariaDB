import useMariaDBApi from "../shared/useMariaDBApi";


const productTable = () => {

//Now calling MariaDBApi
const rows = useMariaDBApi('get','allProducts');

// Wait till rows are there
if (!rows) {
  return <p>Lade</p>;
}
return (
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
    {rows.map(row => 
    <tr key={row.productID}>
      <th className="table-primary" scope="row">{row.productID}</th>
      <td>{row.productItem}</td>
      <td>{row.productDescription}</td>
    </tr>
    )} 
  </tbody>
</table>
    ); // END return
}

export default productTable;
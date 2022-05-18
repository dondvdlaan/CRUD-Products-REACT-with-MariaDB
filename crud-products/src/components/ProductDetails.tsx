import { useParams } from "react-router-dom";
import {useMariaDBApi} from "../shared/MariaDBApi";

interface Props {
  ID: string | undefined;
}

const ProductDetails = (props: Props) => {

// Constants
const products = useMariaDBApi('get',`detail/${props.ID}`);  //Now calling MariaDBApi

// Wait till products are there
if (!products) {
  return <p>Lade</p>;
}

console.log('products', products[0]);

return (
<div className="container text-dark">
  {products.map((product, index) =>
  <h2 key={index}>Product: {product.productItem} </h2>
  )}
  <div className="row">
    <div className="col-sm-5" >
      Detailed Description:
    </div>
  {products.map((product, index) =>
    <div key={index} className="col-sm-6" >
      {product.productDetails}
    </div>
  )}
    
  </div>
</div>
);
}

export default ProductDetails;
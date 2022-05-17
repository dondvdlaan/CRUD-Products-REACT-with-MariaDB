import { useParams } from "react-router-dom";



const ProductDetails = (props) => {

// Constants

console.log('PDetails', props.ID);


return (
<div className="container">
  <h1>Grid</h1>
  <p>This example demonstrates a 50%/50% split on small, medium and large devices. On extra small devices, it will stack (100% width).</p>      
  <p>Resize the browser window to see the effect.</p>      
  <div className="row">
    <div className="col-sm-6" >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
    <div className="col-sm-6" >
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.    
    </div>
  </div>
</div>
);
}

export default ProductDetails;
import NavBar from "./NavBar";
import { Link, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";



const ProductDetailView = () =>{
// Constants
const { productID } = useParams<{ productID: string }>();

console.log('ID: ', productID);

const VIEW = "Product Detail";

    return (
        <section className='p-3'>
          <NavBar view={VIEW}/>
          <Link to={'/dash'} style={{ textDecoration: 'none' }}>
          <ProductDetails ID={productID} />
          </Link>
        </section>
            
          );  // END Return
}

export default ProductDetailView;
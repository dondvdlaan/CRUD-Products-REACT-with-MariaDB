import NavBar from "./NavBar";
import { Link, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";



const ProductDetailView = () =>{
// Constants
const { ID } = useParams<{ ID: string }>();

const VIEW = "Product Detail";

    return (
        <section className='p-3'>
          <NavBar view={VIEW}/>
          <Link to={'/dash'} style={{ textDecoration: 'none' }}>
          <ProductDetails ID={ID} />
          </Link>
        </section>
            
          );  // END Return
}

export default ProductDetailView;
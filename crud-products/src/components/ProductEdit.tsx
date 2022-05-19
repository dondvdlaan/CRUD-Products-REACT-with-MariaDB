import { useParams } from "react-router-dom";
import { useMariaDBApi } from "../shared/MariaDBApi";
import NavBar from "./NavBar"
import { ProductForm } from "./ProductForm"
import { LoadingSpinner } from "./shared/LoadingSpinner";

export const ProductEdit = () =>{

    // Constants
const { ID } = useParams<{ ID: string }>();
const product = useMariaDBApi('GET',`detail/${ID}`)[0];

const VIEW = "Edit Product";

// Wait till products are there
if (!product) {
    return <LoadingSpinner />;
  }

return (
<section className='p-3'>
    <NavBar view={VIEW} />
    <ProductForm 
    productID={ID}
    productItem={product.productItem}
    productDescription={product.productDescription}
    productDetails={product.productDetails}
    isEdit={true}
    />
</section>
)
}
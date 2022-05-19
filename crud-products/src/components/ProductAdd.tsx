import NavBar from "./NavBar"
import { ProductForm } from "./ProductForm"



export const ProductAdd = () =>{

// Constants
const VIEW = "Add Product";

return (
<section className='p-3'>
    <NavBar view={VIEW} />
    <ProductForm 
    productID=""
    productItem=""
    productDescription=""
    productDetails=""
    isEdit={false}
    />
</section>
)
}
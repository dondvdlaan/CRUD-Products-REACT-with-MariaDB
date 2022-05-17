import NavBar from "./NavBar";
import ProductTable from "./ProductTable";


function dashboard() {
// Constants
const VIEW = "Dashboard";

    return (
    <section className='p-3'>
      <NavBar view={VIEW}/>
      <ProductTable />
    </section>
        
      );  // END Return
    }
    
export default dashboard;
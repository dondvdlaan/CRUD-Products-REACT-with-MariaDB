
import pic from '../logo/logo.png';


const navBar = () =>{

return(
<>
    <nav className="navbar navbar-light bg-light">
        <h2 className="text-center">CRUD PRODUCTS WITH MARIA DB</h2>
        <a className="navbar-brand" href="https://www.manyroads.dev/">
        <img src={pic} width="100" height="40" alt="" />
        </a>
    </nav>
    <br />
</>
)
}
export default navBar;
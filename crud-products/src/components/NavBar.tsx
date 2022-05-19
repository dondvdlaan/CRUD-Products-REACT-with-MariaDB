
import pic from '../logo/logo.png';

interface Props{
    view: string;
}

const navBar = (props: Props) =>{

return(
<>
    <nav className="navbar navbar-light bg-light">
        <h2 className="text-center">CRUD PRODUCTS WITH MARIA DB</h2>
        <h3 className="text-center">{props.view}</h3>
        <a className="navbar-brand" href="https://www.manyroads.dev/">
        <img src={pic} width="100" height="35" alt="" />
        </a>
    </nav>
    <br />
</>
)
}
export default navBar;
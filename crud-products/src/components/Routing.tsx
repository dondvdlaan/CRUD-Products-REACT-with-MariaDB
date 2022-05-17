import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ProductDetail from "./ProductDetail";


const Routing = () => {

    return (

    <Routes>
      <Route path="/detail" element={<ProductDetail/>} />
      <Route path="/dash" element={<Dashboard/>} />
    </Routes>
    )
    

}

export default Routing;
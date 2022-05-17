import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ProductDetailView from "./ProductDetailView";


const Routing = () => {

    return (

    <Routes>
      <Route path="/detail/:ID" element={<ProductDetailView/>} />
      <Route path="/dash" element={<Dashboard/>} />
      <Route path="/" element={<Navigate to="/dash" />} />

    </Routes>
    )
    

}

export default Routing;
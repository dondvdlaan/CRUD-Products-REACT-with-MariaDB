import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import { ProductAdd } from "./ProductAdd";
import ProductDetailView from "./ProductDetailView";
import { ProductEdit } from "./ProductEdit";


const Routing = () => {

    return (

    <Routes>
      <Route path="/detail/:ID" element={<ProductDetailView />} />
      <Route path="/dash" element={<Dashboard />} />
      <Route path="/add" element={<ProductAdd />} />
      <Route path="/edit/:ID" element={<ProductEdit />} />

      <Route path="/" element={<Navigate to="/dash" />} />

    </Routes>
    )
    

}

export default Routing;
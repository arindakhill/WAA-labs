import { Route, Routes, Navigate } from "react-router";
import NewProduct from "../../components/NewProduct/NewProduct";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Products from "../Products/Products";


export default function PageRoutes(props) {
    return (
        <Routes>
                <Route path="/" element={<Navigate replace to="/products" />} />
                <Route path="products" element={<Products />}>
                    <Route path=":id" element={<ProductDetails />} />
                </Route>
            <Route path="create-product" element={<NewProduct />} />
        </Routes>
    );
}


{/* <Routes>
<Route path="products" element={<Products />}>
    <Route path=":id" element={<ProductDetails />} />
</Route>

<Route path="create-product" element={<NewProductHook />} />
</Routes> */}



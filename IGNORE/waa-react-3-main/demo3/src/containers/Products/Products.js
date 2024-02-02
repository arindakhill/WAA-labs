import Product from "../../components/Product/Product"
import { useEffect, useState } from 'react'
import axios from 'axios';
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { Link } from "react-router-dom";

const Products = (props) => {

    const [productsState, setProductsState] = useState(
        [
            { id: 1, name: "iPhone 13", price: 3000 },
            { id: 2, name: "iPhone 12", price: 3000 },
            { id: 3, name: "galaxy s20", price: 3000 }
        ]
    );

    const fetchProducts = () => {
        axios.get('http://localhost:8080/api/v1/products')
            .then(response => {
                setProductsState(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        fetchProducts()
    },
        [])


    const products = productsState.map(product => {
        return (
            <Link to={`${product.id}`} key={product.id} >
                <Product
                    name={product.name}
                    price={product.price}
                    id={product.id}
                    key={product.id}
                />
            </Link>
        )
    });
    return <div className="Product">
        {products}
        <ProductDetails />
    </div>;

}

export default Products;
import axios from 'axios'
import { useState, useEffect, useContext } from "react";
import SingleProduct from './SingleProduct'
import { Cart } from '../Context'
const Home = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        async function getAllProducts() {
            //fetch data from mockapi
            const products = await axios.get(
                "https://61c412cff1af4a0017d9927b.mockapi.io/products"
            );
            setProducts(products.data);
        }
        //calling the function
        getAllProducts()
    }, [])



    return (

        <div className="productContainer">
            {products.map((items) => {
                return <SingleProduct items={items} key={items.id} />
            })}

        </div >

    )
}
export default Home;

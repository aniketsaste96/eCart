import React, { useEffect, useState, useContext } from 'react';
import SingleProduct from './SingleProduct'
import { Cart } from '../Context'
import './style.css'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
const CartPage = () => {
    const { cart } = useContext(Cart)

    const [total, setTotal] = useState();
    useEffect(() => {
        //reduce method for counting total price of product added in cart
        //added cart as dependancy so useeffect render after any change in cart
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [cart])


    return (
        <>
            <h3 style={{ fontSize: 30 }}>  My Cart</h3>
            <h3 style={{ fontSize: 30 }}>Total: <span className="dollar">$</span>   <i>  {total}</i> </h3>
            <div className="productContainer">
                {cart.map(items => {
                    return <SingleProduct items={items} key={items.id} />

                })}
            </div>

        </>

    )
};

export default CartPage;

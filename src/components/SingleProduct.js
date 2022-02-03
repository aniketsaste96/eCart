import React from 'react';
import { useContext } from 'react'
import { Cart } from '../Context'
import './style.css'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Card from '@mui/material/Card';
const SingleProduct = ({ items }) => {
    const { cart, setCart } = useContext(Cart)
    return (
        <Card className="products">
            <img src={items.image} alt="" />
            <h3 style={{ color: "green" }}> <span className="dollar">$ </span>  <span className="price">{items.price}</span> </h3>

            <div className="productdesc">
                <h3 style={{ fontWeight: 700 }}>{items.title}</h3>
                <div class="vl"></div>

                <span> {items.description}</span>

            </div>

            {cart.includes(items) ? (<Button className="add" variant="contained" onClick={() => {
                setCart(cart.filter(c => c.id !== items.id))
            }} ><RemoveShoppingCartIcon /></Button>) : (<Button variant="contained" className="add" onClick={() => {
                setCart([...cart, items])
            }}><AddShoppingCartIcon /></Button>)}

        </Card>
    )
}
export default SingleProduct;

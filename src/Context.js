import React, { createContext, useState } from 'react';
export const Cart = createContext()
const Context = ({ children }) => {
    const [cart, setCart] = useState([]);
    //this will make cart and setCart accessible for anywhere in our application
    //wrapping of app inside Context in index.js
    //to avoid props drilling
    return (
        <Cart.Provider value={{ cart, setCart }}>
            {children}
        </Cart.Provider>

    );
}
export default Context;

import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (cartItem) => {
        setCart([...cart, {cartItem}]);
    }

    // console.log(cart);
    
    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
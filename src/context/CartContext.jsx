import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (cartItem) => {
        setCart([...cart, {cartItem}]);
    }

    const removeFromCart = (removeItem) => {
        const newItems = [];

        cart.map((item) => {
            if(item.cartItem.productId !== removeItem.productId) {
                newItems.push(item);
            }
        });

        setCart(newItems);
    }
    
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);
import { useContext } from "react";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CartContext from "../../context/CartContext";

import styles from './Cart.module.css'

const Cart = () => {
    const {cart, addToCart} = useContext(CartContext);

    console.log(cart);

    return(
        <>
            <div className={styles.cartContainer}>
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </>
    )
}

export default Cart;
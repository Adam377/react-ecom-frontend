import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CartContext from "../../context/CartContext";

import styles from './Cart.module.css'

const Cart = () => {
    const {cart, addToCart} = useContext(CartContext);

    return(
        <>
            <NavLink to="/cart-detail">
                <div className={styles.cartContainer}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
            </NavLink>
        </>
    )
}

export default Cart;
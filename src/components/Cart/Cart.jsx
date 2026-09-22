import { NavLink } from "react-router-dom";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useCartContext } from "../../context/CartContext";

import styles from './Cart.module.css'

const Cart = () => {
    const {cart, addToCart} = useCartContext();

    const cartQuantity = cart.length;

    return(
        <>
            <NavLink to="/cart-detail">
                <div className={styles.cartContainer}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                {cartQuantity}
            </NavLink>
        </>
    )
}

export default Cart;
import { useContext, useEffect, useState } from 'react';
import { useProductContext } from '../../context/ProductContext';
import CartContext from '../../context/CartContext';

import styles from './Button.module.css';

const Button = (props) => {
    const {getProductById} = useProductContext();
    const [productInCart, setProductInCart] = useState({});
    const {cart, addToCart} = useContext(CartContext);

    const handleItemToCartClick = () => {
        // console.log(productInCart);
        addToCart(productInCart);
    };

    useEffect(() => {
        setProductInCart(getProductById(props.productId))
    }, []);

    return (
        <>
            <button className={styles.addToCartButton} onClick={handleItemToCartClick}>
                {props.text}
            </button>
        </>
    );
}

export default Button;
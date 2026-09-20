import { useContext, useEffect, useState } from 'react';
import { useProductContext } from '../../context/ProductContext';
import CartContext from '../../context/CartContext';

import styles from './AddToCartButton.module.css';

const AddToCartButton = (props) => {
    const {getProductById} = useProductContext();
    const [productInCart, setProductInCart] = useState({});
    const {cart, addToCart} = useContext(CartContext);

    const handleItemToCartClick = () => {
        addToCart(productInCart);
    };

    useEffect(() => {
        setProductInCart(getProductById(props.productId))
    }, []);

    return (
        <>
            <button className={styles.addToCartButton} onClick={handleItemToCartClick}>
                Add to cart
            </button>
        </>
    );
}

export default AddToCartButton;
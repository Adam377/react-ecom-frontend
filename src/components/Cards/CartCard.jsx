import { useEffect, useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { useProductContext } from '../../context/ProductContext';

import styles from './CartCard.module.css';

const CartCard = (props) => {
    const {getProductById} = useProductContext();
    const {cart, addToCart, removeFromCart} = useCartContext();

    const [productToRemove, setProductToRemove] = useState({});

    const handleRemoveCartItem = () => {
        removeFromCart(productToRemove);
    }

    useEffect(() => {
        setProductToRemove(getProductById(props.id))
    }, []);

    return (
        <>
            <div className={styles.cartCardContainer}>
                <img className={styles.cartCardImage} src={props.image} />
                <div className={styles.cartCardTitle}>{props.title}</div>
                <div className={styles.cartCardPrice}>
                    <span>
                        £
                    </span>
                    {props.price}
                </div>
                <button className={styles.removeFromCartButton} onClick={handleRemoveCartItem}>
                    X
                </button>
            </div>
        </>
    );
}

export default CartCard;
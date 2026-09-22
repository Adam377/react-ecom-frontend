import { useCartContext } from "../../context/CartContext";
import CartCard from "../../components/Cards/CartCard";

import styles from './CartDetail.module.css';
import SimpleLinkButton from "../../components/Button/SimpleLinkButton";
import { NavLink } from "react-router-dom";

const CartDetail = () => {
    const {cart, addToCart} = useCartContext();

    if(cart.length === 0) {
        return(
            <>
                <div className={styles.emptyCartContainer}>
                    Your cart is empty!
                    <NavLink to='/products'>
                        <SimpleLinkButton>Start shopping</SimpleLinkButton>
                    </NavLink>
                </div>
            </>
        )
    }

    let cartTotal = 0;

    cart.forEach(item => {
        cartTotal += parseFloat(item.cartItem.productPrice);
    });

    const cartList = cart.map(item => 
        <CartCard
            key={item.cartItem.productId}
            id={item.cartItem.productId}
            image={item.cartItem.productImage.url}
            title={item.cartItem.productTitle}
            price={item.cartItem.productPrice}
        />
    );

    return(
        <>
            <div className={styles.pageTitle}>
                Your basket
            </div>
            <div className={styles.cartDetailContainer}>
                <div className={styles.cartListContainer}>
                    {cartList}
                </div>
                <div className={styles.checkoutContainer}>
                    <div className={styles.checkoutCard}>
                        <div className={styles.total}>
                            <span>
                                Total: £
                            </span>
                            {cartTotal}
                        </div>
                        <div className={styles.buttonContainer}>
                            <NavLink to='/products'>
                                <SimpleLinkButton>
                                    Continue shopping
                                </SimpleLinkButton>
                            </NavLink>
                            <NavLink to=''>
                                <SimpleLinkButton>
                                    Checkout
                                </SimpleLinkButton>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartDetail;
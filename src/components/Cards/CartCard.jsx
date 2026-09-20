import styles from './CartCard.module.css';

const CartCard = (props) => {
    return (
        <>
            <div className={styles.cartCardContainer}>
                <div className={styles.cartCardImage}>
                    <img src={props.image} />
                </div>
                <div className={styles.cartCardTitle}>{props.title}</div>
                <div className={styles.cartCardPrice}>
                    <span>
                        £
                    </span>
                    {props.price}
                </div>
            </div>
        </>
    );
}

export default CartCard;
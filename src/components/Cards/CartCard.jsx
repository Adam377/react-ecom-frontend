import styles from './CartCard.module.css';

const CartCard = (props) => {
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
            </div>
        </>
    );
}

export default CartCard;
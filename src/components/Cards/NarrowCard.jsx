import AddToCartButton from '../Button/AddToCartButton.jsx';

import styles from './NarrowCard.module.css';

const NarrowCard = (props) => {
    return (
        <>
            <div className={styles.narrowCardContainer}>
                <div className={styles.narrowCardImage}>
                    <img src={props.image} />
                </div>
                <div className={styles.narrowCardTitle}>{props.title}</div>
                <div className={styles.buttonPriceContainer}>
                    <AddToCartButton productId={props.productId} />
                    <div className={styles.narrowCardPrice}>
                        <span>
                            £
                        </span>
                        {props.price}
                    </div>
                </div>
            </div>
        </>
    );
}

export default NarrowCard;
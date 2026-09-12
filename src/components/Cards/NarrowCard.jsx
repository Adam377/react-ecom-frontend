import Button from '../Button/Button.jsx';

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
                    <Button text="Add to cart" />
                    <div className={styles.narrowCardPrice}>£{props.price}</div>
                </div>
            </div>
        </>
    );
}

export default NarrowCard;
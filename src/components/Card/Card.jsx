import Button from '../Button/Button.jsx';

import styles from './Card.module.css';

const Card = (props) => {
    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.cardImage}>
                    <img src={props.image} />
                </div>
                <div className={styles.cardDescriptionContainer}>
                    <div className={styles.cardTitle}>{props.title}</div>
                    <div className={styles.cardDescription}>{props.description}</div>
                    <div className={styles.buttonPriceContainer}>
                        <Button text="Add to cart" />
                        <div className={styles.cardPrice}>£{props.price}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
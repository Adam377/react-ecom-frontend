import Button from '../Button/Button.jsx';

import styles from './WideCard.module.css';

const WideCard = (props) => {
    return (
        <>
            <div className={styles.wideCardContainer}>
                <div className={styles.wideCardImage}>
                    <img src={props.image} />
                </div>
                <div className={styles.wideCardDescriptionContainer}>
                    <div className={styles.wideCardTitle}>{props.title}</div>
                    <div className={styles.wideCardDescription}>{props.description}</div>
                    <div className={styles.buttonPriceContainer}>
                        <Button text="Add to cart" />
                        <div className={styles.wideCardPrice}>£{props.price}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WideCard;
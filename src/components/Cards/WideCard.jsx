import { NavLink } from "react-router-dom";

import AddToCartButton from '../Button/AddToCartButton.jsx';

import styles from './WideCard.module.css';

const WideCard = (props) => {
    return (
        <>
            <div className={styles.wideCardContainer}>
                <div className={styles.wideCardImage}>
                    <NavLink to={`/products/${props.id}`}>
                        <img src={props.image} />
                    </NavLink>
                </div>
                <div className={styles.wideCardDescriptionContainer}>
                    <div className={styles.wideCardTitle}>{props.title}</div>
                    <div className={styles.wideCardDescription}>{props.shortDescription}</div>
                    <div className={styles.buttonPriceContainer}>
                        <AddToCartButton productId={props.id} />
                        <div className={styles.wideCardPrice}>
                            <span>
                                £
                            </span>
                            {props.price}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WideCard;
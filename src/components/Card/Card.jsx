import styles from './Card.module.css';

import image from '../../assets/class802TPEGrey.jpg';

const Card = () => {
    return (
        <>
            {/* USE API DATA TO REPLACE HARDCODED DATA */}
            <div className={styles.cardContainer}>
                <div className={styles.cardImage}>
                    <img src={image} />
                </div>
                <div className={styles.cardDescriptionContainer}>
                    <div className={styles.cardTitle}>Class 802 Announcement Pack</div>
                    <div className={styles.cardDescription}>Announcement plugin for TPE Class 802 services.</div>
                    <div className={styles.cardPrice}>£9.99</div>
                </div>
            </div>
        </>
    );
}

export default Card;
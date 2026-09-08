import styles from './LatestProduct.module.css';

import image from '../../assets/latest_product.png';

const LatestProduct = () => {
    return (
        <>
            <div className={styles.latestProductContainer}>
                <div className={styles.latestProductImage}>
                    <img src={image} />
                </div>
                <div className={styles.latestProductContent}>
                    <p>
                        Our next scenario pack is here!
                    </p>
                    <p>
                        Return to the busy Midland Mainline network by Just Trains with ten more scenarios centred around Sheffield, Leicester and Nottingham.
                    </p>
                    <p>
                        The pack contains ten highly detailed and immersive scenarios set between 1994 and 2002 during the privitisation of British Railways.
                    </p>
                </div>
            </div>
        </>
    );
}

export default LatestProduct;
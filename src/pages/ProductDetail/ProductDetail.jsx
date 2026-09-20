import { useParams } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';

import AddToCartButton from '../../components/Button/AddToCartButton';

import styles from './ProductDetail.module.css';

const ProductDetail = () => {
    const {getProductById} = useProductContext();
    const {isInitialised} = useProductContext();

    const product = getProductById(useParams().id);

    if(!isInitialised) {
        return(<p>Content not loaded yet</p>);
    }
    return (
        <>
            <div className={styles.productDetailContainer}>
                <div className={styles.title}>
                    {product.productTitle}
                </div>
                <div className={styles.image}>
                    <img src={product.productImage.url} />
                </div>
                <div className={styles.priceButtonContainer}>
                    <div className={styles.price}>
                        <span>
                            £
                        </span>
                        {product.productPrice}
                    </div>
                    <div className={styles.buyButton}>
                        <AddToCartButton productId={product.productId} />
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.descriptionHeading}>Description:</div>
                    <div className={styles.longDescription}>
                        {product.productLongDescription}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;

// productId
// productTitle
// productShortDescription
// productLongDescription
// productPrice
// productReleaseDate
// productTitle
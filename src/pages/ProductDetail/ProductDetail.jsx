import { useParams } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';

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
            {product.productId}
            <br />
            {product.productTitle}
            <br />
            {product.productDescription}
            <br />
            {product.productPrice}
            <br />
            {product.productReleaseDate}
            <br />
            {product.productTitle}
        </>
    );
};

export default ProductDetail;
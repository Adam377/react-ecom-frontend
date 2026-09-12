import WideCard from '../../components/Cards/WideCard';
import { getAllProductsSortedByDateDescending } from '../../utils/productsList';

import styles from './Products.module.css';

const Products = () => {
    const productsList = getAllProductsSortedByDateDescending().map((product) => (
        <WideCard
            key={product.productId}
            title={product.productTitle}
            description={product.productDescription}
            image={product.productImage.url}
            price={product.productPrice}
        />
    ));

    return(
        <>
            {productsList}
        </>
    )
}

export default Products;
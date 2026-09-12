import WideCard from '../../components/Cards/WideCard';

import styles from './Products.module.css';

import { getItem } from '../../utils/localStorage';

const Products = () => {
    const productsJson = getItem("products")
    const productsData = JSON.parse(productsJson);

    const productsList = productsData.map((product) => (
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
import { useParams } from 'react-router-dom';
import WideCard from '../../components/Cards/WideCard';
import { useProductContext } from '../../context/ProductContext';

import styles from './Products.module.css';

const Products = () => {
    const {products} = useProductContext();

    const productsList = products.map((p) => 
        <WideCard
            key={p.productId}
            id={p.productId}
            title={p.productTitle}
            shortDescription={p.productShortDescription}
            longDescription={p.productLongDescription}
            image={p.productImage.url}
            price={p.productPrice}
        />
    );

    return(
        <>
            <div className={styles.pageTitle}>
                Products
            </div>
            {productsList}
        </>
    )
}

export default Products;
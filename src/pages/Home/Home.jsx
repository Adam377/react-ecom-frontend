import styles from './Home.module.css';
import image from '../../assets/latest_product.png';
import NarrowCard from '../../components/Cards/NarrowCard';
import { useProductContext } from '../../context/ProductContext';

const Home = () => {
    const {isInitialised} = useProductContext();
    const {products} = useProductContext();

    const latestProductsList = products.map((p) =>
        <NarrowCard
            key={p.productId}
            productId={p.productId}
            title={p.productTitle}
            image={p.productImage.url}
            price={p.productPrice}
        />
    );

    const latestProduct = products.slice(0, 1);

    // only get first 4 products for homepage
    const first4ItemsList = latestProductsList.slice(0, 4);

    if(!isInitialised) {
        return(<p>Content not loaded yet</p>);
    }

    const date = new Date(latestProduct[0].productReleaseDate);
    const formattedDate = date.toLocaleDateString('en-GB');

    return(
        <>
            <div className={styles.introContainer}>
                <div className={styles.title}>
                    Delivering high quality products to you!
                </div>
                <div className={styles.content}>
                    <p>
                        Here, you'll find high quality scenario packs and assets for you to enjoy!
                    </p>
                    <p>
                        Known for our attention to detail and scenario scripting knowledge, we pride ourselves on pushing the boundaries of what the game can accomplish. Feel free to browse the store and pick up anything you like!
                    </p>
                    <p>
                        We also have collaborated with other developers to be able to host custom assets! Fell free to have a look!
                    </p>
                </div>
            </div>
            <div className={styles.highlightedProductContainer}>
                <div className={styles.highlightedProductDate}>
                    {formattedDate}
                </div>
                <div className={styles.lastestProductImageTextContainer}>
                    <div className={styles.highlightedProductImage}>
                        <img src={latestProduct[0].productImage.url} />
                    </div>
                    <div className={styles.highlightedProductContent}>
                        <p>
                            {latestProduct[0].productShortDescription}
                        </p>
                        <p>
                            {latestProduct[0].productLongDescription}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.latestProductsContainer}>
                <div className={styles.latestProductsTitle}>
                    Latest Products
                </div>
                <div className={styles.latestProducts}>
                    {first4ItemsList}
                </div>
            </div>
        </>
    );
}

export default Home;
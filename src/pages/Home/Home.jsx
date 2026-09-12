import styles from './Home.module.css';
import image from '../../assets/latest_product.png';
import { getAllProductsSortedByDateDescending } from '../../utils/productsList';
import NarrowCard from '../../components/Cards/NarrowCard';

const Home = () => {
    const latestProductsList = getAllProductsSortedByDateDescending().map((product) => (
        <NarrowCard
            key={product.productId}
            cardType="narrow"
            title={product.productTitle}
            image={product.productImage.url}
            price={product.productPrice}            
        />
    ));

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
                    6th June 2026
                </div>
                <div className={styles.lastestProductImageTextContainer}>
                    <div className={styles.highlightedProductImage}>
                        <img src={image} />
                    </div>
                    <div className={styles.highlightedProductContent}>
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
            </div>
            <div className={styles.latestProductsContainer}>
                <div className={styles.latestProductsTitle}>
                    Latest Products
                </div>
                <div className={styles.latestProducts}>
                    {latestProductsList}
                </div>
            </div>
        </>
    );
}

export default Home;
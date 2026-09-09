import styles from './Home.module.css';
import image from '../../assets/latest_product.png';

const Home = () => {
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

export default Home;
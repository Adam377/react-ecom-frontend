import styles from './Intro.module.css';

const Intro = () => {
    return (
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
        </>
    );
}

export default Intro;
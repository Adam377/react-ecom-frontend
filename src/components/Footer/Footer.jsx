import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <section className={styles.footerColumn}>
                        <h3>INFORMATION</h3>
                    </section>
                    <section className={styles.footerColumn}>
                        <h3>CUSTOMER SERVICE</h3>
                    </section>
                    <section className={styles.footerColumn}>
                        <h3>PRODUCTS</h3>
                    </section>
                </div>
            </div>
        </>
    );   
}

export default Footer;
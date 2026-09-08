import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <section className={styles.footerColumn}>
                        <h3>INFORMATION</h3>
                        <p>FAQs</p>
                        <p>Newsletter</p>
                        <p>Update Log</p>
                        <p>Privacy Policy</p>
                        <p>T&Cs</p>
                    </section>
                    <section className={styles.footerColumn}>
                        <h3>CUSTOMER SERVICE</h3>
                        <p>Contact Us</p>
                    </section>
                    <section className={styles.footerColumn}>
                        <h3>PRODUCTS</h3>
                        <p>Scenarios</p>
                    </section>
                </div>
            </div>
        </>
    );   
}

export default Footer;
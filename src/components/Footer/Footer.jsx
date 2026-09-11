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
                        <a className={styles.footerLink} href="https://docs.google.com/spreadsheets/d/1YCOIfQddapl5Q41QgT8fEHQazdM0aucUzPnhNIryBqc/edit?gid=0#gid=0">Update Log</a>
                        <p>Privacy Policy</p>
                        <p>T&Cs</p>
                    </section>
                    <section className={styles.footerColumn}>
                        <h3>CUSTOMER SERVICE</h3>
                        <p>Contact Us</p>
                    </section>
                    <section className={styles.footerColumn}>
                        <h3>PRODUCTS</h3>
                        <p>View products</p>
                    </section>
                </div>
            </div>
        </>
    );   
}

export default Footer;
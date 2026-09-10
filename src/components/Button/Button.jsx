import styles from './Button.module.css';

const Button = () => {
    return (
        <>
            <button className={styles.addToCartButton}>
                Add to cart
            </button>
        </>
    );
}

export default Button;
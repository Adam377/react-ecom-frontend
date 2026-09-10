import styles from './Button.module.css';

const Button = (props) => {
    return (
        <>
            <button className={styles.addToCartButton}>
                {props.text}
            </button>
        </>
    );
}

export default Button;
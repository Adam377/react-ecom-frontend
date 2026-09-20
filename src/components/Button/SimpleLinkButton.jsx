import styles from './SimpleLinkButton.module.css';

const SimpleLinkButton = (props) => {
    return(
        <>
            <button>
                {props.children}
            </button>
        </>
    )
}

export default SimpleLinkButton;
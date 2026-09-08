import styles from './SearchBar.module.css';

const SearchBar = () => {
    return(
        <>
            <div className={styles.searchBarContainer}>
                <div className={styles.searchBarWrapper}>
                    <input name="searchinput" placeholder="Search products" className={styles.searchInput} type="text"></input>
                </div>
            </div>
        </>
    );
}

export default SearchBar;
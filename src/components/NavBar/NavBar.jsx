import SearchBar from '../SearchBar/SearchBar';

import styles from './NavBar.module.css';

const NavBar = () => {
    return(
        <>
            <div className={styles.navBarContainer}>
                <p>Products</p>
                <div className={styles.right}>
                    <SearchBar />
                </div>
            </div>
        </>
    )
}

export default NavBar;
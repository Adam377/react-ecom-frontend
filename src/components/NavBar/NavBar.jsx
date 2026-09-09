import { NavLink } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';

import styles from './NavBar.module.css';

const NavBar = () => {
    return(
        <>
            <div className={styles.navBarContainer}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <div className={styles.right}>
                    <SearchBar />
                </div>
            </div>
        </>
    )
}

export default NavBar;
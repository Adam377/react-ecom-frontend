import { NavLink } from 'react-router-dom';

import Cart from '../Cart/Cart';
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
                    <Cart />
                </div>
            </div>
        </>
    )
}

export default NavBar;
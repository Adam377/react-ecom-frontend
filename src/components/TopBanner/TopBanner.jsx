// import { Link } from "react-router-dom";
import logo from '../../assets/class156RCD.jpg';
import SearchBar from '../SearchBar/SearchBar';

import styles from './TopBanner.module.css';

const NavBar = () => {
    return(
        <>
            <div className={styles.navBarContainer}>
                <div className={styles.logo}>
                    <img src={logo}/>
                </div>
                <div className={styles.title}>
                    Adam Haigh
                </div>
                <div className={styles.right}>
                    <SearchBar />
                </div>
            </div>
        </>
    );
}

export default NavBar
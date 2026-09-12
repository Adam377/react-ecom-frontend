import { NavLink } from "react-router-dom";
import logo from '../../assets/class156RCD.jpg';

import styles from './TopBanner.module.css';

const TopBanner = () => {
    return(
        <>
            <div className={styles.topBannerContainer}>
                <div className={styles.logo}>
                    <img src={logo}/>
                </div>
                <div className={styles.title}>
                    Adam Haigh
                </div>
                <div className={styles.right}>
                    <NavLink to="/downloads">Downloads</NavLink>
                    <NavLink to="/">Wishlist</NavLink>
                    <NavLink to="/">Login</NavLink>
                </div>
            </div>
        </>
    );
}

export default TopBanner
import Card from '../../components/Card/Card';

import novaImg from '../../assets/class802TPEGrey.jpg';
import azumaImg from '../../assets/class800LNER.jpg';
import blueTSRSignsImg from '../../assets/blueTSRSigns.jpg';
import class43CarlisleImg from '../../assets/class43Carlisle.jpg';

import styles from './Products.module.css';

const Products = () => {
    return(
        <>
            <Card
                title="Class 802 Announcement Pack"
                description="Announcement plugin for TPE Class 802 services."
                image={novaImg}
                price="£9.99"
            />
            <Card
                title="LNER Azuma Announcement Pack"
                description="Announcement plugin for LNER Azuma services."
                image={azumaImg}
                price="£9.99"
            />
            <Card
                title="1980s Blue TSR Signs"
                description="Custom blue TSR signs used by British Railways in the 1980s and 1990s."
                image={blueTSRSignsImg}
                price="£0.00"
            />
            <Card
                title="Class 43 HST at Carlisle"
                description="43159 at Carlisle 25 July 2026."
                image={class43CarlisleImg}
                price="£0.00"
            />
        </>
    )
}

export default Products;
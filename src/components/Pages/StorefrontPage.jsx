import Banner from "../BannerComponent/Banner";
import storefrontImage from '../../assets/storefront.png';
import './StorefrontPage.scss'
import Grid from "./Grid/Grid";

function StorefrontPage() {
    return (
        <div>
            <Banner image={storefrontImage} imageAlt='Storefront banner' />
            <Grid />

        </div>
    );
}

export default StorefrontPage;
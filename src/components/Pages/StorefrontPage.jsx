import Banner from "../BannerComponent/Banner";
import TableItem from "../TableComponents/TableItem/TableItem";
import TableRowCategory from "../TableComponents/TableRowCategory/TableRowCategory";
import './ItemPage.scss'
import Grid from "./Grid/Grid";

function ItemPage() {
    return (
        <div>
            <Banner title='Storefront'/>
            <Grid />

        </div>
    );
}

export default ItemPage;
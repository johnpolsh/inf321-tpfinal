import ProductPreview from "../components/ProductPreview";
import ShopLayout from "../layouts/Shop";
import TremExpressoimg from "../assets/TremExpresso.jpg";


function Shop() {
    return (
        <>
            <ProductPreview name="Cafe" desc="dasd" price="2312" img={TremExpressoimg}></ProductPreview>
        </>
    )
}

export default Shop;

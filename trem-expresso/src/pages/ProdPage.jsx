import ProductInfo from "../components/ProductInfo";

function ProdPage() {    
    return (
        <div>
            <ProductInfo name={"Café"} price={100} discount={12} rate={5} />
        </div>
    );
}

export default ProdPage;
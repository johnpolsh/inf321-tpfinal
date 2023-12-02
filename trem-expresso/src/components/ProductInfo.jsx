
function ProductInfo({ name, rate, price, discount }) {
    return (
        <div className="d-flex flex-column">
            <div>
                <h2>{name}</h2>
                <small>{rate}</small>
            </div>
            <div>
                <h3>{price}</h3>
                <span>{discount}</span>
            </div>
        </div>
    );
}

export default ProductInfo;

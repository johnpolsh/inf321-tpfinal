import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./Rating";

function ProductPreview({ name, desc, price, img }) {
	return (
		<div className="card p-3">
			<Link to="/">
				<img src={img} className="card-img-top" alt={name} />
			</Link>
			<div className="card-body text-dark">
				<h4 className="card-title">{name}</h4>
				<p className="card-text text-truncate">{desc}</p>
				<h4 className="product-price">R$ {price}</h4>
                <Rating stars={4} />
			</div>

			<button className="btn btn-danger">Adicionar ao Carrinho</button>
		</div>
	);
}

export default ProductPreview;

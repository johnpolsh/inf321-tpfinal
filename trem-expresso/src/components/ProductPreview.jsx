import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./Rating";
import Cookies from "js-cookie";

function ProductPreview({ name, desc, price, img }) {
	const addToCartHandler = () => {

		const cartItem = {
			name,
			img,
			price,
			desc,
		};

		const currentCart = JSON.parse(Cookies.get("cart") || "[]");

		const updatedCart = [...currentCart, cartItem];

		Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7 });

		console.log("Conteúdo do cookie:", Cookies.get("cart"));
		alert(`${name} adicionado ao carrinho!`);
	};
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

			<button className="btn btn-danger" onClick={addToCartHandler}>
				Adicionar ao Carrinho
			</button>
		</div>
	);
}

export default ProductPreview;

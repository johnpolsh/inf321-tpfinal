import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./Rating";
import Cookies from "js-cookie";

function ProductPreview({ name, desc, price, img, id, weight, type, amount }) {
	function removeAllCookies() {
		var cookies = document.cookie.split(";");

		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];
			var eqPos = cookie.indexOf("=");
			var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		}
	}

	const addToCartHandler = () => {
		//removeAllCookies();
		const cartItem = {
			name,
			img,
			price,
			desc,
			id,
			weight,
			amount, 
			type,
			qtd: 1,
		};

		const currentCart = JSON.parse(Cookies.get("cart") || "[]");
		const existingItemIndex = currentCart.findIndex((item) => item.id === id);

		if (existingItemIndex !== -1) {
			// Se o item já existe, incrementa a quantidade
			currentCart[existingItemIndex].qtd += 1;
		} else {
			// Se o item não existe, adiciona ao carrinho com qtd igual a 1
			currentCart.push(cartItem);
		}

		Cookies.set("cart", JSON.stringify(currentCart), { expires: 7 });

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

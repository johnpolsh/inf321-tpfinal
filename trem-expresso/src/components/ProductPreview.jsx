import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductPreview({ name, desc, price, img }) {
	return (
		<div className="card p-3 mt-2" style={{ width: "300px" }}>
			<Link to="/">
				<img src={img} className="card-img-top" alt={name} />
			</Link>
			<div className="card-body text-dark">
				<h4 className="card-title">{name}</h4>
				<p className="card-text">{desc}</p>
				<h4 className="product-price">R${price}</h4>

				<ul class="list-inline small">
					<li class="list-inline-item active m-0">
						<FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
					</li>
					<li class="list-inline-item active m-0">
						<FontAwesomeIcon icon={faStar}  ></FontAwesomeIcon>
					</li>
					<li class="list-inline-item active m-0">
						<FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
					</li>
					<li class="list-inline-item active m-0">
						<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
					</li>
                    <li class="list-inline-item m-0">
						<FontAwesomeIcon  icon={faStar} ></FontAwesomeIcon>
					</li>
				</ul>
			</div>

			<button className="btn btn-danger">Adicionar ao Carrinho</button>
		</div>
	);
}


export default ProductPreview;
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import TremExpressoimg from "../assets/TremExpresso.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartItem({ name, type, img, weight, price, discount }) {
	return (
		<div className="cart-item d-md-flex justify-content-between bg-white mb-2">
			<div className="px-3 my-3">
				<a
					className="cart-item-product d-flex "
					href="#"
					style={{ textDecoration: "none" }}
				>
					<div className="cart-item-product d-flex mb-2">
						<div
							className="cart-item-product-thumb align-self-start mr-3"
							style={{
								width: "100px",
								height: "100px",
								marginRight: "15px",
							}}
						>
							<img
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
								}}
								src={TremExpressoimg}
								alt="Product"
							/>
						</div>
						<div className="cart-item-product-info d-flex flex-column justify-content-start">
							<h4 className="cart-item-product-title">{name}</h4>
							<span>
								<strong>Tipo:</strong> {type}
							</span>
							<span>
								<strong>Peso:</strong> {weight} gramas
							</span>
						</div>
					</div>
				</a>
			</div>

			<div className="px-3 my-3 text-center">
				<div className="cart-item-label">Quantidade</div>
				<div className="count-input ">
					<select className="form-control bg-white">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
					</select>
				</div>
			</div>

			<div className="px-3 my-3 text-center">
				<div className="cart-item-label">Preço</div>
				<span className="text-xl font-weight-medium">R$ {price}</span>
			</div>

			<div className="px-3 my-3 text-center">
				<div className="cart-item-label">Desconto</div>
				<span className="text-xl font-weight-medium">R$ {discount}</span>
			</div>
			
			<button className="btn btn-outline-danger">
				<FontAwesomeIcon icon={faTrashCan} />
			</button>
		</div>
	);
}

export default CartItem;

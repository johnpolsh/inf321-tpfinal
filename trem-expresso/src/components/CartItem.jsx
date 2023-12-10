import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function CartItem({ name, type, img, weight, price, discount, maxCount }) {
	const [buyCount, setBuyCount] = useState(1);
	const [payingPrice, setPayingPrice] = useState(price);

	function incBuyCount() {
		if (buyCount < maxCount) {
			const newCount = buyCount + 1;
			setBuyCount(newCount);
			setPayingPrice(newCount * price);
		}
	}

	function decBuyCount() {
		if (buyCount > 1) {
			const newCount = buyCount - 1;
			setBuyCount(newCount);
			setPayingPrice(newCount * price);
		}
	}

	return (
		<div className="d-flex flex-column flex-md-row justify-content-between align-items-center bg-white p-3" style={{ borderTop: '2px solid #191918' }}  >
			<div className="px-3 my-3" >
				<a className="d-flex" href="#" style={{ textDecoration: "none" }}>
					<div className="cart-item-product d-flex mb-2" >
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
								src={img}
								alt={name}
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

			<div className="px-3 my-3 text-center" >
				<div className="cart-item-label">Quantidade</div>
				<div className="count-input ">
					<div className="input-group">
						<input
							className="form-control bg-white"
							placeholder="Quantidade"
							type="number"
							value={buyCount}
							min={1}
							max={maxCount}
							required
							style={{ borderColor: "#a36f3e" }}
						/>
						<button
							style={{
								borderTopColor: "#a36f3e",
								borderBottomColor: "#a36f3e",
							}}
							className="btn"
							type="button"
							onClick={() => decBuyCount()}
						>
							<FontAwesomeIcon icon={faMinus} />
						</button>
						<button
							style={{
								borderTopColor: "#a36f3e",
								borderBottomColor: "#a36f3e",
								borderRightColor: "#a36f3e",
							}}
							className="btn"
							type="button"
							onClick={() => incBuyCount()}
						>
							<FontAwesomeIcon icon={faPlus} />
						</button>
					</div>
				</div>
			</div>

			<div className="px-3 my-3 text-center">
				<div className="cart-item-label">Subtotal:</div>
				<span className="text-xl font-weight-medium">R$ {payingPrice}</span>
			</div>

			<div className="px-3 my-3 text-center">
				<div className="cart-item-label">Desconto:</div>
				<span className="text-xl font-weight-medium">R$ {discount}</span>
			</div>

			<button className="btn btn-outline-danger">
				<FontAwesomeIcon icon={faTrashCan} />
			</button>
		</div>
	);
}

export default CartItem;

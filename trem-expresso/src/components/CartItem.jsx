import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
function CartItem({
	qtd,
	name,
	type,
	img,
	weight,
	price,
	discount,
	maxCount,
	id,
	onRemove,
	onQuantityChange,
}) {
	const [buyCount, setBuyCount] = useState(qtd);
	const [payingPrice, setPayingPrice] = useState(price * qtd);

	function incBuyCount() {
		if (buyCount < maxCount) {
			const newCount = buyCount + 1;
			setBuyCount(newCount);
			setPayingPrice(newCount * price);
			onQuantityChange(newCount);
		}
	}

	function decBuyCount() {
		if (buyCount > 1) {
			const newCount = buyCount - 1;
			setBuyCount(newCount);
			setPayingPrice(newCount * price);
			onQuantityChange();
			onQuantityChange(newCount);
		}
	}
	const productLink = `/product/${id}`;
	return (
		<div
			className="d-flex flex-column flex-md-row justify-content-between align-items-center bg-white p-3"
			style={{ borderTop: "2px solid #191918" }}>
			<div className="px-3 my-3">
				<Link to={productLink} style={{ textDecoration: "none" }}>
					<a
						className="d-flex"
						href="#"
						style={{ textDecoration: "none" }}>
						<div className="cart-item-product d-flex mb-2">
							<div
								className="cart-item-product-thumb align-self-start mr-3"
								style={{
									width: "100px",
									height: "100px",
									marginRight: "15px",
								}}>
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
								<h4 className="cart-item-product-title">
									{name}
								</h4>
								<span>
									<strong>Tipo:</strong> {type}
								</span>
								<span>
									<strong>Peso:</strong> {weight} gramas
								</span>
							</div>
						</div>
					</a>
				</Link>
			</div>

			<div className="px-3 my-3 text-center">
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
							onClick={() => decBuyCount()}>
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
							onClick={() => incBuyCount()}>
							<FontAwesomeIcon icon={faPlus} />
						</button>
					</div>
				</div>
			</div>

			<div className="px-3 my-3 text-center">
				<div className="cart-item-label">Subtotal:</div>
				<span className="text-xl font-weight-medium">
					R$ {payingPrice.toFixed(2)}
				</span>
			</div>

			<div className="px-3 my-3 text-center">
				<div className="cart-item-label">Desconto:</div>
				<span className="text-xl font-weight-medium">
					R$ {discount.toFixed(2)}
				</span>
			</div>

			<button className="btn btn-outline-danger" onClick={onRemove}>
				<FontAwesomeIcon icon={faTrashCan} />
			</button>
		</div>
	);
}

export default CartItem;

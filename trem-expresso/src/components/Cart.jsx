import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import TremExpressoimg from "../assets/TremExpresso.jpg";

function Cart() {
	return (
		<div className="mt-3">
			<div className="container pb-5 mb-2">
				{/* <!-- Cart Item--> */}
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
									<h4 className="cart-item-product-title">
										Cafe Italiano Expresso
									</h4>
									<span>
										<strong>Tipo:</strong> Café Arábico
									</span>
									<span>
										<strong>Peso:</strong> 500g
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
						<div className="cart-item-label">Subtotal</div>
						<span className="text-xl font-weight-medium">R$200.00</span>
					</div>
					<div className="px-3 my-3 text-center">
						<div className="cart-item-label">Desconto</div>
						<span className="text-xl font-weight-medium">R$35.00</span>
					</div>
					<button
						className="btn btn-outline-danger "
						
					>
						X
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cart;

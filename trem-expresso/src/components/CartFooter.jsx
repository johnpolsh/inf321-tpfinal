import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function CartFooter({price}) {
	return (
		<div className="d-flex flex-column flex-md-row justify-content-between align-items-center bg-white rounded p-3">
			<div className="px-3 my-3 text-center">
				<div className="cart-item-label">
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							placeholder="Digite seu cupom"
							aria-label="Digite seu cupom"
							aria-describedby="button-aplicar"
							style={{ backgroundColor: "white", borderColor: "#a36f3e" }}
						/>
						<button
							className="btn btn-primary"
							type="button"
							id="button-aplicar"
							style={{ backgroundColor: "#a36f3e", borderColor: "#a36f3e" }}
						>
							Aplicar
						</button>
					</div>
				</div>
			</div>

			<div className="px-3 my-3 text-center">
				<div className="cart-item-label">Total a pagar:</div>
				<span className="text-xl font-weight-medium">R$ {price} </span>
			</div>
			<button
				className="btn btn-primary"
				type="button"
				id="button-finalizar"
				style={{ backgroundColor: "#a36f3e", borderColor: "#a36f3e" }}
			>
				Finalizar Compra
			</button>
		</div>
	);
}

export default CartFooter;

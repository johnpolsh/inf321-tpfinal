import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function CartFooter({ price }) {
	const [cupomMessage, setCupomMessage] = useState("");

	const handleAplicarCupom = () => {
        ////
		setCupomMessage("CUPOM INVÁLIDO, EXPIRADO OU JÁ UTILIZADO");

		setTimeout(() => {
			setCupomMessage("");
		}, 2000);
	};

	return (
		<div className="d-flex flex-column flex-md-row justify-content-between align-items-center bg-white p-3" style={{ borderTop: '2px solid #191918' }}>
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
							onClick={handleAplicarCupom}
						>
							Aplicar
						</button>
					</div>
				</div>
			</div>
			<div className="position-absolute bottom-50 start-50 translate-middle-x mt-2 text-danger">
				{cupomMessage}
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

import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function CartFooter() {

	return (
		<div className="d-flex flex-column flex-md-row justify-content-between align-items-center bg-white rounded p-3">

			<div className="px-3 my-3 text-center">
				<div className="cart-item-label">Total a pagar:</div>
				<span className="text-xl font-weight-medium">R$ </span>
			</div>

            <div className="px-3 my-3 text-center">
				<div className="cart-item-label">Aplicar Cupom</div>
				<span className="text-xl font-weight-medium">
					
				</span>
			</div>
		</div>
	);
}

export default CartFooter;

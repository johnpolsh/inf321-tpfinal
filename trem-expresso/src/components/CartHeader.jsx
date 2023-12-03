import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import TremExpressoimg from "../assets/TremExpresso.jpg";

function CartHeader() {
	return (
	  <div className="flex-column flex-md-row bg-white rounded p-3">
		<div className="mx-auto my-3 text-center">
		  <h2 style={{color:'#b96c4d'}}>Carrinho de Compras</h2>
		</div>
		{/* <div className="ml-md-auto my-3 text-md-left">
		  h2<strong>Produtos</strong>
		</div> */}
	  </div>
	);
  }
  
  export default CartHeader;
  
  
  
  
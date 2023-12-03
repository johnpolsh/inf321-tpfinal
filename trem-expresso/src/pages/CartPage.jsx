import CartItem from "../components/CartItem";
import CartFooter from "../components/CartFooter";
import TremExpressoimg from "../assets/TremExpresso.jpg";
function CartPage() {
	return (
		<div>
		<CartItem
			name={"Cafe Italiano"}
			type={"Cafe Arabico"}
			img={TremExpressoimg}
			weight={500}
			discount={10.0}
			price={100.0}
			maxCount={230}
		/>
		<CartItem
			name={"Cafe Italiano"}
			type={"Cafe Arabico"}
			img={TremExpressoimg}
			weight={500}
			discount={10.0}
			price={100.0}
			maxCount={230}
		/>
		<CartFooter price={1000}/>
		</div>
		
	);
}

export default CartPage;

import CartItem from "../components/CartItem";
import TremExpressoimg from "../assets/TremExpresso.jpg";
function CartPage() {
	return (
		<CartItem
			name={"Cafe Italiano"}
			type={"Cafe Arabico"}
			img={TremExpressoimg}
			weight={500}
			discount={10.0}
			price={100.0}
			maxCount={230}
		/>
	);
}

export default CartPage;

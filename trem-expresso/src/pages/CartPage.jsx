import CartItem from "../components/CartItem";
import CartFooter from "../components/CartFooter";
import CartHeader from "../components/CartHeader";
import TremExpressoimg from "../assets/TremExpresso.jpg";

import DefaultLayout from "../layouts/Default";

function CartPage() {
	return (
		<div>
			{/* <DefaultLayout> */}
				<CartHeader />
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
				<CartFooter price={1200.59} />
			{/* </DefaultLayout> */}
		</div>
	);
}

export default CartPage;

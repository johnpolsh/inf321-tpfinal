import CartItem from "../components/CartItem";
import CartFooter from "../components/CartFooter";
import CartHeader from "../components/CartHeader";
import TremExpressoimg from "../assets/TremExpresso.jpg";
import Cookies from "js-cookie";
import DefaultLayout from "../layouts/Default";
import React, { useState, useEffect } from 'react';

function CartPage() {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const cartData = Cookies.get("cart") || "[]";
		setCartItems(JSON.parse(cartData));
	}, []);

	const removeCartItem = (indexToRemove) => {
		const newCartItems = cartItems.filter((_, index) => index !== indexToRemove);
		setCartItems(newCartItems);

		Cookies.set("cart", JSON.stringify(newCartItems));
	};

	return (
		<div>
			<DefaultLayout>
				<div>
					<CartHeader />
				</div>
				<div>
					{/* Mapeia os itens do carrinho e renderiza os componentes CartItem */}
					{cartItems.map((item, index) => (
						<div key={index}>
							<CartItem
								name={item.name}
								type={'tipo teste'}
								img={item.img}
								weight={500}
								discount={0}
								price={item.price}
								maxCount={30}
								onRemove={() => removeCartItem(index)}
							/>
						</div>
					))}
				</div>
				<div>
					<CartFooter
						price={cartItems.reduce((total, item) => total + item.price, 0)}
					/>
				</div>
			</DefaultLayout>
		</div>
	);
}

export default CartPage;

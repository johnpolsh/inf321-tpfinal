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

	const updateCartItemQuantity = (index, newQuantity) => {
		const updatedCartItems = [...cartItems];
		updatedCartItems[index] = { ...updatedCartItems[index], qtd: newQuantity };
		setCartItems(updatedCartItems);
	
		// Recalcula o preço total após alterar a quantidade do item no carrinho
		const totalPrice = updatedCartItems.reduce((total, item) => total + item.price * item.qtd, 0);
		setTotalPrice(totalPrice);
	
		Cookies.set("cart", JSON.stringify(updatedCartItems));
	  };
	
	  // Adiciona um novo estado para armazenar o preço total
	  const [totalPrice, setTotalPrice] = useState(0);

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
								qtd={item.qtd}
								name={item.name}
								type={item.type}
								img={item.img}
								weight={item.weight}
								discount={0}
								price={item.price}
								maxCount={item.amount}
								onRemove={() => removeCartItem(index)}
								onQuantityChange={(newQuantity) => updateCartItemQuantity(index, newQuantity)}
							/>
						</div>
					))}
				</div>
				<div>
					<CartFooter
						price={cartItems.reduce((total, item) => total + item.price * item.qtd, 0)}
						

					/>
				</div>
			</DefaultLayout>
		</div>
	);
}

export default CartPage;

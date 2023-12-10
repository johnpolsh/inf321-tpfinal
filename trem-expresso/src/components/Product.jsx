import { Link } from "react-router-dom";
import TremExpressoimg from "../assets/TremExpresso.jpg";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function Product({ name, desc, price, imgs, id, weight, type, amount }) {
	const getValorOriginal = () => {
		return price * 1.2;
	};
	const valorOriginal = getValorOriginal();
	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? imgs.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
		);
	};

	const addToCartHandler = () => {
		//removeAllCookies();
		var img = imgs[0];
		const cartItem = {
			name,
			img,
			price,
			desc,
			id,
			weight,
			amount,
			type,
			qtd: 1,
		};

		const currentCart = JSON.parse(Cookies.get("cart") || "[]");
		const existingItemIndex = currentCart.findIndex((item) => item.id === id);

		if (existingItemIndex !== -1) {
			// Se o item já existe, incrementa a quantidade
			currentCart[existingItemIndex].qtd += 1;
		} else {
			// Se o item não existe, adiciona ao carrinho com qtd igual a 1
			currentCart.push(cartItem);
		}

		Cookies.set("cart", JSON.stringify(currentCart), { expires: 7 });

		console.log("Conteúdo do cookie:", Cookies.get("cart"));
		alert(`${name} adicionado ao carrinho!`);
	};

	return (
		<div>
			<div className="container d-flex align-items-center justify-content-center vh-100">
				<div className="d-flex ">
					<div className="col-md-6 overflow-auto">
						<div
							id={`carousel-${id}`}
							className="carousel slide img-fluid rounded-start"
							data-bs-ride="carousel"
							style={{ height: "100%", width: "100%", objectFit: "cover" }}
						>
							<div className="carousel-inner ">
								{imgs.map((img, index) => (
									<div
										key={index}
										className={`carousel-item ${
											index === activeIndex ? "active" : ""
										}`}
									>
										<img
											src={img}
											className="img-fluid rounded-start"
											alt={`Product Image ${index + 1}`}
											style={{
												height: "100%",
												width: "100%",
												objectFit: "cover",
											}}
										/>
									</div>
								))}
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target={`#carousel-${id}`}
								data-bs-slide="prev"
								onClick={handlePrev}
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								/>
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target={`#carousel-${id}`}
								data-bs-slide="next"
								onClick={handleNext}
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								/>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>
					<div className="col-md-6 p-4 bg-light  rounded-end overflow-auto ">
						<div>
							<h1
								className="text-uppercase mt-3"
								style={{
									fontSize: "2rem",
									color: "black",
									fontFamily: "Roboto, sans-serif",
								}}
							>
								{name}
							</h1>
							<h5
								style={{
									color: "rgba(0, 0, 0, 0.7)",
									fontFamily: "Roboto, sans-serif",
								}}
							>
								{type}
							</h5>
							<div className="mt-3 mb-5">
								<h2 style={{ color: "red", display: "inline-block" }}>
									R${price}
								</h2>
								<h4
									className="ml-3"
									style={{
										display: "inline-block",
										color: "black",
										textDecoration: "line-through",
										marginLeft: "10px",
									}}
								>
									R${valorOriginal.toFixed(2)}
								</h4>
								<h4
									style={{
										display: "inline-block",
										color: "black",
										marginLeft: "10px",
									}}
								>
									({((1 - price / valorOriginal) * 100).toFixed(0)}% OFF)
								</h4>
							</div>
						</div>
						<div className="flex-grow-1">
							<h6 className="mb-5 mt-5 text-justify" style={{ color: "black" }}>
								{desc}
							</h6>
							<h6 style={{ color: "red" }}>Peso: {weight} gramas</h6>
						</div>
						<button
							type="submit"
							className="mt-5 btn btn-primary w-100 btn-lg"
							style={{ backgroundColor: "red", borderColor: "red" }}
							onClick={addToCartHandler}
						>
							Adicionar ao Carrinho
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;

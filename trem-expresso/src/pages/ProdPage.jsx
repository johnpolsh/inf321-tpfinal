import Product from "../components/Product";
import { useEffect, useState } from "react";
import TremExpressoImg1 from "../assets/TremExpresso.jpg";
import TremExpressoImg2 from "../assets/TremExpresso2.jpg";
import TremExpressoImg3 from "../assets/TremExpresso3.jpg";
import TremExpressoImg4 from "../assets/TremExpresso4.jpg";
import DefaultLayout from "../layouts/Default";

function ProdPage() {
	const prodDummy = {
		id: 1,
		name: "Café expresso",
		price: 3.25,
		amount: 98,
		desc: "Um sobor sublime",
		img: "dummyimg.jpg",
	};

	const [productList, setProductList] = useState([prodDummy]);

	useEffect(() => {
		fetch("http://localhost:3000/prodList")
			.then((response) => response.json())
			.then((data) => {
				console.log("received data:", data);
				setProductList(data);
			})
			.catch((error) => {
				console.error(`error: ${error}`);
			});
	}, []);

	const firstProd = productList[0];
	return (
		<DefaultLayout>
			<Product
				name={firstProd.name}
				desc={firstProd.desc}
				price={firstProd.price}
				imgs={[
					TremExpressoImg1,
					TremExpressoImg2,
					TremExpressoImg3,
					TremExpressoImg4,
				]}
				id={firstProd.id}
				weight={firstProd.weight}
				type={firstProd.type}
				amount={firstProd.amount}
			/>
		</DefaultLayout>
	);
}

export default ProdPage;

import ProductPreview from "../components/ProductPreview";
import TremExpressoimg from "../assets/TremExpresso.jpg";
import DefaultLayout from "../layouts/Default";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";

const prodDummy = {
	id: 1,
	name: "Café expresso",
	price: 3.25,
	amount: 98,
	desc: "Um sobor sublime",
	img: "dummyimg.jpg",
};

function Shop() {
	// TODO: from json
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

	return (
		<>
			<DefaultLayout>
				<SearchBar></SearchBar>
				<div className="container-fluid">
					<div className="m-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
						{productList.map((el, i) => {
							return (
								<div className="p-3" key={i}>
                                    {/* TODO: fazer descrição limitada para duas linhas */}
									<ProductPreview
										name={el.name}
										desc={el.desc}
										price={el.price}
										img={el.img}></ProductPreview>
								</div>
							);
						})}
					</div>
				</div>
			</DefaultLayout>
		</>
	);
}

export default Shop;

import ProductPreview from "../components/ProductPreview";
import TremExpressoimg from "../assets/TremExpresso.jpg";
import DefaultLayout from "../layouts/Default";
import SearchBar from "../components/SearchBar";	
import { useState } from "react";

function Shop() {
	// TODO: from json
	const [productList, setProductList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

	return (
		<>
			<DefaultLayout>
				<SearchBar></SearchBar>
                {/* TODO: barra de pesquisa e filtros */}
				<div className="container-fluid">
					<div className="m-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
						{productList.map((el, i) => {
							return (
								<div className="p-3" key={i}>
									<ProductPreview
										name="Cafe"
										desc="dasd"
										price="2312"
										img={TremExpressoimg}></ProductPreview>
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

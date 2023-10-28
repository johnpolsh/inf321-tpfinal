import { useState } from "react";
import CoffeeProduct from "./components/CoffeeProduct";
import NavBar from "./components/NavBar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<NavBar></NavBar>
			<CoffeeProduct
				name={"Lorem"}
				desc={"Ipsum"}
				content={"aodnaoia"}
				align={"left"}></CoffeeProduct>
		</>
	);
}

export default App;

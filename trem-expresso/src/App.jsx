import { useState } from "react";
import CoffeeProduct from "./components/CoffeeProduct";
import NavBar from "./components/NavBar";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

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

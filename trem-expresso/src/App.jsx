import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NoPage from "./pages/NoPage";
import CadastroPage from "./pages/CadastroPage";
import LoginPage from "./pages/LoginPage";
import ProdPage from "./pages/ProdPage";
import CartPage from "./pages/CartPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="shop" element={<Shop />} />
					<Route path="login" element={<LoginPage/>}/>
					<Route path="cadastro" element={<CadastroPage/>}/>
					<Route path="product/:id" element={<ProdPage/>} />
					<Route path="cart" element = {<CartPage/>}/>
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

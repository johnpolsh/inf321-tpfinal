import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route path="shop" element={<Shop />} />
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

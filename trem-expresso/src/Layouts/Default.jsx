import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function DefaultLayout({ children }) {
	return (
		<>
			<NavBar></NavBar>
			<main>{children}</main>
			<Footer></Footer>
		</>
	);
}

export default DefaultLayout;

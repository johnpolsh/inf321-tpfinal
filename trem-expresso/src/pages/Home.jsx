import DefaultLayout from "../layouts/Default";
import Banner from "../components/Banner";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CoffeeProduct from "../components/CoffeeProduct";
import TremExpressoImg1 from "../assets/TremExpresso.jpg";
import TremExpressoImg2 from "../assets/TremExpresso2.jpg";
import TremExpressoImg3 from "../assets/TremExpresso3.jpg";
import TremExpressoImg4 from "../assets/TremExpresso4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
	return (
		<>
			<DefaultLayout>
				<Banner
					images={[
						TremExpressoImg1,
						TremExpressoImg2,
						TremExpressoImg3,
						TremExpressoImg4,
					]}></Banner>
				<div className="d-flex align-items-center justify-content-center my-3">
					<a href="#ourProducts">
						<FontAwesomeIcon
							icon={faChevronDown}
							style={{ width: "32px", height: "auto" }}
						/>
					</a>
				</div>
				<div id="ourProducts" className="p-3">
					<h2 className="ms-4">Nossos produtos</h2>
					<CoffeeProduct
						name={"Lorem"}
						desc={"Neque porro quisquam est qui dolorem ipsum"}
						content={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar justo non tincidunt tempor. Suspendisse eu dolor sed enim lacinia fermentum eu in orci. Vestibulum porta eu nisi et condimentum. Aliquam accumsan viverra nisl, id iaculis metus eleifend nec. Sed in velit in ligula dignissim ultrices id vitae purus. Proin vestibulum viverra tristique. Mauris at sem convallis, efficitur mauris ac, accumsan sem. Nam eu faucibus enim. Nulla ut vehicula mi. Aliquam vestibulum auctor lectus. Etiam eget ex tristique, dictum leo quis, aliquam massa."
						}
					/>
					<CoffeeProduct
						name={"Lorem"}
						desc={"Neque porro quisquam est qui dolorem ipsum"}
						content={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar justo non tincidunt tempor. Suspendisse eu dolor sed enim lacinia fermentum eu in orci. Vestibulum porta eu nisi et condimentum. Aliquam accumsan viverra nisl, id iaculis metus eleifend nec. Sed in velit in ligula dignissim ultrices id vitae purus. Proin vestibulum viverra tristique. Mauris at sem convallis, efficitur mauris ac, accumsan sem. Nam eu faucibus enim. Nulla ut vehicula mi. Aliquam vestibulum auctor lectus. Etiam eget ex tristique, dictum leo quis, aliquam massa."
						}
					/>
					<CoffeeProduct
						name={"Lorem"}
						desc={"Neque porro quisquam est qui dolorem ipsum"}
						content={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar justo non tincidunt tempor. Suspendisse eu dolor sed enim lacinia fermentum eu in orci. Vestibulum porta eu nisi et condimentum. Aliquam accumsan viverra nisl, id iaculis metus eleifend nec. Sed in velit in ligula dignissim ultrices id vitae purus. Proin vestibulum viverra tristique. Mauris at sem convallis, efficitur mauris ac, accumsan sem. Nam eu faucibus enim. Nulla ut vehicula mi. Aliquam vestibulum auctor lectus. Etiam eget ex tristique, dictum leo quis, aliquam massa."
						}
					/>
				</div>
			</DefaultLayout>
		</>
	);
}

export default Home;

import DefaultLayout from "../Layouts/Default";
import CoffeeProduct from "../components/CoffeeProduct";

function Home() {
	return (
		<>
			<DefaultLayout>
				<CoffeeProduct
					name={"Lorem"}
					desc={"Neque porro quisquam est qui dolorem ipsum"}
					content={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar justo non tincidunt tempor. Suspendisse eu dolor sed enim lacinia fermentum eu in orci. Vestibulum porta eu nisi et condimentum. Aliquam accumsan viverra nisl, id iaculis metus eleifend nec. Sed in velit in ligula dignissim ultrices id vitae purus. Proin vestibulum viverra tristique. Mauris at sem convallis, efficitur mauris ac, accumsan sem. Nam eu faucibus enim. Nulla ut vehicula mi. Aliquam vestibulum auctor lectus. Etiam eget ex tristique, dictum leo quis, aliquam massa."
					}
					reverse={false}></CoffeeProduct>
				<CoffeeProduct
					name={"Lorem"}
					desc={"Neque porro quisquam est qui dolorem ipsum"}
					content={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar justo non tincidunt tempor. Suspendisse eu dolor sed enim lacinia fermentum eu in orci. Vestibulum porta eu nisi et condimentum. Aliquam accumsan viverra nisl, id iaculis metus eleifend nec. Sed in velit in ligula dignissim ultrices id vitae purus. Proin vestibulum viverra tristique. Mauris at sem convallis, efficitur mauris ac, accumsan sem. Nam eu faucibus enim. Nulla ut vehicula mi. Aliquam vestibulum auctor lectus. Etiam eget ex tristique, dictum leo quis, aliquam massa."
					}
					reverse={true}></CoffeeProduct>
				<CoffeeProduct
					name={"Lorem"}
					desc={"Neque porro quisquam est qui dolorem ipsum"}
					content={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar justo non tincidunt tempor. Suspendisse eu dolor sed enim lacinia fermentum eu in orci. Vestibulum porta eu nisi et condimentum. Aliquam accumsan viverra nisl, id iaculis metus eleifend nec. Sed in velit in ligula dignissim ultrices id vitae purus. Proin vestibulum viverra tristique. Mauris at sem convallis, efficitur mauris ac, accumsan sem. Nam eu faucibus enim. Nulla ut vehicula mi. Aliquam vestibulum auctor lectus. Etiam eget ex tristique, dictum leo quis, aliquam massa."
					}
					reverse={false}></CoffeeProduct>
			</DefaultLayout>
		</>
	);
}

export default Home;

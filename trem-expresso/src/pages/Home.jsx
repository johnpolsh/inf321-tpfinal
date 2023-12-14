import DefaultLayout from "../layouts/Default";
import Banner from "../components/Banner";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CoffeeProduct from "../components/CoffeeProduct";
import TremExpressoImg1 from "../assets/TremExpresso.jpg";
import TremExpressoImg2 from "../assets/TremExpresso2.jpg";
import TremExpressoImg3 from "../assets/TremExpresso3.jpg";
import TremExpressoImg4 from "../assets/TremExpresso4.jpg";
import gourmet from "../assets/gourmet.jpg";
import especiais from "../assets/especiais.jpg";
import tradional from "../assets/tradicional.jpg";
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
					<CoffeeProduct
						name={"Cafés Gourmets"}
						desc={"Sabor e garbo"}
						content={
							"Nossos cafés gourmets são cuidadosamente selecionados a partir dos grãos mais finos, cultivados em regiões exuberantes e propícias para a produção de café de alta qualidade. Cada etapa do processo, desde o cultivo até a torra, é executada com maestria, resultando em uma experiência única de sabor e aroma. Os cafés gourmets são conhecidos por suas notas distintas, que variam de frutadas e florais a notas de chocolate e especiarias, proporcionando uma viagem gustativa inigualável."
						}
                        img={gourmet}
					/>
					<CoffeeProduct
						name={"Cafés Especiais"}
						desc={"Qualidade e robustez"}
						content={
							"Explore o extraordinário com nossos cafés especiais, uma seleção cuidadosa que reflete o ápice da arte cafeeira. Cada xícara é uma experiência única, criada a partir de grãos raros cultivados em locais exclusivos ao redor do mundo. A torrefação artesanal eleva esses grãos a um patamar superior, realçando perfis de sabor complexos e aromas irresistíveis."
						}
                        img={especiais}
					/>
					<CoffeeProduct
						name={"Tradicionais"}
						desc={"Tradição e simplicidade"}
						content={
							"Nossos cafés tradicionais são cultivados com cuidado, colhidos à mão e preparados para oferecer uma experiência única. Nossa busca pela qualidade começa nas fazendas, combinando solo fértil e práticas sustentáveis. Do cultivo à colheita manual e à torrefação artesanal, cada etapa é dedicada a garantir que apenas os melhores grãos cheguem à sua xícara."
						}
                        img={tradional}
					/>
				</div>
			</DefaultLayout>
		</>
	);
}

export default Home;

import TremExpressoImg from "../assets/TremExpresso.jpg";

function CoffeeProduct({ name, desc, content, reverse = false }) {
	return (
		<div
			className={
				"d-flex p-2 " + (reverse ? "flex-row-reverse" : "flex-row")
			}>
			<img
				alt="Trem Expresso imagem"
				// className="img-thumbnail"
				src={TremExpressoImg}
				style={{ width: "30%" }}
			/>
			<div className="px-2">
				<h3 className={reverse ? "text-end" : "text-start"}>{name}</h3>
				{/* TODO: adicionar citação, eg produto recomendado */}
				<p className={reverse ? "text-end" : "text-start"}>
					<small className="text-justify">{desc}</small>
				</p>
				<p className={reverse ? "text-end" : "text-start"}>{content}</p>
			</div>
		</div>
	);
}

export default CoffeeProduct;

import TremExpressoImg from "../assets/TremExpresso.jpg";

function CoffeeProduct({ name, desc, content, reverse = false }) {
	return (
		<div
			className={
				"d-flex p-2 " + (reverse ? "flex-row-reverse" : "flex-row")
			}>
			<img
				alt="Trem Expresso imagem"
				src={TremExpressoImg}
				style={{ width: "30%" }}
			/>
			<div className="px-2">
				<figure className={reverse ? "text-end" : "text-start"}>
					<blockquote className="blockquote">{name}</blockquote>
					<figcaption className="blockquote-footer">{desc}</figcaption>
					<p>{content}</p>
				</figure>
			</div>
		</div>
	);
}

export default CoffeeProduct;

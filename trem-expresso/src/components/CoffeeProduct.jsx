import TremExpressoImg from "../assets/TremExpresso.jpg";

function CoffeeProduct({ name, desc, content }) {
	return (
		<div className="coffee-product">
			<div className="coffee-figure-info">
				<figure>
					<h4>{name}</h4>
					<figcaption className="blockquote-footer">
						{desc}
					</figcaption>
					<p>{content}</p>
				</figure>
			</div>
			<div className="d-none d-sm-block position-absolute bottom-0 end-0 w-75 h-100">
				<div
                className="w-100 h-100"
					style={{
						backgroundColor: "#eeeeee0f",
					}}>
				</div>
			</div>
		</div>
	);
}

export default CoffeeProduct;

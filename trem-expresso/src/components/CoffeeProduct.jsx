function CoffeeProduct({ name, desc, content, img }) {
	return (
		<div className="coffee-product">
			<div className="d-none d-sm-flex position-absolute bottom-0 end-0 w-75 h-100 justify-end">
				<img src={img} alt={name} className="img-fluid rounded-start h-100" />
			</div>
			<div className="coffee-figure-info zindex-modal">
				<figure>
					<h4>{name}</h4>
					<figcaption className="blockquote-footer">
						{desc}
					</figcaption>
					<p>{content}</p>
				</figure>
			</div>
		</div>
	);
}

export default CoffeeProduct;

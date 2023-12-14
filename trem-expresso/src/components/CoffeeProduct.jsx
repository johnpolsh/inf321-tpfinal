import { Link } from "react-router-dom";

function CoffeeProduct({ name, desc, content, img }) {
	return (
		
		<div className="coffee-product">
			<div className="d-none d-sm-flex position-absolute bottom-0 end-0 w-75 h-100  align-items-end flex-column">
				<img src={img} alt={name} className="img-fluid rounded-start h-100" />
			</div>
			<Link to="/shop" style={{ textDecoration: "none" }}>
			<div className="coffee-figure-info zindex-modal w-75" style={{backgroundColor: "#33333333"}}>
				<figure>
					<h4>{name}</h4>
					<figcaption className="blockquote-footer">
						{desc}
					</figcaption>
					<p>{content}</p>
				</figure>
			</div>
			</Link>
		</div>
	);
}

export default CoffeeProduct;

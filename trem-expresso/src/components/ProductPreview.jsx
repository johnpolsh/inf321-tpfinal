function ProductPreview({ name, desc, price, img }) {
	return (
	    <div className="card w-25">
			<img src={img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
		    </div>
		</div>
	);
}

export default ProductPreview;

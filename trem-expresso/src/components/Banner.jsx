function Banner({ images }) {
	return (
		<div id="banner-liquour" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#banner-liquour"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"></button>
				{images.map((_, i) => {
					if (i > 0) {
						return (
							<button
								key={i}
								type="button"
								data-bs-target="#banner-liquour"
								data-bs-slide-to={i}
								aria-label={"Slide " + (i + 1)}></button>
						);
					}
				})}
			</div>
			<div className="carousel-inner" style={{height: "480px"}}>
				<div className="carousel-item active">
					<img src={images[0]} className="d-block w-100" />
				</div>
				{images.map((img, i) => {
					if (i > 0) {
						return (
							<div key={i} className="carousel-item">
								<img src={img} className="d-block w-100" />
							</div>
						);
					}
				})}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#banner-liquour"
				data-bs-slide="prev">
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#banner-liquour"
				data-bs-slide="next">
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}

export default Banner;

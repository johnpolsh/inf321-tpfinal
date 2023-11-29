function Banner({ images }) {
	return (
		<div id="banner-liquour" className="carousel slide" data-bs-ride="carousel" style={{background: "linear-gradient(0deg, rgba(15, 15, 14, 1) 0%, rgba(43, 18, 0, 1) 40%)"}}>
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
			<div className="carousel-inner" style={{height: "75vh"}}>
				<div className="carousel-item active">
					<img src={images[0]} className="d-block max-w-100 vh-100 mx-auto" />
				</div>
				{images.map((img, i) => {
					if (i > 0) {
						return (
							<div key={i} className="carousel-item">
								<img src={img} className="d-block max-w-100 vh-100 mx-auto" />
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

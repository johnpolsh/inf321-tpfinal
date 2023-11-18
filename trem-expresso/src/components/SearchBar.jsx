import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function SearchBar() {
	return (
		<div
			className="d-flex justify-content-end align-items-center"
			style={{ marginRight: "55px" }}
		>
			<div
				className="input-group"
				style={{ maxWidth: "350px" }}
			>
				<div className="input-group-append dropdown ">
					<button
						className="text-dark btn btn-secondary dropdown-toggle border-0 rounded-0"
						type="button"
						id="categoryDropdown"
						data-toggle="dropdown"
						style={{ backgroundColor: "#9e642e" }}
					>
						Filtros
					</button>
				</div>

				<input
					type="text"
					className="form-control"
					placeholder="Pesquisar"
					aria-label="Pesquisar"
					aria-describedby="basic-addon2"
					style={{ borderColor: "#9e642e" }}
				/>
				<div
					className="input-group-append fas fa-search"
					style={{ backgroundColor: "#9e642e" }}
				>
					<Link
						to="#"
						className="btn btn-outline-secondary border-0 rounded-0"
						type="button"
					>
						<FontAwesomeIcon style={{ color: "black" }} icon={faSearch} />
					</Link>
				</div>
			</div>
		</div>
	);
}
export default SearchBar;

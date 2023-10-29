import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import TremExpressoImg from "../assets/TremExpresso.jpg";

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid d-flex align-items-center justify-content-between">
				<div>
					<Link className="navbar-brand" to="/">
						<img
							src={TremExpressoImg}
							alt="Trem Expresso imagem"
							style={{ width: "48px", height: "auto" }}
						/>
						<span className="fs-5" style={{ margin: "0 10px" }}>
							Trem Expresso cafés
						</span>
					</Link>
				</div>
				<form className="d-flex w-50" role="search">
					<input
						className="form-control"
						type="text"
						placeholder="Search"
					/>
					<button
						className="btn btn-light"
						type="submit"
						style={{ margin: "0 10px" }}>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</form>
                <div>
                    Login
                </div>
			</div>
		</nav>
	);
}

export default NavBar;

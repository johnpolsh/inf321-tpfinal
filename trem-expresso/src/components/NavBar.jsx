import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import TremExpressoImg from "../assets/TremExpresso.jpg";

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid d-flex justify-content-between">
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
				<form className="d-flex" role="search">
					<div className="input-group my-2">
						<input
							className="form-control"
							type="search"
							placeholder="Pesquisar"
							style={{ width: "320px" }}
						/>
						<button
							id="searchBtn"
							className="input-group-text bg-transparent"
							type="button"
						>
							<FontAwesomeIcon icon={faSearch} />
						</button>
					</div>
				</form>
				<div className="nav-item dropdown me-5">
					<a
						className="nav-link dropdown-toggle"
						href="#"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						aria-haspopup="true"
					>
						<FontAwesomeIcon icon={faUser} />
					</a>
					<div className="dropdown-menu dropdown-menu-start">
						<form
							className="form-horizontal"
							method="post"
							acceptCharset="utf-8"
						>
							<input
								className="form-control login"
								type="text"
								name="username"
								placeholder="Username.."
							/>
						</form>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;

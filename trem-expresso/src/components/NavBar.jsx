import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import TremExpressoImg from "../assets/TremExpresso.jpg";

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid d-flex justify-content-between">
				<Link className="navbar-brand" to="/">
					{/* <img
						src={TremExpressoImg}
						alt="Trem Expresso imagem"
						style={{ width: "48px", height: "auto" }}
					/> */}
                    <h3>Trem Expresso Cafés</h3>
				</Link>
                <Link className="text-decoration-none nav-item" to="/shop">
					Nossa loja
				</Link>
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

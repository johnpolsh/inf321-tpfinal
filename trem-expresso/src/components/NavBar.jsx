import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< Updated upstream
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="mx-auto text-center">
        <div className="d-flex align-items-center">
          <a className="d-flex align-items-center">
            <img
              className="align-self-start"
              src={TremExpressoImg}
              alt="Trem Expresso imagem"
              style={{ width: "100px", height: "auto", margin: "0 10px" }}
            />
          </a>
          {/* <span className="fs-1" style={{ margin: "0 10px" }}>
              Trem Expresso Cafés
            </span> */}
          <form role="search" className="d-flex">
            <input type="text" placeholder="Search" className="form-control" />

            <button
              className="btn btn-light"
              type="submit"
              style={{ margin: "0 10px" }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="btn btn-light">
              <FontAwesomeIcon icon={faUser} />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
=======
import { Link } from "react-router-dom";
import TremExpressoImg from "../assets/TremExpresso.jpg";
import "../assets/scss/NavBar.scss";

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
>>>>>>> Stashed changes
}

export default NavBar;

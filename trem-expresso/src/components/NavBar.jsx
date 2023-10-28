import React from "react";
import TremExpressoImg from "../assets/TremExpresso.jpg";
import "../assets/scss/NavBar.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="d-flex align-items-center">
        <a className="d-flex align-items-center">
          <img
            src={TremExpressoImg}
            alt="Trem Expresso imagem"
            style={{ width: "100px", height: "auto" }}
          />
        </a>
        <span className="fs-1" style={{ margin: "0 10px" }}>
          Trem Expresso cafés
        </span>
        <form role="search" className="d-flex">
          <input type="text" placeholder="Search" className="form-control" />

          <button
            className="btn btn-light"
            type="submit"
            style={{ margin: "0 10px" }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;

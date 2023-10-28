
import React from "react";
import TremExpressoImg from "../../public/TremExpresso.jpg";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div>
                <a>
                    <img src={TremExpressoImg} alt="Trem Expresso imagem" style={{ width: '128px', height: 'auto' }} />
                    <span>Trem Expresso cafés</span>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;

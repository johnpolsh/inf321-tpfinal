import { Link } from "react-router-dom";
import TremExpressoimg from "../assets/TremExpresso.jpg";

function Login() {
	return (
        <div className="loginpage">
        <div className="container d-flex align-items-center justify-content-center vh-100 ">
        <div className="d-flex">
          <div className="col-md-6">
            <img src={TremExpressoimg} alt="Trem Expresso" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-6 p-4 bg-light rounded-end">
            {/* Conteúdo da metade direita da caixa */}
            <h1 className="logintext">Login</h1>
            <p>Outros elementos podem ser adicionados aqui.</p>
          </div>
        </div>
      </div>
      </div>
	);
}

export default Login;

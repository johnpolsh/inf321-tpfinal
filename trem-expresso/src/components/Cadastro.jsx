import { Link } from "react-router-dom";
import TremExpressoimg from "../assets/TremExpresso.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
	const [users, setUsers] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		fetch("http://localhost:3000/users")
			.then((response) => response.json())
			.then((data) => {
				console.log("received data:", data);
				setUsers(data);
			})
			.catch((error) => {
				console.error(`error: ${error}`);
			});
	}, []);

	const handleCadastro = async () => {
		const email = document.getElementById("inputEmail").value;
		const password = document.getElementById("inputPassword").value;
		const street = document.getElementById("inputStreet").value;
		const cep = document.getElementById("inputCEP").value;
		const complemento = document.getElementById("inputComplemento").value;
		const celular = document.getElementById("inputCelular").value;
		const cpf = document.getElementById("inputCPF").value;

		const newUser = {
			email,
			password,
			street,
			cep,
			complemento,
			celular,
			cpf,
		};

		navigate("/", { replace: true });
	};

	return (
		<div className="loginpage">
			<div className="container d-flex align-items-center justify-content-center vh-100">
				<div className="d-flex">
					<div className="col-md-6">
						<img
							src={TremExpressoimg}
							alt="Trem Expresso"
							className="img-fluid rounded-start"
							style={{ height: "100%", width: "100%", objectFit: "cover" }}
						/>
					</div>
					<div className="col-md-6 p-4 bg-light rounded-end">
						<h1
							className="logintext mb-2 text-center"
							style={{ fontSize: "2rem" }}
						>
							CADASTRE-SE
						</h1>

						<form>
							<div className="mb-2 mt-3">
								<label
									htmlFor="inputEmail"
									className="form-label"
									style={{ backgroundColor: "white" }}
								>
									Email
								</label>
								<input
									type="email"
									className="form-control"
									id="inputEmail"
									style={{ backgroundColor: "white" }}
								/>
							</div>
							<div className="mb-2">
								<label htmlFor="inputPassword" className="form-label">
									Senha
								</label>
								<input
									type="password"
									className="form-control"
									id="inputPassword"
									style={{ backgroundColor: "white" }}
								/>
							</div>
							<div className="mb-2">
								<label htmlFor="inputStreet" className="form-label">
									Rua e Número
								</label>
								<input
									type="text"
									className="form-control"
									id="inputStreet"
									style={{ backgroundColor: "white" }}
								/>
							</div>

							<div className="mb-2 row">
								<div className="col">
									<label htmlFor="inputCEP" className="form-label">
										CEP
									</label>
									<input
										type="text"
										className="form-control"
										id="inputCEP"
										style={{ backgroundColor: "white" }}
										pattern="[0-9]*"
									/>
								</div>
								<div className="col">
									<label htmlFor="inputNumber" className="form-label">
										Complemento
									</label>
									<input
										type="text"
										className="form-control"
										id="inputComplemento"
										style={{ backgroundColor: "white" }}
									/>
								</div>
							</div>

							<div className="mb-2 row">
								<div className="col">
									<label htmlFor="inputNumber" className="form-label">
										Celular
									</label>
									<input
										type="text"
										className="form-control"
										id="inputCelular"
										style={{ backgroundColor: "white" }}
										pattern="[0-9]*"
									/>
								</div>
								<div className="col">
									<label htmlFor="inputCEP" className="form-label">
										CPF
									</label>
									<input
										type="text"
										className="form-control"
										id="inputCPF"
										style={{ backgroundColor: "white" }}
										pattern="[0-9]*"
									/>
								</div>
							</div>

							<button
								type="submit"
								className="mt-3 mb-3 btn btn-primary w-100 btn-lg "
								style={{ backgroundColor: "#89592e", borderColor: "#89592e" }}
								onClick={handleCadastro}
							>
								Cadastrar
							</button>

							<div className=" text-center">
								<p className="mb-0" style={{ color: "#000" }}>
									Possui uma conta?{" "}
									<Link to="/login" style={{ textDecorationColor: "#a36f3e" }}>
										<span style={{ color: "#a36f3e" }}>Faça login</span>
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cadastro;

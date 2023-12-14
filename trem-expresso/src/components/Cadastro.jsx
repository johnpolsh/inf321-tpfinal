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

						<form action="http://localhost:3000/addUser" method="POST">
							<div className="mb-2 mt-3">
								<label
									htmlFor="email"
									className="form-label"
									style={{ backgroundColor: "white" }}
								>
									Email
								</label>
								<input
									type="email"
									className="form-control"
									id="inputEmail"
                                    name="email"
									style={{ backgroundColor: "white" }}
								/>
							</div>
							<div className="mb-2">
								<label htmlFor="password" className="form-label">
									Senha
								</label>
								<input
									type="password"
									className="form-control"
									id="inputPassword"
									name="password"
									style={{ backgroundColor: "white" }}
								/>
							</div>
							<div className="mb-2">
								<label htmlFor="street" className="form-label">
									Rua e Número
								</label>
								<input
									type="text"
									className="form-control"
									id="inputStreet"
									name="street"
									style={{ backgroundColor: "white" }}
								/>
							</div>

							<div className="mb-2 row">
								<div className="col">
									<label htmlFor="cep" className="form-label">
										CEP
									</label>
									<input
										type="text"
										className="form-control"
										id="inputCEP"
										name="cep"
										style={{ backgroundColor: "white" }}
										pattern="[0-9]*"
									/>
								</div>
								<div className="col">
									<label htmlFor="complemento" className="form-label">
										Complemento
									</label>
									<input
										type="text"
										className="form-control"
										id="inputComplemento"
										name="complemento"
										style={{ backgroundColor: "white" }}
									/>
								</div>
							</div>

							<div className="mb-2 row">
								<div className="col">
									<label htmlFor="number" className="form-label">
										Celular
									</label>
									<input
										type="text"
										className="form-control"
										id="inputNumber"
										name="number"
										style={{ backgroundColor: "white" }}
										pattern="[0-9]*"
									/>
								</div>
								<div className="col">
									<label htmlFor="cpf" className="form-label">
										CPF
									</label>
									<input
										type="text"
										className="form-control"
										id="inputCPF"
										name="cpf"
										style={{ backgroundColor: "white" }}
										pattern="[0-9]*"
									/>
								</div>
							</div>

							<button
								type="submit"
								className="mt-3 mb-3 btn btn-primary w-100 btn-lg "
								style={{ backgroundColor: "#89592e", borderColor: "#89592e" }}
								// onClick={handleCadastro}
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

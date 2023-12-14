import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TremExpressoimg from "../assets/TremExpresso.jpg";
import { useEffect, useState } from "react";

function Login() {
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

	const handleLogin = async () => {
		const email = document.getElementById("inputEmail").value;
		const password = document.getElementById("inputPassword").value;
		const user = users.find((user) => user.email === email);

		if (user) {
			// Verificar se a senha corresponde
			if (user.password === password) {
				console.log("Login bem-sucedido!");
				navigate("/", { replace: true });
			} else {
				alert("Senha incorreta");
			}
		} else {
			alert("Usuário não encontrado");
		}
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
							className="logintext mb-4 mt-5 text-center"
							style={{ fontSize: "2rem" }}
						>
							LOGIN
						</h1>

						<form>
							<div className="mb-4 mt-3">
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
							<div className="mb-4">
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

							<button
								type="submit"
								className="mt-3 mb-3 btn btn-primary w-100 btn-lg "
								style={{ backgroundColor: "#89592e", borderColor: "#89592e" }}
								onClick={handleLogin}
							>
								Entrar
							</button>

							<div className="d-flex mb-5">
								<div>
									<input
										type="checkbox"
										className="form-check-input text-start "
										id="keepLoggedIn"
										style={{ marginTop: "6px" }}
									/>
									<label
										className="form-check-label ms-2"
										htmlFor="keepLoggedIn"
									>
										Manter logado
									</label>
								</div>
								<div className="ms-auto">
									<a href="#!">Esqueceu a Senha?</a>
								</div>
							</div>
							<div className="mb-3 text-center">
								<p className="mb-0" style={{ color: "#000" }}>
									Não tem uma conta?{" "}
									<Link
										to="/cadastro"
										style={{ textDecorationColor: "#a36f3e" }}
									>
										<span style={{ color: "#a36f3e" }}>Cadastre-se</span>
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

export default Login;

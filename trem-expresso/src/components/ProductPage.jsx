import { Link } from "react-router-dom";
import TremExpressoimg from "../assets/TremExpresso.jpg";

function ProductPage() {
    return(
        <div className="productpage">
			<div className="container d-flex align-items-center justify-content-center vh-100">
				<div className="d-flex">
					<div className="col-md-6">
						<img
							src={TremExpressoimg}
							alt="Trem Expresso"
							className="img-fluid rounded-start"
						/>
					</div>
					<div className="col-md-6 p-4 bg-light rounded-end">
						<h1 className="logintext mb-4 mt-5 text-center">LOGIN</h1>

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

                            
						</form>
					</div>
				</div>
			</div>
		</div>
    );

}


export default ProductPage;

import {
	faInstagram,
	faGithub,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import TremExpressoImg from "../assets/TremExpresso.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
	return (
		<footer className="py-4 bg-body-tertiary">
			<div className="container px-5 row">
				<div className="col-lg-5">
					<Link className="text-decoration-none" to="/">
						{/* <img
							src={TremExpressoImg}
							alt="Trem Expresso imagem"
							style={{ width: "48px", height: "auto" }}
						/> */}
						<h4>Trem Expresso Cafés</h4>
					</Link>
					<ul className="list-unstyled ps-4">
						<li>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Created by{" "}
								<strong>H3nriqu3 & Johnpolsh</strong>
							</p>
						</li>
					</ul>
				</div>
				<div className="col-6 col-lg-2 offset-lg-1">
					<h5>Links</h5>
					<ul className="list-unstyled ps-4">
						<li className="my-1">
							<Link className="text-decoration-none small" to="/">
								Home
							</Link>
						</li>
						<li className="my-1">
							<Link className="text-decoration-none small" to="/shop">
								Produtos
							</Link>
						</li>
					</ul>
				</div>
				<div className="col-6 col-lg-3">
					<h5>Contatos</h5>
					<ul className="list-inline ps-4">
						<li className="list-inline-item px-2">
							<a
								href="https://github.com/johnpolsh/inf321-tpfinal"
								rel="noreferrer"
								target="_blank">
								<FontAwesomeIcon
									className="align-items-center"
									icon={faGithub}
									style={{ width: "32px", height: "auto", transform: "translateY(2px)" }}
								/>
							</a>
						</li>
						<li className="list-inline-item px-2">
							<a
								href="https://instagram.com"
								rel="noreferrer"
								target="_blank">
								<FontAwesomeIcon
									className="align-items-center"
									icon={faInstagram}
									style={{ width: "32px", height: "auto", transform: "translateY(3px)" }}
								/>
							</a>
						</li>
						<li className="list-inline-item px-2">
							<a
								href="https://youtube.com"
								rel="noreferrer"
								target="_blank">
								<FontAwesomeIcon
									className="align-items-center"
									icon={faYoutube}
									style={{ width: "32px", height: "auto", transform: "translateY(-1px)" }}
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="container">
				<p className="small text-center">
					Copyright &copy; 2023 - Trem Expresso Cafés
				</p>
			</div>
		</footer>
	);
}

export default Footer;

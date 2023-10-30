import { faInstagram, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import TremExpressoImg from "../assets/TremExpresso.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
	return (
		<footer className="py-4 bg-body-tertiary">
			<div className="container px-4 row">
				<div className="col-lg-3">
					<Link to="/">
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
				<div className="col-6 col-lg-2 offset-lg-1">
					<h5>Links</h5>
					<ul className="list">
						<li className="my-1">
							<Link to="/">Home</Link>
						</li>
						<li className="my-1">
							<Link to="/buy">Produtos</Link>
						</li>
					</ul>
				</div>
				<div className="col-6 col-lg-2">
					<h5>Contatos</h5>
					<ul className="list">
						<li className="my-1">
							<a
								href="https://github.com/johnpolsh/inf321-tpfinal"
								rel="noreferrer"
								target="_blank">
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</li>
						<li className="my-1">
							<a
								href="https://instagram.com"
								rel="noreferrer"
								target="_blank">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
						<li className="my-1">
							<a
								href="https://youtube.com"
								rel="noreferrer"
								target="_blank">
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="container">
				<p className="text-center">
					Copyright &copy; 2023 - Trem Expresso Cafés
				</p>
			</div>
		</footer>
	);
}

export default Footer;

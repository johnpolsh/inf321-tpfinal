import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rating({ stars }) {
	return (
		<span className="d-flex">
			<ul className="list-inline small" style={{ width: "120px" }}>
				{Array.from({ length: stars }).map((i) => {
					return (
						<li className="list-inline-item active m-0" key={i}>
							<FontAwesomeIcon icon={faStar} />
						</li>
					);
				})}
			</ul>
			<p>{stars} / 5</p>
		</span>
	);
}

export default Rating;

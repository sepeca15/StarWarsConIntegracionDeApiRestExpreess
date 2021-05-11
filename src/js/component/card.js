import React from "react";
import PropTypes from "prop-types";
import "../../styles/card.scss";
import { Link } from "react-router-dom";

const Card = props => {
	return (
		<div>
			<div className="card cardscroll m-2">
				<img src="https://picsum.photos/200/200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">Sed pharetra justo tempor, congue purus quis, laoreet urna.</p>
					<Link to={"/single/" + props.index}>
						<span>Link to: {props.name}</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	index: PropTypes.number
};

export default Card;

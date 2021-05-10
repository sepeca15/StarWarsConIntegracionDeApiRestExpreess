import React from "react";
import PropTypes from "prop-types";
import "../../styles/card.scss";

const Card = props => {
	return (
		<div>
			<div className="card cardscroll m-2">
				<img src={props.url} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.desc}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	desc: PropTypes.string
};

export default Card;

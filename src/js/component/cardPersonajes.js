import React from "react";
import PropTypes from "prop-types";
import "../../styles/card.scss";
import { Link } from "react-router-dom";

const CardPersonajes = props => {
	const images = {
		"C-3PO": "http://2.bp.blogspot.com/-jP2rNAhUPSI/VNrIfnz6hMI/AAAAAAAASMA/iV_euzBDuVM/s1600/C3PO-16.JPG",
		"Luke Skywalker": "https://www.prensalibre.com/wp-content/uploads/2019/11/luke-skywalker-644x362.jpg",
		"R2-D2": "https://cdn.robgreer.com/aa6429a9-d544-4754-8263-4285c19d9c46/t/1024/26c8n5h6/mike-senna-r2d2.jpg",
		"Darth Vader": "https://i.pinimg.com/originals/1a/bc/b5/1abcb54c7291437e92e659884e30a1f1.jpg",
		"Leia Organa": "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
		"Owen Lars": "https://static.wikia.nocookie.net/starwars/images/9/91/OwenLarsHS-SWE.jpg",
		"Beru Whitesun lars": "https://theartmad.com/wp-content/uploads/2015/06/Beru-Lars-2.jpg",
		"R5-D4":
			"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F01%2Fthe-mandalorian-2000.jpg&q=85",
		"Biggs Darklighter":
			"https://comicvine.gamespot.com/a/uploads/scale_small/14/145984/4902632-8136336329-biggs.jpg",
		"Obi-Wan Kenobi":
			"https://cdn.vox-cdn.com/thumbor/KnYjrcxAozD5Q8pmr3QAXsJCwag=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6434955/obi-wan.0.jpg"
	};
	return (
		<div>
			<div className="card cardscroll m-2">
				<img src={images[props.name]} style={{ width: 286, height: 286 }} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">Sed pharetra justo tempor, congue purus quis, laoreet urna.</p>
					<Link to={"/singlepersonajes/" + props.index}>
						<span>Link to: {props.name}</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

CardPersonajes.propTypes = {
	name: PropTypes.string,
	index: PropTypes.number
};

export default CardPersonajes;

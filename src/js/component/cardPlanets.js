import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/card.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanetas = props => {
	const { store, actions } = useContext(Context);
	const images = {
		Tatooine:
			"https://media.cntraveler.com/photos/5727696bb161ad8b31235293/16:9/w_2560%2Cc_limit/GettyImages-143687829-tunisia.jpg",
		Alderaan:
			"https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C780",
		"Yavin IV": "https://i.redd.it/ig9ectnjbgsz.jpg",
		Hoth:
			"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/08/star-wars-empire-strikes-back-hoth-ion-canon-echo-base-Edited.jpg",
		Dagobah: "https://lumiere-a.akamaihd.net/v1/images/dagobah_1ab566e6.jpeg?region=38%2C0%2C598%2C299",
		Bespin:
			"https://i0.wp.com/thegamefanatics.com/wp-content/uploads/2016/06/star-wars-battlefront-bespin-dlc-update-needs-content-that-should-have-been-there-at-la-943519.jpg?fit=1936%2C1090&ssl=1",
		Endor: "https://miro.medium.com/max/2560/1*iqaur5uhY90F2rLPIv-lvQ.jpeg",
		Naboo:
			"https://media.contentapi.ea.com/content/dam/walrus/images/2018/11/mapvista-theed-grid.jpg.adapt.crop191x100.628p.jpg",
		Coruscant: "https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C96%2C1536%2C768",
		Kamino:
			"https://lumiere-a.akamaihd.net/v1/images/databank_kamino_01_169_f9027822.jpeg?region=0%2C49%2C1560%2C780"
	};
	const [corazon, setCorazon] = useState(null);

	useEffect(() => {
		var resultado = store.favoritos.find((elemento, index) => {
			return elemento == props.name;
		});

		setCorazon(resultado);
	}, [store.favoritos]);

	const hacerClick = () => {
		if (corazon) {
			actions.eliminarFavorito(props.name);
		} else {
			actions.agregarFavoritos(props.name);
		}
	};

	return (
		<div>
			<div className="card cardscroll m-2">
				<img src={images[props.name]} style={{ width: 286, height: 286 }} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">Uno dentro de tantos planetas del universo de Star Wars</p>
					<div className="d-flex justify-content-between">
						<Link
							to={"/singleplanetas/" + props.index}
							className="btn btn-outline-secondary text-secondary">
							Leer mas..
						</Link>
						<i
							onClick={() => hacerClick()}
							className="far fa-heart btn btn-outline-secondary"
							style={{
								fontWeight: corazon ? "bold" : "",
								color: corazon ? "rgb(185, 19, 19)" : "Black"
							}}
						/>
					</div>
					<div />
				</div>
			</div>
		</div>
	);
};

CardPlanetas.propTypes = {
	name: PropTypes.string,
	index: PropTypes.number
};

export default CardPlanetas;

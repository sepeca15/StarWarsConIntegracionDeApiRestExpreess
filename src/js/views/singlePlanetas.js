import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.cargarDetallesPlanetas(params.theid);
	}, []);
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
	return (
		<div className="container">
			<div>
				<div className="mb-3">
					<div className="row no-gutters">
						<div className="col-md-4">
							<img src={images[store.detalles.name]} style={{ width: 400, height: 400 }} />
						</div>
						<div className="col-md-8 card">
							<div className="card-body text-center">
								<h5 className="card-title">{store.detalles.name}</h5>
								<p className="card-text">
									Star Wars is, in short, a single, unified, vast, familiar, astonishingly
									well-executed story that emerged from the mind of one filmmaker. It is now worth
									billions of dollars, drives entire industries and subindustries, and has become a
									seemingly permanent facet of global culture. It’s profoundly silly, yet also
									strangely profound—a grand, nostalgic romance full of wisdom and love that three
									generations equate inextricably with childhood, adventure, and the definition of
									good and evil. The story, in broad strokes, is this: Two noble knights from an order
									called the Jedi discover a boy destined to be a powerful wielder of the mystical
									energy that connects the universe, called the Force. One of them dies protecting him
									from the Jedi’s evil counterparts, the Sith, but the other—Obi-Wan Kenobi (along
									with his master, a wise gnome named Yoda)—tries to train the boy, Anakin Skywalker,
									to fight on the side of good.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row d-flex justify-content-around border-top border-danger">
					<div className="text-danger mt-1 text-center">
						<h1>Name</h1>
						<h2>{store.detalles.name}</h2>
					</div>
					<div className="text-danger mt-1 text-center">
						<h1>Diameter</h1>
						<h2>{store.detalles.diameter}</h2>
					</div>
					<div className="text-danger mt-1 text-center">
						<h1>Population</h1>
						<h2>{store.detalles.population}</h2>
					</div>
					<div className="text-danger mt-1 text-center">
						<h1>Climate</h1>
						<h2>{store.detalles.climate}</h2>
					</div>
					<div className="text-danger mt-1 text-center">
						<h1>Terrain</h1>
						<h2>{store.detalles.terrain}</h2>
					</div>
				</div>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SinglePlanetas.propTypes = {
	match: PropTypes.object
};

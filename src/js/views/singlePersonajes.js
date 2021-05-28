import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePersonajes = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.cargarDetallesPersonajes(params.theid);
	}, []);
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
	//{`https://starwars-visualguide.com/assets/img/characters/${props.index + 1}.jpg`}
	//{images[store.detalles.name]}
	const uid = parseInt(params.theid, 10) + 1;
	return (
		<div className="container">
			<div>
				<div className="mb-3">
					<div className="row no-gutters">
						<div className="col-md-4">
							<img
								src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
								style={{ width: 400, height: 400 }}
							/>
						</div>
						<div className="col-md-8 card">
							<div className="card-body text-center">
								<h5 className="card-title">{store.personajes[params.theid].name}</h5>
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
						<h2>{store.personajes[params.theid].nombre}</h2>
					</div>
					<div className="text-danger mt-1 text-center">
						<h1>Birth Year</h1>
						<h2>{store.personajes[params.theid].fecha_nacimiento}</h2>
					</div>
					<div className="text-danger mt-1 text-center">
						<h1>Gender</h1>
						<h2>{store.personajes[params.theid].genero}</h2>
					</div>
					<div className="text-danger mt-1 text-center">
						<h1>Height</h1>
						<h2>{store.personajes[params.theid].altura}</h2>
					</div>
					<div className="text-danger mt-1 text-center">
						<h1>Skin Color</h1>
						<h2>{store.personajes[params.theid].color_de_ojo}</h2>
					</div>
				</div>
			</div>
			<Link to="/">
				<span className="btn btn-outline-secondary" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SinglePersonajes.propTypes = {
	match: PropTypes.object
};

import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import CardPersonajes from "../component/cardPersonajes";
import { Context } from "../store/appContext";
import CardPlanetas from "../component/cardPlanets";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<h1 className="m-3 text-danger">Personajes</h1>
			<div className="scrolling-wrapper-flexbox contenedor d-flex">
				{store.personajes.map((personajes, index) => {
					return (
						<div key={index}>
							<CardPersonajes name={personajes.nombre} index={index} />
						</div>
					);
				})}
			</div>
			<h1 className="m-3 text-danger">Planetas</h1>
			<div className="scrolling-wrapper-flexbox contenedor overflow-x">
				{store.planetas.map((planetas, index) => {
					return (
						<div key={index}>
							<CardPlanetas name={planetas.nombre} index={index} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

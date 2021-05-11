import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import Card from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1 className="m-3 text-danger">Personajes</h1>
			<div className="scrolling-wrapper-flexbox">
				{store.personajes.map((personajes, index) => {
					return (
						<div key={index}>
							<Card name={personajes.name} index={index} />
						</div>
					);
				})}
			</div>
			<h1 className="m-3 text-danger">Planetas</h1>
			<div className="scrolling-wrapper-flexbox">
				{store.planetas.map((planetas, index) => {
					return (
						<div key={index} className="list-group-item d-flex justify-content-between">
							<Card name={planetas.name} index={index} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

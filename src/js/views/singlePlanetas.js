import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanetas = props => {
	const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
		actions.cargarDetallesPlanetas(props.url);
    }, []);
    const url = store.planetas[params.theid].url;
    
	return (
		<div className="container">
			<div>
			<div className="mb-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src="https://picsum.photos/300/300" alt="..." />
					</div>
					<div className="col-md-8 card">
						<div className="card-body text-center">
							<h5 className="card-title">asd</h5>
							<p className="card-text">asd</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row d-flex justify-content-around border-top border-danger">
				<div className="text-danger mt-1 text-center">
					<h1>Name</h1>
					<h2>Name</h2>
				</div>
				<div className="text-danger mt-1 text-center">
					<h1>Birth Year</h1>
					<h2>Name</h2>
				</div>
				<div className="text-danger mt-1 text-center">
					<h1>Gender</h1>
					<h2>Name</h2>
				</div>
				<div className="text-danger mt-1 text-center">
					<h1>Height</h1>
					<h2>Name</h2>
				</div>
				<div className="text-danger mt-1 text-center">
					<h1>Skin Color</h1>
					<h2>Name</h2>
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

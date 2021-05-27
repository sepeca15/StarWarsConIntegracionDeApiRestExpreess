import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Registro = () => {
	const { store, actions } = useContext(Context);
	var email = useRef();
	var pass = useRef();
	var fname = useRef();
	var lname = useRef();
	var uname = useRef();

	const registro = e => {
		e.preventDefault();
		actions.registro(
			email.current.value,
			pass.current.value,
			fname.current.value,
			lname.current.value,
			uname.current.value
		);
	};
	return (
		<div className="container">
			<form onSubmit={registro}>
				<div className="form-row mb-5">
					<div className="form-group col-md-6">
						<label className="text-light" htmlFor="inputEmail">
							Email
						</label>
						<div className="input-group">
							<div className="input-group-prepend">
								<button
									className="btn"
									type="button"
									id="button-addon1"
									style={{ backgroundColor: "#8A8A8A" }}>
									| | | | | | | | |
								</button>
							</div>
							<input
								type="email"
								className="form-control shadowRed"
								id="inputEmail"
								placeholder="pepito@email.com"
								ref={email}
							/>
						</div>
					</div>
					<div className="form-group col-md-6">
						<label className="text-light" htmlFor="inputPassword">
							Password
						</label>
						<div className="input-group">
							<div className="input-group-prepend">
								<button
									className="btn"
									type="button"
									id="button-addon1"
									style={{ backgroundColor: "#8A8A8A" }}>
									| | | | | | | | |
								</button>
							</div>
							<input
								type="password"
								className="form-control shadowBlue"
								id="inputPassword"
								placeholder="********"
								ref={pass}
							/>
						</div>
					</div>
				</div>
				<div className="form-row mb-5">
					<div className="form-group col-md-4">
						<label className="text-light" htmlFor="inputAddress">
							First Name
						</label>
						<div className="input-group">
							<div className="input-group-prepend">
								<button
									className="btn"
									type="button"
									id="button-addon1"
									style={{ backgroundColor: "#8A8A8A" }}>
									| | | | | | | | |
								</button>
							</div>
							<input
								type="text"
								className="form-control shadowBlue"
								id="inputAddress"
								placeholder="Pepito"
								ref={fname}
							/>
						</div>
					</div>
					<div className="form-group col-md-4">
						<label className="text-light" htmlFor="inputAddress2">
							Last Name
						</label>
						<div className="input-group">
							<div className="input-group-prepend">
								<button
									className="btn"
									type="button"
									id="button-addon1"
									style={{ backgroundColor: "#8A8A8A" }}>
									| | | | | | | | |
								</button>
							</div>
							<input
								type="text"
								className="form-control shadowGreen"
								id="inputAddress2"
								placeholder="El pistolero"
								ref={lname}
							/>
						</div>
					</div>
					<div className="form-group col-md-4">
						<label className="text-light" htmlFor="inputCity">
							User Name
						</label>
						<div className="input-group">
							<div className="input-group-prepend">
								<button
									className="btn"
									type="button"
									id="button-addon1"
									style={{ backgroundColor: "#8A8A8A" }}>
									| | | | | | | | |
								</button>
							</div>
							<input
								type="text"
								className="form-control shadowRed"
								id="inputCity"
								placeholder="Pepistola"
								ref={uname}
							/>
						</div>
					</div>
				</div>
				<button type="submit" className="btn btn-primary mb-4">
					Sign up
				</button>
			</form>
			<Link to="/" className="btn btn-outline-secondary text-secondary bg-light">
				Back
			</Link>
		</div>
	);
};

export default Registro;

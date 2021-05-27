import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Login = () => {
	const { store, actions } = useContext(Context);
	var email = useRef();
	var pass = useRef();
	const login = e => {
		e.preventDefault();
		actions.login(email.current.value, pass.current.value);
	};
	return (
		<div className="container">
			<form onSubmit={login}>
				<div className="form-group mb-5">
					<label className="text-light" htmlFor="InputEmail">
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
							id="InputEmail"
							aria-describedby="emailHelp"
							placeholder="pepito@email.com"
							ref={email}
						/>
					</div>
				</div>
				<div className="form-group mb-5">
					<label className="text-light" htmlFor="InputPassword">
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
							id="InputPassword"
							placeholder="********"
							ref={pass}
						/>
					</div>
				</div>
				<button type="submit" className="btn btn-primary mb-4">
					Sign in
				</button>
			</form>
			<Link to="/" className="btn btn-outline-secondary text-secondary bg-light">
				Back
			</Link>
		</div>
	);
};

export default Login;

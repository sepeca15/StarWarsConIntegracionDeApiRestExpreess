import React from "react";
import { Link } from "react-router-dom";
import StarWars from "../../img/star-wars-logo.png";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-light bg-light mb-3">
				<img src={StarWars} width="60" height="40" alt="" title="Star Wars Logo" />
				<div className="ml-auto">
					<Dropdown>
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							Favoritos
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</nav>
		</div>
	);
};

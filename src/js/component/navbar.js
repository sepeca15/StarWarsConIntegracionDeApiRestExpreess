import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StarWars from "../../img/star-wars-logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid p-0">
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="container">
					<Link to="/">
						<img src={StarWars} width="60" height="40" alt="" title="Star Wars Logo" />
					</Link>
					<div className="ml-auto">
						<Dropdown>
							<Dropdown.Toggle variant="success" id="dropdown-basic">
								Favoritos
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{store.favoritos.map((favorito, index) => {
									return (
										<Dropdown.Item key={index}>
											{favorito}
											<i
												className="ml-2 far fa-trash-alt"
												onClick={() => {
													actions.eliminarFavorito(favorito);
												}}
											/>
										</Dropdown.Item>
									);
								})}
							</Dropdown.Menu>
						</Dropdown>
						{/* <div className="dropdown">
							<button
								className="btn btn-outline-secondary text-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Favoritos
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								{store.favoritos.map((favoritos, index) => {
									return (
										<li key={index}>
											{favoritos}{" "}
											<i
												className="ml-2 far fa-trash-alt"
												onClick={() => {
													actions.eliminarFavorito(favorite);
												}}
											/>
										</li>
									);
								})}
							</ul>
						</div> */}
					</div>
				</div>
			</nav>
		</div>
	);
};

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StarWars from "../../img/star-wars-logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid p-5">
			<nav className="navbar navbar-light bg-light mb-3 fixed-top">
				<div className="container">
					<Link to="/">
						<img src={StarWars} width="80" height="60" alt="" title="Star Wars Logo" />
					</Link>
					<div className="ml-auto row">
						<Link to="/login" className="btn btn-outline-secondary text-secondary bg-light m-1">
							Sing in
						</Link>
						<Link to="/registro" className="btn btn-outline-secondary text-secondary bg-light m-1">
							Sing up
						</Link>
						<Dropdown>
							<Dropdown.Toggle className="btn btn-outline-secondary m-1" variant="" id="dropdown-basic">
								Favoritos ({store.favoritos.length}){" "}
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{store.favoritos.length == 0 ? (
									<Dropdown.Item className="d-flex justify-content-between align-items-center">
										<span>No hay favoritos</span>
									</Dropdown.Item>
								) : (
									store.favoritos.map((favorito, index) => {
										return (
											<Dropdown.Item
												className="d-flex justify-content-between align-items-center"
												key={index}>
												{favorito}

												<i
													className="ml-2 far fa-trash-alt"
													onClick={() => {
														actions.eliminarFavorito(favorito);
													}}
												/>
											</Dropdown.Item>
										);
									})
								)}
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
			</nav>
		</div>
	);
};

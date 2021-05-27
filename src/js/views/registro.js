import React from 'react'
import { Link } from "react-router-dom";

const registro = () => {
    return (
        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="pepito@email.com"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="********"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">First Name</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Pepito" />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Last Name</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="El pistolero" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">User Name</label>
                        <input type="text" className="form-control" id="inputCity" placeholder="Pepistola"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
            <Link
                to="/"
                className="btn btn-outline-secondary text-secondary bg-light">
                Back
			</Link>
        </div>
    )
}

export default registro

import React from 'react'
import { Link } from "react-router-dom";

const login = () => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            <Link
                to="/"
                className="btn btn-outline-secondary text-secondary bg-light">
                Back
			</Link>
        </div>
    )
}

export default login

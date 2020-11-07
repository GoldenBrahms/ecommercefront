import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth/index';

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return { color: '#ff9900' }
    } else {
        return { color:'white' };
    }
}

const Menu = ({ history }) => {
    return (
    <div>
        <ul className="nav nav-tabs bg-dark" >
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/")} to="/"><h1>Samemo</h1></Link>
            </li>
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/user/dashboard")} to="/user/dashboard">
                    Dashboard
                </Link>
            </li>
            )}
            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">
                    Dashboard
                </Link>
            </li>
            )}
            {!isAuthenticated() && (
                <div>
                    <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/signin")} to="/signin">Signin</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/signup")} to="/signup">Signup</Link>
            </li>
                </div>
            )}
            {isAuthenticated() && (
                <li className="nav-item">
                <span className="nav-link" onClick={() => signout(() => {
                    history.push("/signin")
                })} style={{cursor:'pointer', color:'white'}} >Signout</span>
            </li>
            )}

        </ul>
    </div>
    );
}

export default withRouter(Menu);
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

const Menu = ({ history }) => (
    <div style={{backgroundColor:'red'}}>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/signup")} to="/">Samemo</Link>
            </li>
            {!isAuthenticated() &&(
                <>
                <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/signup")} to="/signin">Signin</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/signup")} to="/signup">Signup</Link>
            </li>
            </>
            )}
            
            {isAuthenticated() && (
                <li className="nav-item">
                <span className="nav-link" onClick={() => signout(() => {history.push('/')})} style={{cursor:'pointer', color:'white'}}>Signout</span>
            </li>
            )}
        </ul>
    </div>
)

export default withRouter(Menu);
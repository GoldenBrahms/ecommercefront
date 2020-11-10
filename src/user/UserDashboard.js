import React from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';
import {Link} from 'react-router-dom';
import Header from '../core/Header'

const Dashboard = () => {

    const { user: {_id, name, email, role}} = isAuthenticated();

    const userLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/cart">My cart</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/profile/update">Update Profile</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Vos informations</h3>
                <ul className="list-group">
                    <li className="list-group-item">Nom: {name}</li>
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">{role == 1 ? "Admin" : "User" }</li>
                </ul>
            </div>
        )
    }

    const purchaseHistory = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Purchase History</h3>
                <ul className="list-group">
                    <li className="list-group-item">History</li>
                </ul>
            </div>
        )
    }
    return (
        <>
        <Header/>
        <div style={{padding:'50px'}}>
            <div className="row">
                <div className="col-3">
                    {userLinks()}
                </div>
                <div className="col-9">
                    {userInfo()}
                    {purchaseHistory()}
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;
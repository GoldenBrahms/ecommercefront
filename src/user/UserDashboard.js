import React, {useState, useEffect} from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';
import {Link} from 'react-router-dom';
import Header from '../core/Header'
import {getPurchaseHistory} from './ApiUser'

const Dashboard = () => {

    const [ history, setHistory] = useState([])
    const { user: {_id, name, prename, email, role, adresse}} = isAuthenticated();

    const { token } = isAuthenticated();

    const init = (userId, token) => {
        getPurchaseHistory(userId, token).then(data => {
            if (data.error){
                console.log(data.error)
            } else {
                setHistory(data)
            }
        })
    }

    useEffect(() => {
        init(_id, token)
    }, [])
    const userLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/cart">My cart</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to={`/profile/${_id}`}>Update Profile</Link>
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
                    <li className="list-group-item">Prenom: {prename}</li>
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">{adresse}</li>
                </ul>
            </div>
        )
    }

    const purchaseHistory = (history) => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Vos commandes</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        {
                            history.map((h, i) => {
                                return (
                                    <div>
                                {
                                h.products.map((p, i) => {
                                    return (
                                        <div key={i}>
                                            <h6>Name: {p.name}</h6>  
                                        </div>
                                    )
                                })}
                                </div>
                                )
                            })
                        }
                    </li>
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
                    {purchaseHistory(history)}
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;
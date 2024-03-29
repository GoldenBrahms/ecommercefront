import React, {useState, useEffect } from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';
import {Link, Redirect} from 'react-router-dom';
import Header from '../core/Header';
import { read, update, updateUser } from './ApiUser'

const Profile = (props) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        prename: '',
        password: '',
        error: '',
        success: false
    })

    const { token } = isAuthenticated();
    const { user: {prename1}} = isAuthenticated();
    const {name, email, password, prename, error, success} = values;

    const init = (userId) => {
        console.log(userId)
    }

    useEffect(() => {
        const userId = props.match.params.userId;
        console.log(userId)
        init(userId)
    }, [])

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = (e) => {
        e.preventDefault()
        update(props.match.params.userId, token, {name, email, password})
        .then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                updateUser(data, () => {
                    setValues({...values, name: data.name, email: data.email, success: true})
                })
            }
        })
    }

    const redirectUser = (success) => {
        if (success) {
            return <Redirect to="/"/>
        }
    }
    const profilUpdate = (name, email, password) => (
        <form style={{width:'500px', display:'flex', flexDirection:'column'}}>
            <div className="form-group">
                <label className="text-muted">Nom</label>
                <input type="text" className="form-control" value={name} onChange={handleChange('name')}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Prenom</label>
                
                <input type="text" className="form-control" value={prename} onChange={handleChange('prename')}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" className="form-control" value={email} onChange={handleChange('email')}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="password" className="form-control" value={password} onChange={handleChange('password')}/>
            </div>
            <button className="btn btn-primary" onClick={clickSubmit}>Submit</button>
        </form>
    )
    return (
        <>
            <Header/>
        <div style={{height:'72vh', backgroundColor:'',width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h2>Profile update</h2>
            {profilUpdate(name, email, password)}
            {redirectUser(success)}
        </div>
        </>
    )
}

export default Profile;
import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate } from '../auth/index';
import { API } from '../config'



const Signin2 = ( history ) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false,
    })
    const width = window.innerWidth;
    

    const breakpoint = 720;
    
    
   


    const {  email , password, error, loading, redirectToReferrer } = values;
    
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false});
        signin({email, password}).then(data => {
            if (data.error){
                setValues({...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                })
                })
            }
        })
    }

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? "" : "none" }}>
            {error}
        </div>
    );

    const showLoading = () => (
        loading && (<div className="alert alert-info">
            <h2>Loading</h2>
        </div>)
    )

    const redirectUser = () => {
        if (redirectToReferrer) {
            return <Redirect to="/paiement-securisée"/>
        }
    }

    const signInForm = () => (
 
        
        <div style={{  width:'50%', padding: '20px', marginTop: '50px', display: 'flex', alignItems: '', justifyContent: 'center' }}>
        <div style={{ width: '80%' }}>
            <div className="form-group">
                <h2 style={{margin:'0'}}>Se connecter</h2>
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input style={{}} onChange={handleChange('email')} value={email} type="email" className="form-control" autofocus />
            </div>
            <div className="form-group">
                <label className="text-muted">Mot de passe</label>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control" />
            </div>
            <div>
                <button onClick={clickSubmit} style={{borderRadius:'12px'}} className="btn btn-primary btn-lg btn-block">S'identifier</button>
            </div>
            <div style={{margin:'10px'}}>
                <p style={{margin:'0'}}>Nouveau chez Lirya?</p>
                <Link to="/signup" style={{borderRadius:'12px'}} className="btn btn-secondary btn-lg btn-block">Créer un compte Samemo</Link>
            </div>
        </div>
    </div>
    )
    const signInFormMobile = () => (
 
        <div style={{ width:'100%', padding: '20px', display: 'flex', alignItems: '', justifyContent: 'center' }}>
            <div style={{ width: '100%'}}>
                
                <div className="form-group">
                    <input placeholder="Adresse E-mail *" style={{width:'300px'}} onChange={handleChange('email')} value={email} type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <input placeholder="Mot de passe *" style={{width:'300px'}} onChange={handleChange('password')} value={password} type="password" className="form-control" />
                </div>
                <div>
                    <button onClick={clickSubmit} style={{borderRadius:'12px'}} className="btn btn-primary btn-mg btn-block">S'identifier</button>
                </div>
                
            </div>
        </div>
    )
    return  (
        <>
            {showError()}
            {showLoading()}
            {redirectUser()}
            { width < breakpoint ?
             signInFormMobile()
             :
            signInForm()}
        </>
    );
}

export default Signin2;

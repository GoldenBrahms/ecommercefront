import React, { useState } from 'react';
import Layout from '../core/Layout';
import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate } from '../auth/index';
import { API } from '../config'


const Signin = ({ history }) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false,
    })

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
            return <Redirect to="/"/>
        }
    }

    const signInForm = () => (
        <div style={{ padding: '20px', marginTop: '0px',  display: 'flex', alignItems: 'center', justifyContent: 'center', height:'71vh' }}>
            <div style={{ width: '50%' }}>
                <div className="form-group">
                    <h1 style={{textAlign:'center'}}>S'identifier</h1>
                </div>
                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input onChange={handleChange('email')} value={email} type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input onChange={handleChange('password')} value={password} type="password" className="form-control" />
                </div>
                <div>
                    <p style={{margin:'0'}}>Mot de passe oublié?</p>
                    <button onClick={clickSubmit} style={{ borderRadius:'12px'}} className="btn btn-primary btn-lg btn-block">S'identifier</button>
                </div>
                <div style={{margin:'10px'}}>
                    <p style={{margin:'0'}}>Nouveau chez Samemo?</p>
                    <Link to="/signup" style={{borderRadius:'12px'}} className="btn btn-secondary btn-lg btn-block">Créer un compte Samemo</Link>
                </div>
            </div>
        </div>
    )
    return  (
        <Layout className="container col-md-8 offset-md-2" title="Signin" description="Signin to Node Ecommerce">
            {showError()}
            {showLoading()}
            {redirectUser()}
            {signInForm()}
        </Layout>
    );
}

export default Signin;

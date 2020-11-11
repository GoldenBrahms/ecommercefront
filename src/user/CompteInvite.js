import React, { useState } from 'react';
import Layout from '../core/Layout';
import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate, userinvite } from '../auth/index';
import { API } from '../config'


const Signin = ({ history }) => {
    const [values, setValues] = useState({
        email: '',
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
        userinvite({email}).then(data => {
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
            return <Redirect to="/CheckoutDirect"/>
        }
    }

    const InviteForm = () => (
        <div style={{ padding: '20px', marginTop: '50px', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column' }}>
            <h2>Vous n'avez pas de compte Samemo?</h2>
            <p>Poursuivez ainsi. Vous créerez un identifiant Apple ultérieurement.</p>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>
            <Link onClick={clickSubmit} to="/CheckoutDirect" className="btn btn-secondary btn-lg btn-block">Créer un compte Samemo</Link>
        </div>
    )
    return  (
        <Layout className="container col-md-8 offset-md-2" title="Signin" description="Signin to Node Ecommerce">
            {showError()}
            {showLoading()}
            {InviteForm()}
            {redirectUser()}
        </Layout>
    );
}

export default Signin;

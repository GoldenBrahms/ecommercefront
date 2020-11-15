import React, { useState } from 'react';
import Layout from '../core/Layout';
import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate, userinvite } from '../auth/index';
import { API } from '../config'


const CompteInvite = ({ history }) => {
    const [values, setValues] = useState({
        email: '',
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

    const InviteFormMobile = () => (
        <div style={{padding:'10px', backgroundColor:'', display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center', width:'100%' }}>
            <h2 style={{margin:'0'}}>Vous n'avez pas de compte Samemo?</h2>
            <p>Poursuivez ainsi. Vous créerez un compte Samemo ultérieurement.</p>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input style={{width:'350px'}} onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>
            <Link onClick={clickSubmit} style={{backgroundColor:'#0071e3', borderRadius:'12px'}} to="/CheckoutDirect" className="btn btn-secondary btn-lg btn-block">Continuer comme invité</Link>
        </div>
    )
    const InviteForm = () => (
        <div style={{width:'50%', padding: '20px', marginTop: '50px' }}>
            <h2>Vous n'avez pas de compte Samemo?</h2>
            <p>Poursuivez ainsi. Vous créerez un compte Samemo ultérieurement.</p>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>
            <Link onClick={clickSubmit} style={{backgroundColor:'#0071e3', borderRadius:'12px'}} to="/CheckoutDirect" className="btn btn-secondary btn-lg btn-block">Continuer comme invité</Link>
        </div>
    )
    return  (
        <>
            {showError()}
            {showLoading()}
            {width < breakpoint ?
            InviteFormMobile()
            :
            InviteForm()
        }
            {redirectUser()}
        </>
    );
}

export default CompteInvite;

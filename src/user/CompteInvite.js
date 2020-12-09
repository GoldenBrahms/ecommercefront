import React, { useState } from 'react';
import Layout from '../core/Layout';
import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate1, userinvite } from '../auth/index';
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
                authenticate1(data, () => {
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
            return <Redirect to="/paiement-secure-invite"/>
        }
    }

    const InviteFormMobile = () => (
        <div style={{padding:'10px', backgroundColor:'', display:"flex",flexDirection:'column',justifyContent:'',alignItems:'center', width:'100%' }}>
            <div className="form-group">
                <input style={{width:'300px'}} onChange={handleChange('email')} value={email} placeholder="Adresse e-mail" type="email" className="form-control"/>
            </div>
            <Link onClick={clickSubmit} style={{backgroundColor:'#0071e3', borderRadius:'12px'}} to="/CheckoutDirect" className="btn btn-secondary btn-mg btn-block">Continuer comme invité</Link>
            <Link onClick={clickSubmit} style={{backgroundColor:'#0071e3', borderRadius:'12px'}} to="/signup" className="btn btn-secondary btn-mg btn-block">Créer un compte</Link>
        </div>
    )
    const InviteForm = () => (
        <div style={{width:'50%', padding: '20px', marginTop: '50px' }}>
            <h2>Vous ne souhaitez pas de compte Samemo?</h2>
            <p>Poursuivez ainsi en tant que invité(e).</p>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>
            <Link onClick={clickSubmit} style={{backgroundColor:'#0071e3', borderRadius:'12px'}} to="/paiement-secure-invite" className="btn btn-secondary btn-lg btn-block">Continuer comme invité</Link>
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

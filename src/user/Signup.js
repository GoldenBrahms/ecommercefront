import React, { useState } from 'react';
import Layout from '../core/Layout';
import { Link } from 'react-router-dom';
import { signup, signout } from '../auth/index';
import { API } from '../config'


const Signup = ({ history }) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const { name, email , password, error, success } = values;
    
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({name, email, password}).then(data => {
            if (data.error){
                setValues({...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                })
            }
        })
    }

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : "none" }}>
            {error}
        </div>
    )
    const showSuccess = () => (
        <div className="alert alert-info" style={{display: success ? '' : "none" }}>
            New account is created please <Link to="/signin">Sign in</Link>
        </div>
    )

    const signUpForm = () => (
        <div style={{padding:'20px', marginTop:'50px', border:'1px solid black', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{width:'50%'}}>
            <div className="form-group">
                <h1>Créer un compte</h1>
            </div>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control"/>
            </div>
            <div>
            <button onClick={clickSubmit} className="btn btn-primary btn-lg btn-block">Créer votre compe Samemo</button>
            </div>
            <div>
                <span className="nav-link" onClick={() => signout(() => {
                    history.push("/signin")
                })} style={{cursor:'pointer'}} >Vous possédez déjà un compte ? Se connecter</span>
            </div>
            </div>
        </div>
    )
    return  (
        <Layout className="container col-md-8 offset-md-2" title="Signup" description="Signup to Node Ecommerce">
            {showError()}
            {showSuccess()}
            {signUpForm()}
        </Layout>
    );
}

export default Signup;
import React from 'react';
import Header from './Header';
import { Link, withRouter, Redirect } from 'react-router-dom'


const Contact = () => {
    return(
        <div style={{height:'77vh', width:'100%'}}>
            <Header/>
            <div style={{padding:'20px', backgroundColor:'', width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h1>Canal d'assistance</h1>
                <h2>Choisissez comment vous souhaitez contacter l'assistance Samemo</h2>
                <div style={{height:'20vh', width:'100%', backgroundColor:'',display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <div style={{marginRight:'20px', display:'flex', flexDirection:'column'}}>
                        <h4 style={{margin:0}}>Email</h4>
                        <p style={{margin:0}}>Nous contacter par e-mail</p>
                        <p style={{margin:0}}>Réponse dans les 10h</p>
                        <Link className="btn btn-dark btn-lg btn-block" style={{}} to="/contact/email">Nous contacter par e-mail</Link>
                    </div>
                    <div>
                    <h4 style={{margin:0}}>Téléphone</h4>
                        <p style={{margin:0}}>Nous contacter par Téléphone</p>
                        <p style={{margin:0}}>Ligne ouverte de 8h à 12h et de 14h à 18h</p>
                        <Link className="btn btn-dark btn-lg btn-block" style={{}} to="/contact/email">Nous contacter par téléphone</Link>
                    </div>
                </div>
                <div style={{height:'20vh', width:'100%', backgroundColor:'',display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <div style={{marginRight:'20px', display:'flex', flexDirection:'column'}}>
                        <h4 style={{margin:0}}>Facebook</h4>
                        <p style={{margin:0}}>Nous contacter sur Facebook</p>
                        <p style={{margin:0}}>Réponse dans les 10h</p>
                        <Link className="btn btn-dark btn-lg btn-block" style={{}} to="/contact/email">Nous contacter sur Facebook</Link>
                    </div>
                    <div>
                    <h4 style={{margin:0}}>Email</h4>
                        <p style={{margin:0}}>Nous contacter par e-mail</p>
                        <p style={{margin:0}}>Réponse dans les 10h</p>
                        <Link className="btn btn-dark btn-lg btn-block" style={{}} to="/contact/email">Nous contacter par e-mail</Link>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
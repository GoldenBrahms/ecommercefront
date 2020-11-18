import React from 'react';
import Header from './Header';
import { Link, withRouter, Redirect } from 'react-router-dom'


const Contact = () => {

    const width = window.innerWidth;

    const breakpoint = 620;

    return(
        <>
        { width < breakpoint ?
        <div style={{height:'850px', width:'100%'}}>
        <Header/>
        <div style={{padding:'20px', backgroundColor:'', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <h1>Canal d'assistance</h1>
            <h4 style={{textAlign:'center'}}>Choisissez comment vous souhaitez contacter l'assistance Samemo</h4>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
                <svg  width="60" height="60" viewBox="0 0 20 20" class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path d="M0 5.324V15.5A1.5 1.5 0 0 0 1.5 17h17a1.5 1.5 0 0 0 1.5-1.5V5.324l-9.496 5.54a1 1 0 0 1-1.008 0L0 5.324z"></path><path d="M19.443 3.334A1.494 1.494 0 0 0 18.5 3h-17a1.49 1.49 0 0 0-.943.334L10 8.842l9.443-5.508z"></path></svg>
                    <h4 style={{margin:0}}>Email</h4>
                    <p style={{margin:0}}>Nous contacter par e-mail</p>
                    <Link className="btn btn-dark btn-lg btn-block" style={{}} to="/contact/email">Nous contacter par e-mail</Link>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h4 style={{marginTop:'10px', marginBottom:'0'}}>Téléphone</h4>
                    <p style={{margin:0}}>de 9h à 12h</p>
                    <Link className="btn btn-dark btn-lg btn-block" style={{}} to="/contact/email">Nous contacter par téléphone</Link>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <h4 style={{marginTop:'10px', marginBottom:'0'}}>Facebook</h4>
                    <p style={{margin:0}}>Réponse dans les 10h</p>
                    <Link className="btn btn-dark btn-lg btn-block" style={{}} to="/contact/email">Nous contacter sur Facebook</Link>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h4 style={{marginTop:'10px', marginBottom:'0'}}>Email</h4>
                    <p style={{margin:0}}>Nous contacter par e-mail</p>
                    <Link className="btn btn-dark btn-lg btn-block" style={{}} to="/contact/email">Nous contacter par e-mail</Link>
                </div>
            </div>
        </div>
        :
        <div style={{height:'77vh', width:'100%'}}>
            <Header/>
            <div style={{padding:'20px', backgroundColor:'', width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h1>Canal d'assistance</h1>
                <h2>Choisissez comment vous souhaitez contacter l'assistance Samemo</h2>
                <div style={{height:'20vh', width:'100%', backgroundColor:'',display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <div style={{marginRight:'20px', display:'flex', flexDirection:'column'}}>
                    <svg  width="60" height="60" viewBox="0 0 20 20" class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path d="M0 5.324V15.5A1.5 1.5 0 0 0 1.5 17h17a1.5 1.5 0 0 0 1.5-1.5V5.324l-9.496 5.54a1 1 0 0 1-1.008 0L0 5.324z"></path><path d="M19.443 3.334A1.494 1.494 0 0 0 18.5 3h-17a1.49 1.49 0 0 0-.943.334L10 8.842l9.443-5.508z"></path></svg>
                        <h4 style={{margin:0}}>Email</h4>
                        <p style={{margin:0}}>Nous contacter par e-mail</p>
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
            </div>
        </div>}
        </>
    )
}

export default Contact;
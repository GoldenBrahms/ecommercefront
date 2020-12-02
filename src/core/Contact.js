import React from 'react';
import Header from './Header';
import { Link, withRouter, Redirect } from 'react-router-dom'
import FAQ from './Faq'


const Contact = () => {

    const width = window.innerWidth;

    const breakpoint = 620;

    return(
        <>
        { width < breakpoint ?
        <div style={{height:'900px', width:'100%'}}>
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
                    <a className="btn btn-dark btn-lg btn-block" style={{}} href="https://www.facebook.com/Samemo-%C3%87a-met-bien-107643377396054">Nous contacter sur Facebook</a>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h4 style={{marginTop:'10px', marginBottom:'0'}}>Email</h4>
                    <p style={{margin:0}}>Nous contacter par e-mail</p>
                    <Link className="btn btn-dark btn-lg btn-block" style={{}} to="/contact/email">Nous contacter par e-mail</Link>
                </div>
            </div>
        </div>
        :
        <div style={{height:'80vh', width:'100%'}}>
            <Header/>
            <div style={{padding:'20px', backgroundColor:'', width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h1>Canal d'assistance</h1>
                <h2>Choisissez comment vous souhaitez contacter l'assistance Lirya</h2>
                <div style={{height:'25vh', width:'100%', backgroundColor:'',display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <div style={{marginRight:'20px', display:'flex', flexDirection:'column'}}>
                    <svg  width="60" height="60" viewBox="0 0 20 20" class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path d="M0 5.324V15.5A1.5 1.5 0 0 0 1.5 17h17a1.5 1.5 0 0 0 1.5-1.5V5.324l-9.496 5.54a1 1 0 0 1-1.008 0L0 5.324z"></path><path d="M19.443 3.334A1.494 1.494 0 0 0 18.5 3h-17a1.49 1.49 0 0 0-.943.334L10 8.842l9.443-5.508z"></path></svg>
                        <h4 style={{margin:0}}>Email</h4>
                        <p style={{margin:0}}>Nous contacter par e-mail</p>
                        <Link className="btn btn-dark btn-lg btn-block" style={{}} to="/contact/email">Nous contacter par e-mail</Link>
                    </div>
                    <div>
                    <svg width="60" height="55" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.639.855-2.313 2.666-2.289 4.916.075 6.948 6.809 18.071 12.309 18.045.541-.003 1.07-.113 1.58-.346.121-.055 2.102-1.029 2.11-1.033zm-2.5-13.621c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/></svg>
                    <h4 style={{margin:0}}>Téléphone</h4>
                        <p style={{margin:0}}>Ligne ouverte de 8h à 12h et de 14h à 18h</p>
                        <Link className="btn btn-dark btn-lg btn-block" style={{}} to="/contact/email">Nous contacter par téléphone</Link>
                    </div>
                </div>
                <div style={{marginTop:'10px',height:'20vh', width:'100%', backgroundColor:'',display:'flex', alignItems:'center', justifyContent:'center'}}>
                    
                    <div style={{marginRight:'20px',marginTop:'20px', display:'flex', flexDirection:'column'}}>
                        <FAQ/>
                    </div>
                    <div style={{marginRight:'20px',marginTop:'20px', display:'flex', flexDirection:'column'}}>
                    <svg width="60" height="55" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z"/></svg>
                        <h4 style={{margin:0}}>Facebook</h4>
                        <p style={{margin:0}}>Nous contacter sur Facebook</p>
                        <a className="btn btn-dark btn-lg btn-block" style={{}} target="_blank" href="https://www.facebook.com/Samemo-%C3%87a-met-bien-107643377396054">Nous contacter sur Facebook</a>
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Contact;
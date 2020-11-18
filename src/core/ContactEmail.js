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
        <div style={{padding:'20px', backgroundColor:'', width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h1>E-mail</h1>
            <h3 style={{textAlign:'center'}}>Ecrivez nous, nous nous ferons une joie de vous lire et vous repondre</h3>
            <div className="form-group">
                <label className="text-muted">Votre nom</label>
                <input style={{width:'250px'}} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Votre e-mail</label>
                <input style={{width:'250px'}} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Votre message</label>
                <textarea style={{width:'250px', height:'150px'}} type="text" className="form-control" />
            </div>
            <div>
                <button style={{ borderRadius:'12px'}} className="btn btn-primary btn-lg btn-block">Envoyer le message</button>
            </div>
        </div>
    </div>
        :
        <div style={{height:'77vh', width:'100%'}}>
            <Header/>
            <div style={{padding:'20px', backgroundColor:'', width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h1>E-mail</h1>
                <h2>Choisissez comment vous souhaitez contacter l'assistance Samemo</h2>
                <div className="form-group">
                    <label className="text-muted">Votre nom</label>
                    <input style={{width:'500px'}} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">Votre e-mail</label>
                    <input style={{width:'500px'}} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">Votre message</label>
                    <textarea style={{width:'500px', height:'150px'}} type="text" className="form-control" />
                </div>
                <div>
                    <button style={{ borderRadius:'12px'}} className="btn btn-primary btn-lg btn-block">Envoyer le message</button>
                </div>
            </div>
        </div>
}</>
    )
}

export default Contact;
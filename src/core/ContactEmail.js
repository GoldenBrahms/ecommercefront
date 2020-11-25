import React, { useState } from 'react';
import Header from './Header';
import { Link, withRouter, Redirect } from 'react-router-dom'
import { sendmail } from '../auth/index';
import emailjs from 'emailjs-com';
import { EMAIL, USER_ID, SERVICE_EMAIL } from "../config";




const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
        success: false,
        disabled: false,
        emailSentr: false

    })

    const { name,  email , message, success } = values;

    const width = window.innerWidth;

    const breakpoint = 620;
    
    function ValidateEmail(mail) 
    {
     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
      {
        return (true)
      }
      return (false)
    }
    function sendEmail(e) {
        e.preventDefault();
        
        let templateParams = {
            from_name: email,
            message_html: message,
            to_name: {EMAIL},
           }
           if (name && email && ValidateEmail(email) && message){
           emailjs.send(
            {SERVICE_EMAIL},
            'template_ojiq70g',
             templateParams,
            {USER_ID}
           )
           setValues({
            success: true,
            name: "",
            email: "",
            message: ""
         })
        }
           else {
               if(name === ""){
                document.getElementById("nameSender").style.display = '';
               }
               if(email === ""){
                   document.getElementById("emailSender").style.display = '';
               }
               if(!ValidateEmail(email) && email != "") {
                document.getElementById("emailSender2").style.display = '';
            }
            if (message === ""){
                document.getElementById("Message").style.display = '';
            }
           }
      }
       const resetForm = () => {
        setValues({
          name: '',
          email: '',
          message: '',
         
        })
      }
      const showSuccess = () => (
        <div className="alert alert-info" style={{display: success ? '' : "none" }}>
            Votre message a bien été envoyé 
        </div>
    )

    const handleChangeName = event => {
        document.getElementById("nameSender").style.display = 'none';
        setValues({...values, name: event.target.value})
    }
    const handleChangeEmail = event => {
        document.getElementById("emailSender").style.display = 'none';
        document.getElementById("emailSender2").style.display = 'none';
        setValues({...values, email: event.target.value})
    }
    const handleChangeMessage = event => {
        document.getElementById("Message").style.display = 'none';
        setValues({...values, message: event.target.value})
    }
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
                <p id="nameSender" style={{color:'red', margin:'0', display:'none'}}>entrez un nom svp</p>
                <input onChange={handleChangeName} value={name} style={{width:'250px'}} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Votre e-mail</label>
                <p id="emailSender" style={{color:'red', margin:'0', display:'none'}}>entrez votre email svp</p>
                    <p id="emailSender2" style={{color:'red', margin:'0', display:'none'}}>Veuillez entrer un email correct</p>
                <input  onChange={handleChangeEmail}  value={email} style={{width:'250px'}} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Votre message</label>
                <p id="Message" style={{color:'red', margin:'0', display:'none'}}>Veuillez ecrire queqlue chose svp</p>
                <textarea  onChange={handleChangeMessage} value={message} style={{width:'250px', height:'150px'}} type="text" className="form-control" />
            </div>
            <div>
                <button onClick={sendEmail} style={{ borderRadius:'12px'}} className="btn btn-primary btn-lg btn-block">Envoyer le message</button>
            </div>
        </div>
    </div>
        :
        <div style={{height:'130vh', width:'100%'}}>
            <Header/>
            <div style={{padding:'20px', backgroundColor:'', width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h1>E-mail</h1>
                <h2>Choisissez comment vous souhaitez contacter l'assistance Samemo</h2>
                <div className="form-group">
                    <label className="text-muted">Votre nom</label>
                    <p id="nameSender" style={{color:'red', margin:'0', display:'none'}}>entrez un nom svp</p>
                    <input onChange={handleChangeName} value={name} style={{width:'500px'}} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">Votre e-mail</label>
                    <p id="emailSender" style={{color:'red', margin:'0', display:'none'}}>entrez votre email svp</p>
                    <p id="emailSender2" style={{color:'red', margin:'0', display:'none'}}>Veuillez entrer un email correct</p>

                    <input onChange={handleChangeEmail}  value={email} style={{width:'500px'}} type="text" className="form-control" />
                </div>
                {showSuccess()}
                <div className="form-group">
                    <label className="text-muted">Votre message</label>
                    <p id="Message" style={{color:'red', margin:'0', display:'none'}}>Veuillez ecrire queqlue chose svp</p>
                    <textarea onChange={handleChangeMessage} value={message} style={{width:'500px', height:'150px'}} type="text" className="form-control" />
                </div>
                <div>
                    <button onClick={sendEmail} style={{ borderRadius:'12px'}} className="btn btn-primary btn-lg btn-block">Envoyer le message</button>
                </div>
            </div>
        </div>
}</>
    )
}

export default Contact;
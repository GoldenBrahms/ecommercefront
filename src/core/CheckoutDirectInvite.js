import React, { useState, useEffect } from 'react';
import Informations from './Informations';
import DropIn from 'braintree-web-drop-in-react';
import { getBraintreeClientToken1, processPayment1, createInviteOrder } from './apiCore';
import { isAuthenticated, isIdentified } from '../auth/index';
import { Redirect } from 'react-router-dom';
import Header from './Header'
import Layout from './Layout'
import { signoutInvite } from '../auth';





const CheckoutDirectInvite = ({ history }) => {
    
    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        name: '',
        prename: '',
        email:'',
        address: '',
        zipcode: '',
        city: ''
    });

    const { user: {_id, name, prename, email, role}} = isIdentified();

    const width = window.innerWidth;

    const breakpoint = 620;

    const userId = isIdentified() && isIdentified().user._id;
    const token = isIdentified() && isIdentified().token;

    const buy = () => {
        let nonce;
        let amount = 30;
        let getNonce = data.instance
        .requestPaymentMethod()
        .then(data => {
           // console.log(data)
            nonce = data.nonce
            // send nonce as payment method to backend
           // console.log(nonce)
           const paymentData = {
               paymentMethodNonce: nonce,
               amount: 30
           }
           processPayment1(userId, token, paymentData)
           .then(responce => {
               const createOrderData = {
                   transaction_id: responce.transaction_id,
                   email: deliveryEmail,
                   name: deliveryName,
                   prename: deliveryPrename,
                   address: deliveryAdress,
                   city: deliveryCity,
                   zipcode: deliveryZipCode
               }
               createInviteOrder(userId, token, createOrderData)
               setData({...data, success: responce.success })
               signoutInvite(() =>{
                history.push('/remerciement')
                    })

           })
           .catch(error => console.log(error))
        })
        .catch(error => {
            console.log("dropin :", error)
            setData({...data, error: error.message})
        })
    }


    let deliveryEmail = data.email
    let deliveryName = data.name
    let deliveryPrename = data.prename
    let deliveryAdress = data.address
    let deliveryCity = data.city
    let deliveryZipCode = data.zipcode

    const getToken = (userId, token, res) => {
       
       
            
           getBraintreeClientToken1(userId, token).then(data => {
                if (data.error) {
                    console.log(data.error);
                    setData({ ...data, error: data.error });
                } else {
                    console.log(data);
                    setData({ clientToken: data.clientToken });
                }
            });
       
    };
    const showButton = () => {
        console.log("clicked")
        document.getElementById("buttonPay").style.display = "block"
    }

    const ShowDropIn = () => (
        <div onBlur={() => setData({...data, error: ""})} style={{width:'100%', padding:'100px'}}>
        {data.clientToken !== null  ? (
            <div >
                <DropIn 
                   
                    options={{
                        authorization: data.clientToken,
                        locale: 'fr_FR'
                    }}
                    onInstance={instance => (data.instance = instance)}
                />
                <button  onClick={buy}  className="btn btn-success btn-block">
                    Payer
                </button>
            </div>
        ) : null}
    </div>
    )
    const ShowDropInMobile = () => (
        <div onBlur={() => setData({...data, error: ""})} style={{width:'100%',padding:"20px"}}>
        {data.clientToken !== null  ? (
            <div >
                           <h2>2) Paiement</h2>
                <DropIn 
                   
                    options={{
                        authorization: data.clientToken,
                        locale: 'fr_FR'
                    }}
                    onInstance={instance => (data.instance = instance)}
                />
                <button  onClick={buy}  className="btn btn-success btn-block">
                    Payer
                </button>
            </div>
        ) : null}
    </div>
    )
    useEffect(() => {
        if ({name} !== 'undefined'){
        getToken(userId, token);
        }
    }, []);

    const showError = error => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
            {error}
        </div>
    )
    const showSuccess = success => {
        success && (<Redirect to="/"/>)
}
    const handleChangeName = event => {
        document.getElementById("Name").style.display = 'none';
        setData({...data, name: event.target.value})
        console.log(data.name)
    }
    const handleAdress = event => {
        document.getElementById("Adresse").style.display = 'none';
        setData({...data, address: event.target.value})
        console.log(data.address)
    }
    const handleChangePrenom = event => {
        document.getElementById("Prename").style.display = 'none';
        setData({...data, prename: event.target.value})
        console.log(data.prename)
    }
    const handleChangeEmail = event => {
        document.getElementById("Email").style.display = 'none';
        setData({...data, email: event.target.value})
        console.log(data.email)
    }
    const handleCity = event => {
        document.getElementById("City").style.display = 'none';
        setData({...data, city: event.target.value})
        console.log(data.city)
    }
    const handleZipcode = event => {
        document.getElementById("ZipCode").style.display = 'none';
        setData({...data, zipcode: event.target.value})
        console.log(data.zipcode)
    }

    const disableDiv = event => {
        event.preventDefault()
        if (data.name){
        document.getElementById("divBlock").style.display = "none";
        }else{
            document.getElementById("Name").style.display = "";
        }
        if (data.prename){
        document.getElementById("divBlock").style.display = "none";
        }else{
            document.getElementById("Prename").style.display = "";
        }
        if (data.addrss){
        document.getElementById("divBlock").style.display = "none";
        }else{
            document.getElementById("Adresse").style.display = "";
        }
        if (data.city){
        document.getElementById("divBlock").style.display = "none";
        }else{
            document.getElementById("City").style.display = "";
        }
        if (data.zipcode){
        document.getElementById("divBlock").style.display = "none";
        }else{
            document.getElementById("ZipCode").style.display = "";
        }
    }
    return (
        <>
        { width < breakpoint ? 
        <div style={{padding:'20px', width:'100%', height:'', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' } }>
            <h2 style={{marginTop:'10px'}}>1) Vos Informations</h2>
        <div style={{width:'70%', alignItems:'center'}} className="form-group">
           <label className="text-muted">Email</label>
           <input
               name="email"
               type="email"
               className="form-control"
               onChange={handleChangeEmail}
               value={email}
               
           ></input>
           <label className="text-muted">Nom</label>
           <input
               name="name"
               type="text"
               className="form-control"
               onChange={handleChangeName}
               value={name}
           />
           <label className="text-muted">Prénom</label>
           <input
               type="text"
               className="form-control"
               onChange={handleChangePrenom}
               value={prename}
           />
           <label className="text-muted">Adresse</label>
           <input
               type="text"
               className="form-control"
               value={data.address}
               onChange={handleAdress}
               
           />
           <label className="text-muted">Code Postal</label>
           <input
               type="text"
               className="form-control"
               
           />
           <label className="text-muted">Ville</label>
           <input
               type="text"
               className="form-control"
               
           />
       </div>
       <div style={{borderTop:'1px solid black'}}>
       {showError(data.error)}
       {showSuccess(data.success)}
       {ShowDropInMobile()}
       </div>
   </div>
        :
        <>
        <Header/>
        <div style={{width:'100%', height:'112vh', display:'flex', justifyContent:'center', textAlign:'center' } }>
            
             <div style={{ height:'110vh',borderRight:'1px solid black', width:'50%', backgroundColor:'', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
             <h1>Vos Informations</h1>
             <h1 style={{position:'absolute', top:'60px', left:'40px'}}>1)</h1>
        <div style={{width:'50%'}} className="form-group">
                <label className="text-muted">Email</label>
                <input
                    name="email"
                    type="email"
                    className="form-control"
                    onChange={handleChangeEmail}
                    value={email}
                    
                />
                <label className="text-muted">Nom</label>
                <p id="Name" style={{margin:0, color:'red', display:'none'}}>Veuillez entrer votre nom</p>
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={handleChangeName}
                    value={data.name}
                />
                <label className="text-muted">Prénom</label>
                <p id="Prename" style={{margin:0, color:'red', display:'none'}}>Veuillez entrer votre prénom</p>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleChangePrenom}
                    value={data.prename}
                />
                <label className="text-muted">Adresse</label>
                <p id="Adresse" style={{margin:0, color:'red', display:'none'}}>Veuillez entrer votre adresse</p>
                <input
                    type="text"
                    className="form-control"
                    value={data.address}
                    onChange={handleAdress}
                    
                />
                <label className="text-muted">Code Postal</label>
                <p id="ZipCode" style={{margin:0, color:'red', display:'none'}}>Veuillez entrer votre Code Postal</p>
                <input
                    type="text"
                    className="form-control"
                    value={data.zipcode}
                    onChange={handleZipcode}
                    
                />
                <label className="text-muted">Ville</label>
                <p id="City" style={{margin:0, color:'red', display:'none'}}>Veuillez entrer votre Ville</p>
                <input
                    type="text"
                    className="form-control"
                    value={data.city}
                    onChange={handleCity}
                    
                />
                <button style={{marginTop:'20px'}} onClick={disableDiv} className="btn btn-dark">Valider</button>
            </div>
    </div>
            <div style={{display:'flex', flexDirection:'column', width:'50%'}}>
            <h1 style={{position:'absolute', top:'60px', left:'760px'}}>2)</h1>

            {showError(data.error)}
            {showSuccess(data.success)}
            {ShowDropIn()}
            <div id="divBlock" style={{cursor:'none',position:'absolute',zIndex:999, backgroundColor:'rgba(0, 0, 0, 0.5)', width:'50%', height:'112%'}}></div>
            </div>
        </div>
        </>
        }
        </>
        );
}

export default CheckoutDirectInvite;
    

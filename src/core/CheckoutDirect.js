import React, { useState, useEffect } from 'react';
import Informations from './Informations';
import DropIn from 'braintree-web-drop-in-react';
import { getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { isAuthenticated } from '../auth/index';
import { Redirect } from 'react-router-dom';
import Header from './Header'
import Layout from './Layout'




const CheckoutDirect = ({ history }) => {
    
    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        name: '',
        prenom: '',
        email:'',
        address: '',
        city: '',
    });

    const { user: {_id, name, prename, email, role}} = isAuthenticated();

    const width = window.innerWidth;

    const breakpoint = 620;

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;

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
           processPayment(userId, token, paymentData)
           .then(responce => {
               const createOrderData = {
                   transaction_id: responce.transaction_id,
                   address: deliveryAdress,
                   city: deliveryCity,
                   amount: 30
               }
               createOrder(userId, token, createOrderData)
               setData({...data, success: responce.success })
               history.push('/remerciement')
           })
           .catch(error => console.log(error))
        })
        .catch(error => {
            console.log("dropin :", error)
            setData({...data, error: error.message})
        })
    }


    let deliveryAdress = data.address
    let deliveryCity = data.city

    const getToken = (userId, token, res) => {
       
       getBraintreeClientToken(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
                setData({ ...data, error: data.error });
            } else {
                console.log({name})

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
        getToken(userId, token);
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
        setData({...data, name: event.target.value})
        console.log(data.name)
    }
    const handleAdress = event => {
        setData({...data, address: event.target.value})
        console.log(data.address)
    }
    const handleChangePrenom = event => {
        setData({...data, prenom: event.target.value})
        console.log(data.prenom)
    }
    const handleChangeEmail = event => {
        setData({...data, email: event.target.value})
        console.log(data.email)
    }
    const handleChangeCity = event => {
        setData({...data, city: event.target.value})
        console.log(data.city)
    }

    const disableDiv = event => {
        event.preventDefault()
        if (data.name && data.prenom && data.email){
        document.getElementById("divBlock").style.display = "none";}
    }
    return (
        <>
        { width < breakpoint ? 
        <>
                <Header/>
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' } }>
            <h2 style={{marginTop:'10px'}}>1) Vos Informations</h2>
        <div style={{width:'80%'}} className="form-group">
           <label className="text-muted">Email</label>
           <input
               name="email"
               type="email"
               className="form-control"
               onChange={handleChangeEmail}
               value={data.email}
               
           ></input>
           <label className="text-muted">Nom</label>
           <input
               name="name"
               type="text"
               className="form-control"
               onChange={handleChangeName}
               value={data.name}
           />
           <label className="text-muted">Prénom</label>
           <input
               type="text"
               className="form-control"
               onChange={handleChangePrenom}
               value={data.prename}
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
           <button onClick={disableDiv} style={{marginLeft:'40%', marginTop:'10px'}} className="btn btn-dark">Valider</button>
       </div>
       <div style={{borderTop:'1px solid black'}}>
       {showError(data.error)}
       {showSuccess(data.success)}
       {ShowDropInMobile()}
       <div id="divBlock" style={{top:'590px',cursor:'none',position:'absolute',zIndex:999, backgroundColor:'rgba(0, 0, 0, 0.5)', width:'100%', height:'67%'}}></div>

       </div>
   </div>
   </>
        :
        <>
        <Header/>
        <div style={{width:'100%', height:'80vh', display:'flex', justifyContent:'center', textAlign:'center' } }>
            
             <div style={{borderRight:'1px solid black', width:'50%', backgroundColor:'', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
             <h1>Vos Informations</h1>
             <h1 style={{position:'absolute', top:'60px', left:'40px'}}>1)</h1>
        <div style={{width:'50%'}} className="form-group">
                <label className="text-muted">Email</label>
                <input
                    name="email"
                    type="email"
                    className="form-control"
                    onChange={handleChangeEmail}
                    value={data.email}
                    
                />
                <label className="text-muted">Nom</label>
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={handleChangeName}
                    value={data.name}
                />
                <label className="text-muted">Prénom</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleChangePrenom}
                    value={data.prename}
                />
                <label className="text-muted">Adresse</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleAdress}
                    value={data.address}
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
                    value={data.city}
                    onChange={handleChangeCity}
                />
                <button onClick={disableDiv} className="btn btn-dark">Valider</button>
            </div>
    </div>
            <div style={{display:'flex', flexDirection:'column', width:'50%'}}>
            <h1 style={{position:'absolute', top:'60px', left:'760px'}}>2)</h1>

            {showError(data.error)}
            {showSuccess(data.success)}
            {ShowDropIn()}
            <div id="divBlock" style={{cursor:'none',position:'absolute',zIndex:999, backgroundColor:'rgba(0, 0, 0, 0.5)', width:'50%', height:'80%'}}></div>
            </div>
        </div>
        </>
        }
        </>
        );
}

export default CheckoutDirect;
    

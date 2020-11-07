import React, { useState, useEffect } from 'react';
import Informations from './Informations';
import DropIn from 'braintree-web-drop-in-react';
import { getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { isAuthenticated } from '../auth/index';




const Checkout = () => {
    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        name: '',
        prenom: '',
        email:'',
        address: ''
    });

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
                   transaction_id: responce.transaction_id
               }
               createOrder(userId, token, createOrderData)
               setData({...data, success: responce.success})
           })
           .catch(error => console.log(error))
        })
        .catch(error => {
            console.log("dropin :", error)
            setData({...data, error: error.message})
        })

    }

    const getToken = (userId, token, res) => {
        getBraintreeClientToken(userId, token).then(data => {
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
                        paypal: {
                            flow: 'vault'
                        }
                    }}
                    onInstance={instance => (data.instance = instance)}
                />
                <button  onClick={buy}  className="btn btn-success btn-block">
                    Pay
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
    const showSuccess = success => (
        <div className="alert alert-info" style={{display: success ? '' : 'none'}}>
            Thanks! Your payment was successful
        </div>
    )
    const handleChangeName = event => {
        setData({...data, name: event.target.value})
        console.log(data.name)
    }
    const handleChangePrenom = event => {
        setData({...data, prenom: event.target.value})
        console.log(data.prenom)
    }
    const handleChangeEmail = event => {
        setData({...data, email: event.target.value})
        console.log(data.email)
    }
    return (
        <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', textAlign:'center' } }>
             <div style={{width:'50%', backgroundColor:'', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
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
                    value={data.prenom}
                />
                <label className="text-muted">Adresse</label>
                <input
                    type="text"
                    className="form-control"
                    
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
    </div>
            <div style={{display:'flex', flexDirection:'column', width:'50%'}}>
            {showError(data.error)}
            {showSuccess(data.success)}
            {ShowDropIn()}
            </div>
        </div>
        );
}

export default Checkout;
    

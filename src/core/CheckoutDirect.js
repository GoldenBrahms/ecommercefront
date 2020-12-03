import React, { useState, useEffect } from 'react';
import Informations from './Informations';
import DropIn from 'braintree-web-drop-in-react';
import { getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { isAuthenticated } from '../auth/index';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Layout from './Layout';
import CardCheckout from './CardCheckout';
import { getCart, emptyCart } from './cartHelper';





const CheckoutDirect = ({ history}) => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);
    
    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        name: '',
        prenom: '',
        email:"",
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
               emptyCart()
               history.push('/remerciement')
               setData({...data, success: responce.success })
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
        <div onBlur={() => setData({...data, error: ""})} style={{width:'100%'}}>
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
        setData({ ...data, email: email, name: name, prename: prename})
        getToken(userId, token);
        setItems(getCart());
    }, [run]);

    const showError = error => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
            {error}
        </div>
    )
    const showSuccess = success => {
        success && (<Redirect to="/remerciement"/>)
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
               value={email}
               
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
        <h1 style={{fontSize:'50px', marginLeft:'250px'}}>Paiement</h1>
        <div style={{width:'100%', height:'1400px', display:'flex', justifyContent:'', textAlign:'' , backgroundColor:''} }>
             <div style={{backgroundColor:'' , width:'65%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:''}}>
                <div style={{width:'60%', border:'1px solid black', backgroundColor:''}} className="form-group">
                    <div style={{padding:'15px',display:'flex',alignItems:'center', width:'100%', height:'50px', backgroundColor:'black'}}>
                        <span style={{color:'white'}}>1</span>
                        <h2 style={{color:'white', fontSize:'14px', padding:'0px 0px 0px 15px'}}>ADRESSE DE LIVRAISON</h2>
                    </div>
                        <div style={{width:'100%', padding:'30px'}}>
                        <h1>Vos Informations</h1>
                        <label className="text-muted">Email*</label>
                    <input
                    name="email"
                    type="email"
                    style={{backgroundColor:'#EEEEEE'}}
                    className="form-control"
                    onChange={handleChangeEmail}
                    value={data.email}
                    
                />
                <label className="text-muted">Nom*</label>
                <input
                    name="name"
                    type="text"
                    style={{backgroundColor:'#EEEEEE'}}
                    className="form-control"
                    onChange={handleChangeName}
                    value={data.name}
                />
                <label className="text-muted">Prénom</label>
                <input
                    type="text"
                    className="form-control"
                    style={{backgroundColor:'#EEEEEE'}}
                    onChange={handleChangePrenom}
                    value={data.prename}
                />
                <label className="text-muted">Adresse</label>
                <input
                    type="text"
                    className="form-control"
                    style={{backgroundColor:'#EEEEEE'}}
                    onChange={handleAdress}
                    value={data.address}
                />
                <label className="text-muted">Code Postal</label>
                <input
                    type="text"
                    className="form-control"
                    style={{backgroundColor:'#EEEEEE'}}
                    
                />
                <label className="text-muted">Ville</label>
                <input
                    type="text"
                    className="form-control"
                    style={{backgroundColor:'#EEEEEE'}}
                    value={data.city}
                    onChange={handleChangeCity}
                />
                <div style={{width:'100%', height:'60px',display:'flex', justifyContent:'center'}}>
                <button onClick={disableDiv} style={{marginTop:'20px', textAlign:'center'}} className="btn btn-dark">Valider</button>
                </div>
                </div>
                </div>
                <div style={{width:'60%', height:'400px', backgroundColor:'', border:'1px solid black'}}>
                <div style={{backgroundColor:'black', height:'50px', display:'flex', alignItems:'center'}}>
                        <p style={{color:'white'}}>2</p>
                        <h2 style={{color:'white', fontSize:'14px', padding:'0px 0px 0px 15px'}}>PAIEMENT</h2>
                </div>
                        {showError(data.error)}
                        {showSuccess(data.success)}
                         {ShowDropIn()}
            </div>
            </div>
            <div style={{width:'30%'}}>
            {items.map((product, i) => (
                    <CardCheckout
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        setRun={setRun}
                        run={run}
                    />))}
            </div>
            
        </div>
        </>
        }
        </>
        );
}

export default CheckoutDirect;
    

import React, { useState, useEffect } from 'react';
import Informations from './Informations';
import DropIn from 'braintree-web-drop-in-react';
import { getBraintreeClientToken1, processPayment1, createInviteOrder } from './apiCore';
import { isAuthenticated, isIdentified } from '../auth/index';
import { Redirect } from 'react-router-dom';
import Header2 from './Header2'
import Layout from './Layout'
import { signoutInvite } from '../auth';
import CardCheckout from './CardCheckout';
import { getCart } from './cartHelper';







const CheckoutDirectInvite = ({ history }) => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);
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
        setItems(getCart());
    }, [run]);

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
    const handleChangeCity = event => {
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
        <Header2/>
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

export default CheckoutDirectInvite;
    

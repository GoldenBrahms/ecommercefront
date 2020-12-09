import React, { useState, useEffect } from 'react';
import Informations from './Informations';
import DropIn from 'braintree-web-drop-in-react';
import { getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { isAuthenticated } from '../auth/index';
import { Redirect, Link } from 'react-router-dom';
import Header from './Header';
import CardCheckout from './CardCheckout';
import { getCart, emptyCart } from './cartHelper';
import  BreadCrumb  from './BreadCrumb';
import usePathname from './Pathname'
import { userAdresse } from '../auth/index';
import Date2 from './Date'






const CheckoutDirect = ({ history, products}) => {
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
        adresse: '',
        ville: '',
        codePostal: ''
    });

    const { user: {_id, name, prename, email }} = isAuthenticated();
    const {  adresse, ville, codePostal } = data;

    const width = window.innerWidth;

    const breakpoint = 620;

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;

    console.log(usePathname())

   
    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

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
               amount: 29
           }
           processPayment(userId, token, paymentData)
           .then(response => {
               const createOrderData = {
                   transaction_id: response.transaction_id,
                   address: deliveryAdress,
                   city: deliveryCity,
                   amount: response.transaction.amount
               }
               createOrder(userId, token, createOrderData)
               emptyCart()
               history.push('/remerciement')
               setData({...data, success: response.success })
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

    const path = usePathname()
    useEffect(() => {
        setData({ ...data, email: email, name: name, prename: prename})
        getToken(userId, token);
        setItems(getCart());
        
    }, [run]);
    const handleZipcode = event => {
        //document.getElementById("ZipCode").style.display = 'none';
        setData({...data, zipcode: event.target.value})
        console.log(data.zipcode)
    }
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
        setData({...data, adresse: event.target.value})
        console.log(data.adresse)
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
        setData({...data, ville: event.target.value})
        console.log(data.ville)
    }
    const handleChangeCodePostal = event => {
        setData({...data, codePostal: event.target.value})
        console.log(data.codePostal)
    }
    function scrollWin() {
        if(data.name){
        window.scrollBy(0, 750);}
        else {
            document.getElementById("ErrorName").style.borderColor= "red"
            document.getElementById("ErrorName").style.boxShadow= "1px 2px 2px 2px red"
        }
      }
    function scrolltoTopWin() {
        
        window.scrollBy(0, -600);
      }

    const disableDiv = event => {
        event.preventDefault()
        //on met a jour les informations users
        userAdresse({email, adresse, ville, codePostal})
        if (data.name && data.prenom && data.email){
        document.getElementById("divBlock").style.display = "none";}
        history.push("/paiement-sécurisée")
    }
    return (
        <>
        { width < breakpoint ? 
        <>
                <Header/>
             <div style={{backgroundColor:'' , width:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:''}}>
                <div style={{width:'100%', height:'800px', border:'1px solid black', backgroundColor:'', marginTop:'20px'}} className="form-group">
                    <div style={{padding:'15px',display:'flex',alignItems:'center', width:'100%', height:'50px', backgroundColor:'black'}}>
                        <span style={{color:'white', margin:'0 5px 0 0px'}}>1</span>
                        <h2 style={{color:'white', fontSize:'14px', margin:'0', padding:'0px 0px 0px 0px'}}>ADRESSE DE LIVRAISON</h2>
                    </div>
                        <div style={{width:'100%', padding:'20px 20px 0px 20px'}}>
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
                    id="ErrorName"
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
                    value={data.address}
                    onChange={handleAdress}
                />
                <label className="text-muted">Code Postal</label>
                <input
                    type="text"
                    className="form-control"
                    style={{backgroundColor:'#EEEEEE'}}
                    value={data.zipcode}
                    onChange={handleZipcode}
                />
                <label className="text-muted">Ville</label>
                <input
                    type="text"
                    className="form-control"
                    style={{backgroundColor:'#EEEEEE'}}
                    value={data.city}
                    onChange={handleChangeCity}
                />
                <h5 style={{marginTop:'20px'}}>Ajouter des instructions pour la livraison</h5>
                <p>Avons-nous besoin de directions supplémentaires pour trouver cette adresse?</p>
                <textarea style={{width:'50%'}}/>

                <div style={{width:'100%', height:'60px',display:'flex', justifyContent:'center'}}>
                <button onClick={scrollWin} style={{marginTop:'20px', textAlign:'center'}} className="btn btn-dark">Valider</button>
                </div>
                </div>
                </div>
        
       <div style={{width:'100%', height:'450px', backgroundColor:'', border:'1px solid black', marginBottom:'30px'}}>

                <div style={{padding:'15px',display:'flex',alignItems:'center', width:'100%', height:'50px', backgroundColor:'black'}}>
                        <p style={{color:'white', margin:'0 5px 0 0'}}>2 </p>
                        <h2 style={{color:'white', fontSize:'14px', margin:'0', padding:'0px 0px 0px 0px'}}>VERIFICATION</h2>
                </div>
                <div style={{padding:'20px', marginBottom:'30px'}}>
                    <h5>Adresse de livraison</h5>
                <p>Votre nom :{data.name}</p>
                <p>Votre prénom : {data.prename}</p>
                <p>Votre adresse : {data.adresse}</p>
                <p>Votre ville : {data.city}</p>
                <p>Votre code postal : {data.zipcode}</p>
                <p>Date de livraison estimée: <Date2/></p>
                <button onClick={scrolltoTopWin}  className="btn btn-dark">Modifier mes informations</button>
                <button onClick={scrollWin} style={{marginTop:'10px'}} className="btn btn-dark">Valider mes informations</button>

                </div>
                </div>
                <div style={{width:'100%', height:'450px', backgroundColor:'', border:'1px solid black'}}>
                <div style={{padding:'15px',display:'flex',alignItems:'center', width:'100%', height:'50px', backgroundColor:'black'}}>
                        <p style={{color:'white', margin:'0 5px 0 0'}}>3</p>
                        <h2 style={{color:'white', fontSize:'14px',margin:'0', padding:'0px 0px 0px 0px'}}>PAIEMENT</h2>
                </div>
                        {showError(data.error)}
                        {showSuccess(data.success)}
                         {ShowDropIn()}
            </div>
   </div>
   <div style={{width:'100%', height:'50px'}}></div>

   </>
        :
        <>
        <Header/>
        <div style={{width:'100%', height:'1600px', display:'flex', justifyContent:'', textAlign:'' , backgroundColor:''} }>
             <div style={{backgroundColor:'' , width:'65%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:''}}>
                <div style={{width:'60%', height:'800px', border:'1px solid black', backgroundColor:'', marginTop:'20px'}} className="form-group">
                    <div style={{padding:'15px',display:'flex',alignItems:'center', width:'100%', height:'50px', backgroundColor:'black'}}>
                        <span style={{color:'white', margin:'0 5px 0 0px'}}>1</span>
                        <h2 style={{color:'white', fontSize:'14px', margin:'0', padding:'0px 0px 0px 0px'}}>ADRESSE DE LIVRAISON</h2>
                    </div>
                        <div style={{width:'100%', padding:'20px 20px 0px 20px'}}>
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
                    id="ErrorName"
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
                    value={data.address}
                    onChange={handleAdress}
                />
                <label className="text-muted">Code Postal</label>
                <input
                    type="text"
                    className="form-control"
                    style={{backgroundColor:'#EEEEEE'}}
                    value={data.zipcode}
                    onChange={handleZipcode}
                />
                <label className="text-muted">Ville</label>
                <input
                    type="text"
                    className="form-control"
                    style={{backgroundColor:'#EEEEEE'}}
                    value={data.city}
                    onChange={handleChangeCity}
                />
                <h5 style={{marginTop:'20px'}}>Ajouter des instructions pour la livraison</h5>
                <p>Avons-nous besoin de directions supplémentaires pour trouver cette adresse?</p>
                <textarea style={{width:'50%'}}/>

                <div style={{width:'100%', height:'60px',display:'flex', justifyContent:'center'}}>
                <button onClick={scrollWin} style={{marginTop:'20px', textAlign:'center'}} className="btn btn-dark">Valider</button>
                </div>
                </div>
                </div>
                <div style={{width:'60%', height:'420px', backgroundColor:'', border:'1px solid black', marginBottom:'30px'}}>

                <div style={{padding:'15px',display:'flex',alignItems:'center', width:'100%', height:'50px', backgroundColor:'black'}}>
                        <p style={{color:'white', margin:'0 5px 0 0'}}>2 </p>
                        <h2 style={{color:'white', fontSize:'14px', margin:'0', padding:'0px 0px 0px 0px'}}>VERIFICATION</h2>
                </div>
                <div style={{padding:'20px', marginBottom:'30px'}}>
                    <h5>Adresse de livraison</h5>
                <p>Votre nom :{data.name}</p>
                <p>Votre prénom : {data.prename}</p>
                <p>Votre adresse : {data.adresse}</p>
                <p>Votre ville : {data.city}</p>
                <p>Votre code postal : {data.zipcode}</p>
                <p>Date de livraison estimée: <Date2/></p>
                <button onClick={scrolltoTopWin}  className="btn btn-dark">Modifier mes informations</button>
                <button onClick={scrollWin} style={{marginLeft:'10px'}} className="btn btn-dark">Valider mes informations</button>

                </div>
                </div>
                <div style={{width:'60%', height:'450px', backgroundColor:'', border:'1px solid black'}}>
                <div style={{padding:'15px',display:'flex',alignItems:'center', width:'100%', height:'50px', backgroundColor:'black'}}>
                        <p style={{color:'white', margin:'0 5px 0 0'}}>3</p>
                        <h2 style={{color:'white', fontSize:'14px',margin:'0', padding:'0px 0px 0px 0px'}}>PAIEMENT</h2>
                </div>
                        {showError(data.error)}
                        {showSuccess(data.success)}
                         {ShowDropIn()}
            </div>
            </div>
            <div style={{width:'30%', position:'sticky', backgroundColor:''}}>
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
    

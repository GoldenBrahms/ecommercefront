import React, {useState, useEffect} from 'react'
import BreadCrumb from './BreadCrumb'
import DropIn from 'braintree-web-drop-in-react';
import { getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { isAuthenticated } from '../auth/index';
import { getCart, emptyCart } from './cartHelper';
import Header from './Header';




const Paiement = ({ history, products}) => {
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
    const token = isAuthenticated() && isAuthenticated().token;
    const userId = isAuthenticated() && isAuthenticated().user._id;
    let deliveryAdress = data.address
    let deliveryCity = data.city

    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };
    const getToken = (userId, token, res) => {
       
        getBraintreeClientToken(userId, token).then(data => {
             if (data.error) {
                 console.log(data.error);
                 setData({ ...data, error: data.error });
             } else {
                 console.log("{name}")
 
                 console.log(data);
                 setData({ clientToken: data.clientToken });
             }
         });
     };
    useEffect(() => {
        getToken(userId, token);
        
    }, []);
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
               amount: getTotal(products)
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
    const ShowDropIn = () => (
        <div onBlur={() => setData({...data, error: ""})} style={{width:'50%'}}>
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
    return (
        <div>
            <Header/>
        <div id="bread" style={{backgroundColor:'', width:'100%', display:'flex', alignItems:'center', justifyContent:'center', height:'50px'}}>
            <BreadCrumb/>
        </div>
            <h1>Paiement</h1>
            {ShowDropIn()}
        </div>
    )
}

export default Paiement;
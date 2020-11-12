import React, { useState, useEffect } from 'react';
import Informations from './Informations';
import DropIn from 'braintree-web-drop-in-react';
import { getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { isAuthenticated } from '../auth/index';
import { Redirect } from 'react-router-dom';
import Signin2 from '../user/Signin2'
import CompteInvite from '../user/CompteInvite'
import Header from './Header'
import Layout from './Layout'




const Checkout = () => {
    return (
        <div style={{width:'100%',height:'80vh', display:'flex'}}>
        <div style={{backgroundColor:'blue', width:'50%'}}>
            <Signin2/>
        </div>
        <div style={{backgroundColor:'', width:'50%'}}>
           {/*} <CompteInvite/> */}
        </div>
        </div>
    )
}

export default Checkout;
    

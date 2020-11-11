import React, { useState, useEffect } from 'react';
import Informations from './Informations';
import DropIn from 'braintree-web-drop-in-react';
import { getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { isAuthenticated } from '../auth/index';
import { Redirect } from 'react-router-dom';
import Signin from '../user/Signin'
import CompteInvite from '../user/CompteInvite'
import Menu from './Menu'
import Layout from './Layout'




const Checkout = () => {
    return (
        <div style={{width:'100%',height:'100vh',display:'flex'}}>
        <div style={{backgroundColor:'blue', width:'50%'}}>
            <Signin/>
        </div>
        <div style={{backgroundColor:'yellow', width:'50%'}}>
           {/*} <CompteInvite/> */}
        </div>
        </div>
    )
}

export default Checkout;
    

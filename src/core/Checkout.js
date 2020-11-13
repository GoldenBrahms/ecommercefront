import React, { useState, useEffect } from 'react';
import Informations from './Informations';
import DropIn from 'braintree-web-drop-in-react';
import { getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { isAuthenticated } from '../auth/index';
import { Redirect } from 'react-router-dom';
import Signin2 from '../user/Signin2'
import CompteInvite from '../user/CompteInvite'
import Header2 from './Header2'
import Layout from './Layout'
import {Route } from 'react-router-dom'




const Checkout = () => {
    return (
        <div style={{width:'100%',height:'80vh'}}>
            <Header2/>
            <div style={{display:'flex'}}>
                <Route  exat path="/Checkout" component={Signin2} />
                <CompteInvite/>
            </div>
        </div>
    )
}

export default Checkout;
    

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
    const width = window.innerWidth;

    const breakpoint = 620;
    return (
        
        <>
            {width < breakpoint? 
            <div style={{display:'flex', flexDirection:'column', width:'100%', height:'850px'}}>
            <Header2/>
            <Route  exat path="/Checkout" component={Signin2} />
            <div style={{marginLeft:'35px', width:'80%', height:'1px', backgroundColor:'black'}}></div>
            <CompteInvite/>
             </div>
            :
            <div style={{width:'100%',height:'82vh'}}>
            <Header2/>
            <div style={{display:'flex', height:'100%', justifyContent:'center'}}>
                <Route  exat path="/Checkout" component={Signin2} />
                <div style={{ width:'1px', height:'450px',marginTop:'20px',right:'800px', backgroundColor:'#CBCBCB'}}></div>
                <CompteInvite/>
            </div>
        </div>
            }
        </>
    )
}

export default Checkout;
    

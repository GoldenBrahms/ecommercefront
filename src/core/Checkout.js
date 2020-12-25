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
import {Route, Link} from 'react-router-dom'
import TabPanel from './TabPanel'




const Checkout = () => {
    const width = window.innerWidth;

    const breakpoint = 620;
    

    return (
        
        <>
            {width < breakpoint? 
            <>
            <Header2/>
            <h4 style={{textAlign:'center'}}>Identification</h4>
            <TabPanel/>
            

             </>
            :
            <div style={{width:'100%',height:'82vh'}}>
            <Header2/>
            <div style={{display:'flex', height:'100%', justifyContent:'center'}}>
                <Route  exat path="/identifier" component={Signin2} />
               {/*} <div style={{ width:'1px', height:'450px',marginTop:'20px',right:'800px', backgroundColor:'#CBCBCB'}}></div>
                <CompteInvite/>*/}
            </div>
        </div>
            }
        </>
    )
}

export default Checkout;
    

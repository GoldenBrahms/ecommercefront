import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart } from './cartHelper';
import { itemTotal } from './apiCore'

import Card from './Card';
import CardCart from './CardCart';
import Checkout3 from './Checkout';
import Header from './Header'
import Visa from '../images/visa_new.png'
import Mastercard from '../images/mastercard_new.png'
import Paypal from '../images/paypal.png'
import CB from '../images/carte_bancaire.png'
import Amex from '../images/amex_new.png'
import { isAuthenticated } from '../auth';
import Faq from './Faq'

const Cart = ({products}) => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
        document.getElementById("titre").textContent = "Mon Panier"
    }, [run]);

    const width = window.innerWidth;
    const total = itemTotal();


    const breakpoint = 720;

    const showItems = items => {
        return (
            <div>
                <h2>Your cart has {`${items.length}`} items</h2>
                <hr />
                {/*{items.map((product, i) => (
                    <Card
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        setRun={setRun}
                        run={run}
                    />
                ))}*/}
            </div>
        );
    };

    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };
    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h2>
    );

    return (
        <>
        {width < breakpoint ? 
            <>
            <Header/>
            { total === 0 ? 
            <div>
                <h1 style={{margin:'20px 0 10px 0', letterSpacing:'-.025em', fontSize:'24px', textAlign:'center', fontWeight:'700'}}>Articles de votre panier</h1>
                <p style={{textAlign:'center', letterSpacing:'-.025em', fontWeight:'300'}}>Votre panier est vide</p>
            </div>
            :
            <div style={{display:'flex', flexDirection:'column', padding:'10px'}}>
                <h2 className="mb-4">Articles de votre panier</h2>
                <div>
                        {!isAuthenticated() &&
                            <Link type="button" to="/identifier" style={{width:'100%', borderRadius:'30px', marginBottom:'20px'}}class="btn btn-inverse btn-dark"><b>PAIEMENT</b></Link>}
                            {isAuthenticated() &&
                              <Link type="button" to="/paiement-securisée" style={{width:'100%', borderRadius:'30px', marginBottom:'20px'}}class="btn btn-inverse btn-dark"><b>PAIEMENT</b></Link>}
                          </div>
                <div style={{width:'100%', backgroundColor:'#e5e5e5'}}>
                        {items.map((product, i) => (
                    <CardCart
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        setRun={setRun}
                        run={run}
                    />))}
                     
                        </div>
                        <div style={{marginTop:'20px', paddingLeft:'10px'}}>
                            <h3>Options de paiement</h3>
                            <ul style={{display:'flex' ,marginTop:'20px', padding:'0'}}>
                                    <li style={{ listStyleType:'none'}}><img style={{width:'50px'}} src={Visa} /></li>
                                    <li style={{marginLeft:'5px', listStyleType:'none'}}><img style={{width:'50px'}} src={Mastercard}/></li>
                                    <li style={{marginLeft:'5px', listStyleType:'none'}}><img style={{width:'50px'}} src={Paypal}/></li>
                                    <li style={{marginLeft:'5px', listStyleType:'none'}}><img style={{width:'50px'}} src={CB}/></li>
                                    <li style={{marginLeft:'5px', listStyleType:'none'}}><img style={{width:'50px'}} src={Amex}/></li>
                                </ul>
                                <p style={{fontSize:"13px", fontWeight:'700'}}>Votre transaction est Totalement sécurisée.</p>
                        </div>
                        <div style={{padding:'20px 0px 0px 10px'}}>
                                <span style={{fontSize:"16px"}}>Total des produits </span>
                                
                                <span style={{fontSize:"16px", float:'right'}}>29,00E </span>
                        </div>
                        <div style={{padding:'0 0 20px 10px', borderBottom:'2px dotted #dddddd'}}>
                                <span style={{fontSize:"16px"}}>Livraison </span>
                                <span style={{fontSize:"16px", float:'right'}}>Gratuite </span>
                        </div>
                        <br/><br/>
                        <div style={{padding:'0 0 10px 0', borderBottom:'2px solid #dddddd'}}>
                            <span style={{padding:'0px', marginBottom:'0px'}}>Sous-total:</span>
                            <span style={{float:'right'}}>29,00E</span>
                        </div>
                        <div>
                        <span><b>Total du panier:</b></span>
                        <span style={{float:'right'}}><b>29,00E</b></span>
                        </div>
                        <div style={{marginTop:'20px'}}>
                        {!isAuthenticated() &&
                            <Link type="button" to="/identifier" style={{width:'100%', borderRadius:'30px'}}class="btn btn-inverse btn-outline-dark"><b>PAIEMENT</b></Link>}
                            {isAuthenticated() &&
                              <Link type="button" to="/paiement-securisée" style={{width:'100%', borderRadius:'30px'}}class="btn btn-inverse btn-outline-dark"><b>PAIEMENT</b></Link>}
                          </div>

            </div>}
            <Faq/>
            </>
        :
        <>
        <Header/>
        { total === 0 ? 
        <div>
            <h1 style={{margin:'20px 0 10px 0', letterSpacing:'-.025em', fontSize:'24px', textAlign:'center', fontWeight:'700'}}>Articles de votre panier</h1>
            <p style={{textAlign:'center', letterSpacing:'-.025em', fontWeight:'300'}}>Votre panier est vide</p>
        </div>
        : 
        <div style={{padding:'70px',width:'100%', height:'600px', backgroundColor:''}}>

        <h2 className="mb-4">Articles de votre panier ({itemTotal()} article)</h2>
                    <div style={{display:'flex',width:'100%', height:'200px', backgroundColor:''}}>
                        <div style={{width:'60%', backgroundColor:'#e5e5e5'}}>
                        {items.map((product, i) => (
                    <CardCart
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        setRun={setRun}
                        run={run}
                    />))}
                        </div>
                        <div style={{paddingLeft:'50px',width:'40%',  backgroundColor:''}}>
                            <div style={{padding:'5px 0px'}}>
                                <span style={{fontSize:"16px"}}>Total des produits </span>
                                <span style={{fontSize:"16px", float:'right'}}>29,00E </span>
                            </div>
                            <div style={{padding:'5px 0px'}}>
                                <span style={{fontSize:"16px"}}>Livraison </span>
                                <span style={{fontSize:"16px", float:'right'}}>Gratuite </span>
                            </div>
                            <hr style={{borderTop:'1px dotted #dddddd'}}/>
                            <div style={{padding:'5px 0px'}}>
                                <span style={{fontSize:"16px"}}>Sous-total: </span>
                                <span style={{fontSize:"16px", float:'right'}}>29,00E </span>
                            </div>
                            <hr style={{borderTop:'2px solid #dddddd'}}/>
                            <div style={{padding:'5px 0px'}}>
                                <span style={{fontSize:"16px"}}><b>Total de votre panier:</b></span>
                                <span style={{fontSize:"16px", float:'right'}}>29,00E </span>
                            </div>
                            {!isAuthenticated() &&
                            <Link type="button" to="/identifier" style={{width:'200px'}}class="btn btn-inverse btn-outline-dark"><b>PAIEMENT</b></Link>}
                            {isAuthenticated() &&
                              <Link type="button" to="/paiement-securisée" style={{width:'200px'}}class="btn btn-inverse btn-outline-dark"><b>PAIEMENT</b></Link>}
                            <div>
                                <ul style={{display:'flex' ,marginTop:'20px', padding:'0'}}>
                                    <li style={{ listStyleType:'none'}}><img style={{width:'50px'}} src={Visa} /></li>
                                    <li style={{marginLeft:'5px', listStyleType:'none'}}><img style={{width:'50px'}} src={Mastercard}/></li>
                                    <li style={{marginLeft:'5px', listStyleType:'none'}}><img style={{width:'50px'}} src={Paypal}/></li>
                                    <li style={{marginLeft:'5px', listStyleType:'none'}}><img style={{width:'50px'}} src={CB}/></li>
                                    <li style={{marginLeft:'5px', listStyleType:'none'}}><img style={{width:'50px'}} src={Amex}/></li>
                                </ul>
                                <p style={{fontSize:"13px", fontWeight:'700'}}>Votre transaction est Totalement sécurisée.</p>
                            </div>
                        </div>
                    </div>
                   {/* <h2 className="mb-4">{items.length > 0 ? showItems(items) : noItemsMessage()}</h2>
                    <hr />
                   {/* <Checkout3 products={items} setRun={setRun} run={run} />*/}
        </div>}
        <Faq/>
        </>
}</>
    );
};

export default Cart;
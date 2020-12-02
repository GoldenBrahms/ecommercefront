import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { emptyCart, getCart } from './cartHelper';
import { itemTotal } from './apiCore'
import { Checkbox } from 'antd';
import { GiftOutlined, CheckCircleOutlined } from '@ant-design/icons'
import Card from './Card';
import CardCart from './CardCart';
import Checkout3 from './Checkout';
import Header from './Header'
import Visa from '../images/visa_new.png'
import Mastercard from '../images/mastercard_new.png'
import Paypal from '../images/paypal.png'
import CB from '../images/carte_bancaire.png'
import Amex from '../images/amex_new.png'
import EmptyCart from '../images/emptycart.png'
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
                {noItemsMessage}
                <div>
                </div>
                <img style={{marginLeft:'60px', width:'70%', height:'100%' }} src={EmptyCart}/>
                <p style={{textAlign:'center', letterSpacing:'-.025em', fontWeight:'300'}}>Votre panier est vide</p>
                <p style={{textAlign:'center', fontSize:'26px',letterSpacing:'-.025em', fontWeight:'300'}}>Retourner sur la boutique en cliquant <a href="/">ici</a></p>
            </div>
            :
            <>
            <div style={{padding:'20px 10px 0px 20px'}}>
                <p style={{}}>Sous-total: <span style={{fontWeight:'700',color:'#B12704'}}>29 €</span></p>
                    <p style={{color:'green'}}><CheckCircleOutlined style={{fontSize:'20px', color:'green'}} /> Votre commande est éligible à la livraison Standard gratuite en France métropolitaine.</p>
                    <Checkbox><GiftOutlined style={{fontSize:'20px'}}/> Commande contenant un cadeau</Checkbox>
            </div>
            <div style={{ paddingTop:'20px', position:'sticky',zIndex:'1',borderBottom:'0.5px solid #cbcbcb', alignItems:'center', display:'flex', flexDirection:'column', width:'100%', height:'70px', backgroundColor:'white', top:'0px'}}>
            
                        {!isAuthenticated() &&
                            <Link type="button" to="/identifier" style={{width:'90%', borderRadius:'30px', marginBottom:'20px'}}class="btn btn-inverse btn-dark"><b>Passer la commande</b></Link>}
                            {isAuthenticated() &&
                              <Link type="button" to="/paiement-securisée" style={{width:'90%', borderRadius:'30px', marginBottom:'20px'}}class="btn btn-inverse btn-dark"><b>Passer la commande</b></Link>}
               </div>
            <div style={{display:'flex', flexDirection:'column', padding:'0px'}}>
                <div style={{width:'100%', backgroundColor:'', borderBottom:'1px solid #dddddd'}}>
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
                        <div style={{padding:'10px', width:'100%'}}>
                            <h3 style={{fontWeight:'700', fontSize:'18px'}}>Les retours sont faciles</h3>
                            <p> Retournez vos articles éligibles jusqu'au 31 janvier</p>
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
                        
                        

            </div></>}
            <Faq/>
            </>
        :
        <>
        <Header/>
        { total === 0 ? 
        <div>
            <h1 style={{margin:'20px 0 10px 0', letterSpacing:'-.025em', fontSize:'34px', textAlign:'center', fontWeight:'700'}}>Articles de votre panier</h1>
            <div style={{display:'flex', justifyContent:'center'}}>
            <img style={{marginLeft:'60px', width:'500px' }} src={EmptyCart}/>
            </div>
            <p style={{textAlign:'center', fontSize:'26px',letterSpacing:'-.025em', fontWeight:'300'}}>Votre panier Lirya est vide</p>
            <p style={{textAlign:'center', fontSize:'26px',letterSpacing:'-.025em', fontWeight:'300'}}>Retourner sur la boutique en cliquant <a href="/">ici</a></p>
        </div>
        : 
        <div style={{padding:'20px 70px 0px 70px',width:'100%', height:'400px', backgroundColor:''}}>

        <h2 className="mb-4">Articles de votre panier ({itemTotal()} article)</h2>
        <div style={{width:'60%', height:'20px', backgroundColor:'', padding:'0px', display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
            <span style={{textAlign:'right', marginRight:'10px', paddingBottom:'0px', fontSize:'18px', color:'#565959'}}>Prix</span>
                        </div>
                    <div style={{display:'flex',width:'100%', height:'200px', backgroundColor:''}}>
                        
                        <div style={{width:'60%', backgroundColor:'', borderTop:'1px solid black', borderBottom:'1px solid black'}}>
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
                                <span style={{fontSize:"16px", float:'right'}}>29,00 € </span>
                            </div>
                            <div style={{padding:'5px 0px'}}>
                                <span style={{fontSize:"16px"}}>Livraison </span>
                                <span style={{fontSize:"16px", float:'right'}}>Gratuite </span>
                            </div>
                            <hr style={{borderTop:'1px dotted #dddddd'}}/>
                            <div style={{padding:'5px 0px'}}>
                                <span style={{fontSize:"16px"}}>Sous-total: </span>
                                <span style={{fontSize:"16px", float:'right'}}>29,00 € </span>
                            </div>
                            <hr style={{borderTop:'2px solid #dddddd'}}/>
                            <div style={{padding:'5px 0px'}}>
                                <span style={{fontSize:"16px"}}><b>Total de votre panier:</b></span>
                                <span style={{fontSize:"16px", float:'right'}}>29,00 € </span>
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
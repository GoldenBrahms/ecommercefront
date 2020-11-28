import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart } from './cartHelper';
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

const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
    }, [run]);



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

    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h2>
    );

    return (
        <>
        <Header/>
        <div style={{padding:'70px',width:'100%', height:'600px', backgroundColor:''}}>

                    <h2 className="mb-4">Articles de votre panier</h2>
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
                                <span style={{fontSize:"16px", float:'right'}}>Prix </span>
                            </div>
                            <div style={{padding:'5px 0px'}}>
                                <span style={{fontSize:"16px"}}>Livraison </span>
                                <span style={{fontSize:"16px", float:'right'}}>Gratuit </span>
                            </div>
                            <hr style={{borderTop:'1px dotted #dddddd'}}/>
                            <p>Sous-total:</p>
                            <hr style={{borderTop:'2px solid #dddddd'}}/>
                            <p><b>Total du panier:</b></p>
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
        </div>
        </>
    );
};

export default Cart;
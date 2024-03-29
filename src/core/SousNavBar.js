import React from 'react';
import ProductDescription from './ProductDescription'
import { Link, withRouter } from 'react-router-dom'
import './Mobile.css'
import { signout, isAuthenticated } from '../auth/index';



const SousNavBar = () => {
    const width = window.innerWidth;

    const breakpoint = 720;

        return (
            <>
            <div id="Description" style={{ position:'sticky',zIndex:'1',borderBottom:'0.5px solid #cbcbcb', alignItems:'center', display:'flex', width:'100%', height:'50px', backgroundColor:'rgba(255, 255, 255, 0.9)',  top:'0'}}>
                <div style={{width:'250px',paddingLeft:'20px'}}>
                    { width < breakpoint ?
                    <h6>Qurma</h6>
                    : 
                    <h4 id="qurma" className="qurma" style={{display:'', marginLeft:'20px', margin:'0', fontSize:'28'}}>Qurma (version 1)</h4>
                    }
                </div>
                <div style={{position:"absolute",right:"10px", backgroundColor:'', display:'flex', alignItems:'center'}}>
                    { width < breakpoint ? 
                    <>
                     <a style={{ paddingRight:'20px', textDecoration:'none', color:'#525252', fontFamily:'Roboto'}} href="#Faq">Questions Fréquentes</a>
                    </>
                    :
                    <>
                    <a style={{ paddingRight:'20px', textDecoration:'', color:'#525252', fontFamily:'Roboto'}} href="#">Avis</a>
                    <a style={{ paddingRight:'20px', textDecoration:'', color:'#525252', fontFamily:'Roboto'}} href="#Faq">Questions Fréquentes</a>
                    <span style={{ paddingRight:'20px', textDecoration:'none',fontSize:'18px', color:'rgb(177, 39, 4)', fontFamily:'Roboto'}} href="">29 €</span>
                    
                    </>
                    }
                    { width < breakpoint ?
                        !isAuthenticated() ?
                        <a className="btn btn-primary btn-sm" href="/identifier">Acheter</a>

                        :
                         isAuthenticated() &&(
                        <a className="btn btn-primary btn-sm" href="/CheckoutDirect">Acheter</a>)
                       
                    : 
                    !isAuthenticated() ?
                        <a className="btn btn-primary btn-sm" href="/identifier">Acheter</a>                      
                        :
                         isAuthenticated() &&(
                        <Link className="btn btn-primary btn-sm" to="/CheckoutDirect">Acheter</Link>)
                    
                    }
                    
                    { width < breakpoint ? "" :
                    isAuthenticated() && (
                        <Link className="nav-link" to="/user/dashboard">
                         Mon compte
                    </Link>
                    )
                    }
                </div>
            </div>
            <div style={{float:'right', position:'sticky', width:'100%', height:'20px', backgroundColor:'rgba(255, 255, 255, 0.8)', top:'50px'}}>
            { width < breakpoint ?

            <p style={{textAlign:'center', top:'0px', fontSize:'x-small'}}>Livraison gratuite sous 48h en France metropolitaine</p>
            :
            <p style={{textAlign:'center', top:'0px'}}>Livraison gratuite sous 48h en France metropolitaine</p>
            }
            </div>
            </>
        );
}

export default withRouter(SousNavBar)
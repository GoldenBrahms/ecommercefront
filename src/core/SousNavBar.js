import React from 'react';
import ProductDescription from './ProductDescription'
import { Link, withRouter } from 'react-router-dom'

const SousNavBar = () => {

        return (
            <>
            <div id="navbar" style={{ position:'sticky',zIndex:'1',borderBottom:'0.5px solid #cbcbcb', alignItems:'center', display:'flex', width:'100%', height:'50px', backgroundColor:'rgba(255, 255, 255, 0.9)',  top:'0'}}>
                <div style={{width:'250px',paddingLeft:'20px'}}>
                    <h4 style={{marginLeft:'20px', margin:'0', fontSize:'28', display:'inline-block'}}>Qurma (version 1)</h4>
                </div>
                <div style={{position:"absolute",right:"10px", backgroundColor:'', display:'flex', alignItems:'center'}}>
                    <Link style={{ paddingRight:'20px', textDecoration:'none', color:'#525252', fontFamily:'Roboto'}} to="/">Présentation</Link>
                    <Link className="btn btn-primary" to="/Checkout">Acheter</Link>
                    <Link className="nav-link" to="/user/dashboard">
                         Dashboard
                    </Link>
                </div>
            </div>
            <div style={{float:'right', position:'sticky', width:'100%', height:'20px', backgroundColor:'rgba(255, 255, 255, 0.8)', top:'50px'}}>
            <p style={{textAlign:'center', top:'0px'}}>Livraison gratuite sous 48h en France metropolitaine</p>
            </div>
            </>
        );
}

export default withRouter(SousNavBar)
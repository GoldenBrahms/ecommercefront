import React, { useEffect } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom'
import SousNavBar from "./SousNavBar";
import ProductDescritpiton from "./ProductDescription"


const Header = () => {
    
    const handleScroll = e => {
        var header = document.getElementById("navbar");
        console.log(window.pageYOffset)
        var sticky = header.pageYOffset;
        if (window.pageYOffset > 48 && window.pageYOffset != 0){
            document.getElementById("navbar").style.position = "fixed";
        }
        else {
            document.getElementById("navbar").style.marginTop = "0px";
        }
    }
   
    return (
        <div>
            <div style={{position:'block', width:'100%', height:"50px", backgroundColor:'#303030', top:'0', margin:'0', padding:''}}>
            <h1 style={{marginTop:'0', marginLeft:'20px', color:'#c1c1c1', fontFamily:'Roboto'}}>Samemo</h1>
            </div>
            <SousNavBar/>



        </div>
    );
}

export default withRouter(Header);
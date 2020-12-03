import React, {useState, useEffect} from 'react';
import { Link} from 'react-router-dom'
import {  withRouter, Redirect } from 'react-router-dom'
import { LockOutlined } from '@ant-design/icons'
import Visa from '../images/visa.png'


const Footer = ({ props }) => {

 
    const width = window.innerWidth;
    
    const breakpoint = 720;
    
    return (
                    <>
                        {width < breakpoint? 
                        <>
                        
                        <div style={{  height:'727px', backgroundColor:'#f4f4f4', display:'flex', flexDirection:'column'}}>
                        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <ul style={{listStyleType:'none'}}>
                                <h4 style={{color:"#444"}}>Nous Connaitre</h4>
                                <li style={{fontSize:'14px'}}><a style={{color:'black'}} href="#">À propos de Samemo</a></li>
                                <li style={{fontSize:'14px'}}>Numéros de télephone</li>
                            </ul>
                            <ul></ul>
                            <ul style={{listStyleType:'none',}}>
                                <h4 style={{color:"#444"}}>Contact</h4>
                                <li style={{fontSize:'14px'}}> <a style={{color:'black'}}  href="/contact">Contactez-nous</a></li>
                                <li style={{fontSize:'14px'}}>Numéros de télephone</li>
                            </ul>
                            <ul></ul>
                            <ul style={{listStyleType:'none',}}>
                                <h4 style={{color:"#444"}}>Contact</h4>
                                <li style={{fontSize:'14px'}}>Contactez-nous</li>
                                <li style={{fontSize:'14px'}}>Numéros de télephone</li>
                            </ul>
                            <ul></ul>
                            <ul style={{listStyleType:'none',}}>
                                <h4 style={{color:"#444"}}>Besoin d'aide?</h4>
                                <li style={{fontSize:'14px'}}><a style={{color:'black'}}  href="#">Samemo et le Covid-19</a></li>
                                <li style={{fontSize:'14px'}}><a style={{color:'black'}} href="#">Retours et remplacements</a></li>
                    <li><LockOutlined style={{fontSize:'40px'}} /> Paiement 100% sécurisé </li>
                    <li><img src={Visa}/></li>
                            </ul>

                        </div>
                        <div style={{ backgroundColor:'rgb(48, 48, 48)',display:'flex',justifyContent:"center",width:'100%', marginBottom:'0', borderTop:'1px solid #d2d2d7', paddingTop:'10px'}}>
                            <ul style={{margin:'0',display:'flex', textDecoration:'none', listStyleType:'none', padding:'0', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <h5 style={{margin:'0', marginRight:'20px',color:'white', fontFamily:'Titillium'}}>© 2020, <a href="/" style={{textDecoration:'none', color:'white'}}>Lirya</a></h5>
                                <li><a href='#' style={{fontSize:'11px', textDecoration:'none', color:'white', fontFamily:'Titillium'}}>Engagement de confidentialité</a></li>
                                <li><a href='#' style={{fontSize:'11px', textDecoration:'none', color:'white', fontFamily:'Titillium'}}>Mentions Légales</a></li>
                               <li><a href="#" style={{fontSize:'11px',textDecoration:'none', color:'white', fontFamily:'Titillium'}}>Conditions d'utilisations</a></li>
                                <li><a href="#" style={{fontSize:'11px', textDecoration:'none', color:'white', fontFamily:'Titillium'}}>Utilisations des cookies</a></li>
                            </ul>
                
                        </div>
                        </div>
                        </>
                        :
                        <>
    
                
                        
            <div style={{backgroundColor:'#f4f4f4', display:'flex', width:'100%', height:'200px', paddingLeft:'180px', paddingTop:'20px'}}>
                <ul style={{listStyleType:'none',}}>
                    <h4 style={{color:"#444"}}>Pour mieux nous connaître</h4>
                    <li style={{fontSize:'16px'}}>À propos de Samemo</li>
                    <li style={{fontSize:'16px'}}>Nos engagements</li>
                </ul>
                <ul></ul>
                <ul style={{listStyleType:'none',}}>
                    <h4 style={{color:"#444"}}>Assistance</h4>
                    <li style={{fontSize:'16px'}}><a style={{color:'black'}} href="/Assistance">Contactez-nous</a></li>
                    <li style={{fontSize:'16px'}}>Numéros de télephone</li>
                </ul>
                <ul></ul>
                <ul style={{listStyleType:'none',}}>
                    <h4 style={{color:"#444"}}>Mon compte</h4>
                    <li style={{fontSize:'16px'}}>Créer un compte</li>
                    <li style={{fontSize:'16px'}}>Suivi de colis</li>
                </ul>
                <ul></ul>
                <ul style={{listStyleType:'none',}}>
                    <h4 style={{color:"#444"}}>Besoin d'aide?</h4>
                    <li style={{fontSize:'16px'}}>Samemo et le Covid-19</li>
                    <li style={{fontSize:'16px'}}>Retours et remplacements</li>
                    <li><LockOutlined style={{fontSize:'40px'}} /> Paiement 100% sécurisé </li>
                    <li><img src={Visa}/></li>
                </ul>
            </div>
            <div style={{backgroundColor:'#f4f4f4', padding:'20px',display:'flex',flexDirection:'column', width:'100%', height:'20%', marginBottom:'0', borderTop:'1px solid #d2d2d7'}}>
                <ul style={{margin:'0',display:'flex', textDecoration:'none', listStyleType:'none', padding:'0'}}>
                    <h5 style={{margin:'0', marginRight:'20px',color:'#87878c', fontFamily:'Titillium'}}>© 2020, <a href="/" style={{textDecoration:'none', color:'grey'}}>Lirya</a></h5>
                    <li><a href='/politiquedeconfidentialitée' style={{fontSize:'11px', textDecoration:'none', color:'#555555', fontFamily:'Titillium'}}>Engagement de confidentialité</a></li>
                    <li style={{marginLeft:'20px', marginRight:'20px'}}> | </li>
                    <li><a href='/mentionslegales' style={{fontSize:'11px', textDecoration:'none', color:'#555555', fontFamily:'Titillium'}}>Mentions Légales</a></li>
                    <li style={{marginLeft:'20px', marginRight:'20px'}}> | </li>
                   <li><a href="/conditions-dutilisation" style={{fontSize:'11px',textDecoration:'none', color:'#555555', fontFamily:'Titillium'}}>Conditions générales de vente et d'utilisation</a></li>
                   <li style={{marginLeft:'20px', marginRight:'20px'}}> | </li>
                    <li><a href="#" style={{fontSize:'11px', textDecoration:'none', color:'#555555', fontFamily:'Titillium'}}>Utilisations des cookies</a></li>
                </ul>
            </div>
            </>
            }
            </>

    );
}

export default Footer;
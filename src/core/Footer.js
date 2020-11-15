import React from 'react';

export default function Footer () {
    const width = window.innerWidth;

    const breakpoint = 720;
    return (
                    <>
                        {width < breakpoint? 
                        <div style={{  height:'560px', backgroundColor:'#f4f4f4', alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <ul style={{listStyleType:'none',}}>
                                <h4 style={{color:"#444", fontSize:'16px'}}>Pour mieux nous connaître</h4>
                                <li style={{fontSize:'14px'}}>À propos de Samemo</li>
                                <li style={{fontSize:'14px'}}>Numéros de télephone</li>
                            </ul>
                            <ul></ul>
                            <ul style={{listStyleType:'none',}}>
                                <h4 style={{color:"#444"}}>Contact</h4>
                                <li style={{fontSize:'12px'}}>Contactez-nous</li>
                                <li style={{fontSize:'12px'}}>Numéros de télephone</li>
                            </ul>
                            <ul></ul>
                            <ul style={{listStyleType:'none',}}>
                                <h4 style={{color:"#444"}}>Contact</h4>
                                <li style={{fontSize:'12px'}}>Contactez-nous</li>
                                <li style={{fontSize:'12px'}}>Numéros de télephone</li>
                            </ul>
                            <ul></ul>
                            <ul style={{listStyleType:'none',}}>
                                <h4 style={{color:"#444"}}>Besoin d'aide?</h4>
                                <li style={{fontSize:'14px'}}>Samemo et le Covid-19</li>
                                <li style={{fontSize:'14px'}}>Retours et remplacements</li>
                            </ul>
                        </div>
                        <div style={{ backgroundColor:'#f4f4f4',display:'flex',flexDirection:'', marginBottom:'0', borderTop:'1px solid #d2d2d7', paddingTop:'10px'}}>
                            <ul style={{margin:'0',display:'flex', textDecoration:'none', listStyleType:'none', padding:'0', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <h5 style={{margin:'0', marginRight:'20px',color:'#87878c', fontFamily:'Titillium'}}>Copyright 2020</h5>
                                <li><a href='#' style={{fontSize:'11px', textDecoration:'none', color:'black', fontFamily:'Titillium'}}>Engagement de confidentialité</a></li>
                                <li><a href='#' style={{fontSize:'11px', textDecoration:'none', color:'black', fontFamily:'Titillium'}}>Mentions Légales</a></li>
                               <li><a href="#" style={{fontSize:'11px',textDecoration:'none', color:'black', fontFamily:'Titillium'}}>Conditions d'utilisations</a></li>
                                <li><a href="#" style={{fontSize:'11px', textDecoration:'none', color:'#555555', fontFamily:'Titillium'}}>Utilisations des cookies</a></li>
                            </ul>
                        </div>
                        </div>
                        :
                        <>
            <div style={{backgroundColor:'#f4f4f4', display:'flex', width:'100%', height:'80%', paddingLeft:'180px', paddingTop:'20px'}}>
                <ul style={{listStyleType:'none',}}>
                    <h4 style={{color:"#444"}}>Pour mieux nous connaître</h4>
                    <li style={{fontSize:'14px'}}>À propos de Samemo</li>
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
                    <h4 style={{color:"#444"}}>Contact</h4>
                    <li style={{fontSize:'12px'}}>Contactez-nous</li>
                    <li style={{fontSize:'12px'}}>Numéros de télephone</li>
                </ul>
                <ul></ul>
                <ul style={{listStyleType:'none',}}>
                    <h4 style={{color:"#444"}}>Besoin d'aide?</h4>
                    <li style={{fontSize:'14px'}}>Samemo et le Covid-19</li>
                    <li style={{fontSize:'14px'}}>Retours et remplacements</li>
                </ul>
            </div>
            <div style={{backgroundColor:'#f4f4f4', padding:'20px',display:'flex',flexDirection:'column', width:'100%', height:'20%', marginBottom:'0', borderTop:'1px solid #d2d2d7'}}>
                <ul style={{margin:'0',display:'flex', textDecoration:'none', listStyleType:'none', padding:'0'}}>
                    <h5 style={{margin:'0', marginRight:'20px',color:'#87878c', fontFamily:'Titillium'}}>Copyright 2020</h5>
                    <li><a href='#' style={{fontSize:'11px', textDecoration:'none', color:'#555555', fontFamily:'Titillium'}}>Engagement de confidentialité</a></li>
                    <li style={{marginLeft:'20px', marginRight:'20px'}}> | </li>
                    <li><a href='#' style={{fontSize:'11px', textDecoration:'none', color:'#555555', fontFamily:'Titillium'}}>Mentions Légales</a></li>
                    <li style={{marginLeft:'20px', marginRight:'20px'}}> | </li>
                   <li><a href="#" style={{fontSize:'11px',textDecoration:'none', color:'#555555', fontFamily:'Titillium'}}>Conditions d'utilisations</a></li>
                   <li style={{marginLeft:'20px', marginRight:'20px'}}> | </li>
                    <li><a href="#" style={{fontSize:'11px', textDecoration:'none', color:'#555555', fontFamily:'Titillium'}}>Utilisations des cookies</a></li>
                </ul>
            </div>
            </>
            }
            </>

    );
}
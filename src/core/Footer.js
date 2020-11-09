import React from 'react';

export default function Footer () {
    const width = window.innerWidth;

    const breakpoint = 720;
    return (

        <div style={{width:'100%', height:'300px', bottom:'0', backgroundColor:'#f2f2f2', display:'flex', flexDirection:'column', alignItems:'center'}}>
                        {width < breakpoint? "" :
                        <>
            <div style={{width:'100%', height:'80%', padding:'50px'}}>
                <ul style={{listStyleType:'none',}}>
                    <h4 style={{color:"#444"}}>Contact</h4>
                    <li style={{fontSize:'12px'}}>Contactez-nous</li>
                    <li style={{fontSize:'12px'}}>Numéros de télephone</li>
                </ul>
            </div>
            <div style={{padding:'20px',display:'flex',flexDirection:'column', width:'95%', height:'20%', marginBottom:'0', borderTop:'1px solid #d2d2d7'}}>
                <ul style={{margin:'0',display:'flex', textDecoration:'none', listStyleType:'none', padding:'0'}}>
                    <h5 style={{margin:'0', marginRight:'20px',color:'#87878c', fontFamily:'Titillium'}}>Copyright 2020</h5>
                    <li><a href='#' style={{fontSize:'11px', textDecoration:'none', color:'black', fontFamily:'Titillium'}}>Engagement de confidentialité</a></li>
                    <li style={{marginLeft:'20px', marginRight:'20px'}}> | </li>
                    <li><a href='#' style={{fontSize:'11px', textDecoration:'none', color:'black', fontFamily:'Titillium'}}>Mentions Légales</a></li>
                    <li style={{marginLeft:'20px', marginRight:'20px'}}> | </li>
                   <li><a href="#" style={{fontSize:'11px',textDecoration:'none', color:'black', fontFamily:'Titillium'}}>Conditions d'utilisations</a></li>
                   <li style={{marginLeft:'20px', marginRight:'20px'}}> | </li>
<li><a href="#" style={{fontSize:'11px', textDecoration:'none', color:'#555555', fontFamily:'Titillium'}}>Utilisations des cookies</a></li>
                </ul>
            </div>
            </>
            }

        </div>
    );
}
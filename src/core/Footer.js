import React from 'react';

export default function Footer () {
    return (
        <div style={{width:'100%', height:'200px', bottom:'0', backgroundColor:'#f2f2f2', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{width:'100%', height:'80%'}}></div>
            <div style={{display:'flex',flexDirection:'column', width:'95%', height:'20%', marginBottom:'0', borderTop:'1px solid #d2d2d7'}}>
                <h4 style={{margin:'0', color:'#87878c', fontFamily:'Titillium'}}>Copyright 2020</h4>
                <ul style={{margin:'0',display:'flex', textDecoration:'none', listStyleType:'none', padding:'0'}}>
                    <li><a href='#' style={{textDecoration:'none', color:'black', fontFamily:'Titillium'}}>Engagement de confidentialité</a></li>
                    <li style={{marginLeft:'20px', marginRight:'20px'}}> | </li>
                    <li><a href='#' style={{textDecoration:'none', color:'black', fontFamily:'Titillium'}}>Mentions Légales</a></li>
                    <li style={{marginLeft:'20px', marginRight:'20px'}}> | </li>
                    {/*<li><a href="#" style={{textDecoration:'none', color:'black', fontFamily:'Titillium'}}>Conditions d'utilisations</a></li>
                   <li style={{marginLeft:'20px', marginRight:'20px'}}> | </li>
<li><a href="#" style={{textDecoration:'none', color:'black', fontFamily:'Titillium'}}>Utilisations des cookies</a></li>*/}
                </ul>
            </div>

        </div>
    );
}
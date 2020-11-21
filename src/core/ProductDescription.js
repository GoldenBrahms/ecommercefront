import React from 'react';
import LuneJaune from '../images/lunejaune.png';
import Multicolor from '../images/nice.png';
import Smartphone from '../images/smartphone.png';
import LuneRose from '../images/LuneRose.jpg';
import LightControl from '../images/lightControl.jpeg';
import Veilleuse from '../images/veilleuse.jpg';
import LuneVerte from '../images/luneVerte.jpg'
import SousNavBar from "./SousNavBar";
import {isAuthenticated} from '../auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShippingFast} from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'
import { css, jsx} from '@emotion/react'



const color = 'white'


const ProductDescription = () => {
    const width = window.innerWidth;
    

    const breakpoint = 720;
    const maxpoint = 1920;
    return (
        <div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <SousNavBar/>

            {/* Decouvrez Qurma */}
            { width < breakpoint ?
            <div style={{ marginTop:'00px',padding:'20px', backgroundColor:'white', width:'100%',height:'100%', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div style={{marginTop:'',backgroundColor:'', display:'flex', flexDirection:'column', justifyContent:'left', alignItems:'center'}}>
            <h4 style={{fontSize:'40px', margin:'0', color:'rgb(79, 79, 79)'}}>Découvrez Qurma </h4>
            <span style={{height:'6px'}}>Avec son nouveau design en forme de lune <br/>et son enceinte intégrée</span>
            </div>
            <img style={{marginTop:'50px',width:'70%', height:'100%' }} src={LuneJaune}/>
            </div>
            :
            <div style={{ width:'100%',height:'100%', display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <div style={{backgroundColor:'', margin:'0', display:'flex', flexDirection:'column', justifyContent:'left'}}>
            <h1 css={{
      backgroundColor: 'hotpink',
      '&:hover': {
        color: 'lightgreen'
      }
    }}  >Découvrez Qurma </h1>
            <span style={{height:'10px'}}>Avec son nouveau design en forme de lune <br/>et son enceinte intégrée</span>
            </div>
            <img style={{width:'30%', height:'100%' }} src={LuneJaune}/>
            </div>
            }
            { width < breakpoint ?
            <>
             <div style={{padding:'10px' ,width:'100%', backgroundColor:'', textAlign:'center'}}>
                <div>
                    <h1 style={{margin:'0'}}>Qurma</h1>
                    <p>Une application est fourni avec Qurma pour pouvoir la piloter depuis son smartphone en toute simplicité</p>
                </div>
                <img style={{width:'250px'}} src={LightControl}/>
             </div>
             <div style={{padding:'20px', marginTop:'00px',width:'100%', height:'', backgroundColor:'', display:'flex', flexDirection:'column'}}>
             <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                 <h4 style={{margin:'0', position:'', color:'rgb(79, 79, 79)', textAlign:'center'}}>Car Oui, Qurma est Multicouleur.</h4>
                 <p style={{margin:'00px', fontSize:'19px', color:'rgb(79, 79, 79)', textAlign:'center'}}>Grace à sa led lumineuse intégré, choississez la couleur de votre Qurma
                 que vous souhaiter. </p>
             </div>
 
             <img style={{width:'330px', marginTop:'50px'}} src={Multicolor}/>
 
         </div>
         </>
             :
             <>
             <div style={{padding:'10px' ,width:'100%', backgroundColor:'', textAlign:'center'}}>
                <div>
                    <h1 style={{margin:'0'}}>Qurma</h1>
                    <p>Une application est fourni avec Qurma pour pouvoir la piloter depuis son smartphone en toute simplicité</p>
                </div>
                <img style={{width:'550px'}} src={LightControl}/>
             </div>
             <div style={{padding:'20px', marginTop:'00px',width:'100%', height:'', backgroundColor:'', display:'flex', flexDirection:'column'}}>
             <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                 <h4 style={{margin:'0', position:'', color:'rgb(79, 79, 79)', textAlign:'center'}}>Car Oui, Qurma est Multicouleur.</h4>
                 <p style={{margin:'00px', fontSize:'19px', color:'rgb(79, 79, 79)', textAlign:'center'}}>Grace à sa led lumineuse intégré, choississez la couleur de votre Qurma
                 que vous souhaiter. </p>
             <img style={{width:'900px', marginTop:'50px'}} src={Multicolor}/>
             </div>
 
 
         </div>
         </>
            }
            
            {/* plusieurs couleurs lune */}
            
                        {/* application smartphone */}
                        {width < breakpoint? 
            <div style={{padding:'20px',textAlign:'left', display:'flex', alignItems:'center', justifyContent:'left', backgroundColor:''}}>
            <img style={{width:'50%', height:'50%'}} src={Smartphone}/>
            <div style={{backgroundColor:''}}>
            <h4 style={{margin:'0', color:'rgb(79, 79, 79)'}}>Une application pour simplifier</h4>
            <p style={{margin:'0'}}>Une application pour plus de maniabilité ainsi pouvoir choisir la sourate<br></br> que l'on souhaite avec son recitateur preferé</p>
            </div>
            </div>
            :
            <div style={{textAlign:'left', display:'flex', alignItems:'center', justifyContent:'left', backgroundColor:''}}>
            <img style={{width:'50%', height:'50%'}} src={Smartphone}/>
            <div style={{backgroundColor:''}}>
            <h1 style={{margin:'0', color:'rgb(79, 79, 79)'}}>Une application pour simplifier</h1>
            <p style={{margin:'0'}}>Une application pour plus de maniabilité ainsi pouvoir choisir la sourate<br></br> que l'on souhaite avec son recitateur preferé</p>
            </div>
            </div>
            }
            {width < breakpoint? 
            <div style={{display:'flex',flexDirection:'column',alignItems:'center', padding:'20px', width:'100%', height:'100vh'}}>
                <img style={{width:'200px', height:'200px'}} src={LuneRose}/>
                <h4 style={{textAlign:'center',marginRight:'20px',marginLeft:'20px', margin:'0', color:'rgb(79, 79, 79)'}}>Une couleur rayonnante qui vous rassurera la nuit</h4>       
            </div>
            :
            <div style={{display:'flex', padding:'50px', width:'100%', height:'100vh'}}>
            <img style={{width:'50%', height:'100%'}} src={LuneRose}/>
            <div>
                <h1 style={{margin:'0', color:'rgb(79, 79, 79)'}}>Une couleur rayonnante qui vous rassurera la nuit</h1>
            </div>
            </div>}
            {width < breakpoint? 
            <div style={{display:'flex',flexDirection:'column',alignItems:'center', padding:'20px', width:'100%', height:'100vh'}}>
                <img style={{width:'200px', height:'200px'}} src={Veilleuse}/>
                <h4 style={{textAlign:'center',marginRight:'20px',marginLeft:'20px', margin:'0', color:'rgb(79, 79, 79)'}}>Une couleur rayonnante qui vous rassurera la nuit</h4>       
            </div>
            :
            <div style={{display:'flex', padding:'50px', width:'100%', height:'100vh'}}>
            <div>
                <h1 style={{margin:'0', color:'rgb(79, 79, 79)'}}>traduction en arabe et francais</h1>
            </div>
            <img style={{width:'750px'}} src={Veilleuse}/>
            </div>}
            {width < breakpoint? 
            <>
            <div id="details" style={{width:'100%', height:'55px'}}></div>
            <div  style={{padding:'20px', margin:'10px', border:'1px solid black', display:'flex',flexDirection:'column'}}>
                <h1>Details</h1>
                <p style={{margin:'0'}}>Livraison Gratuite à votre domicile en France <FontAwesomeIcon icon={faShippingFast} /></p>
                <p>Paiement par carte bancaire sécurisée</p>
                <h1 style={{margin:'0'}}>29 €</h1>
                <p style={{color:'#888888'}}>TVA et frais inclus : env. 4.83 €.</p>
                <p>Retour gratuit dans les 30 jours suivant la date de livraison.</p>
                <a className="btn btn-primary btn-sm" href="/Checkout">Acheter</a>

            </div>
            </>
            :
            <div id="details" style={{width:'80%', margin:'50px', border:'1px solid black', display:'flex',flexDirection:'column', alignItems:"left", padding:'50px'}}>
                <h1>Details</h1>
                <p><span style={{height: "10px", width: "10px", backgroundColor: "#007600", borderRadius: "50%", display: "inline-block"}}></span> En stock</p>
                <p style={{margin:'0'}}>Livraison Gratuite à votre domicile en France <FontAwesomeIcon icon={faShippingFast} /></p>
                <p>Paiement par carte bancaire sécurisée</p>
                <h1 style={{margin:'0'}}>29 €</h1>
                <p style={{color:'#888888'}}>TVA et frais inclus : env. 4.83 €.</p>
                <p>Retour gratuit dans les 30 jours suivant la date de livraison.</p>
                <Link className="btn btn-primary btn-sm" to="/CheckoutDirect">Acheter</Link>
            </div>
            }
        </div>
    );
}



export default ProductDescription;
import React, { useState, useEffect } from 'react';
import LuneJaune from '../images/lunejaune.png';
import Multicolor from '../images/nice.png';
import Smartphone from '../images/smartphone.png';
import LuneRose from '../images/LuneRose.jpg';
import LightControl from '../images/lightControl.jpeg';
import Veilleuse from '../images/veilleuse.jpg';
import LuneVerte from '../images/luneVerte.jpg'
import AppSourate from '../images/AppSourate.jpeg'
import Visa from '../images/visa.png'
import Cadena from '../images/cadena.png'
import SousNavBar from "./SousNavBar";
import {isAuthenticated} from '../auth';
import Date2 from '../core/Date';
import Card from '../core/Card';
import ImageSwiper from '../core/ImageSwiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShippingFast} from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'
import { css, jsx} from '@emotion/react'
import {addItem} from './cartHelper'
import { read, getProduct } from './apiCore';




const color = 'white'


const ProductDescription = props => {
    const [product, setProduct] = useState([]);
    const [productsBySell, setProductsBySell] = useState([]);

    const [error, setError] = useState(false);

    const width = window.innerWidth;
    

    const breakpoint = 720;
    const maxpoint = 1920;

    const loadSingleProduct = () => {
        getProduct().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    useEffect(() => {
        loadSingleProduct()
    }, [props]);

    return (
        <div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

            {/* Decouvrez Qurma */}
            {width < breakpoint? 
            <>
           
           
           {productsBySell.map((product, i) => (
               <div key={i}>
                   <Card product={product} />
               </div>
           ))}
       
    
            
            </>
            :
            <>
           
                {productsBySell.map((product, i) => (
                    <div key={i}>
                        <Card product={product} />
                    </div>
                ))}
            
            </>
            }
             <SousNavBar/>
            { width < breakpoint ?
            <div style={{ marginTop:'00px',padding:'20px', backgroundColor:'white', width:'100%',height:'100%', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div style={{marginTop:'',backgroundColor:'', display:'flex', flexDirection:'column', justifyContent:'left', alignItems:'center'}}>
            <h4 style={{fontSize:'40px', margin:'0', color:'rgb(79, 79, 79)'}}>Découvrez Qurma </h4>
            <span style={{height:'6px'}}>Avec son nouveau design en forme de lune <br/>et son enceinte intégrée, elle est élégante</span>
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
            <span style={{height:'10px'}}>Avec son nouveau design en forme de lune <br/>et son enceinte intégrée, elle est élégante.<br/> Elle a un air de Lune, cet astre céleste. En plus, <br/>
                    elle intègre aussi une LED qui permet de génerer<br/> une couleur de illuminer la piece<br/> dans laquelle elle se trouve</span>
            </div>
            <img style={{width:'30%', height:'100%' }} src={LuneJaune}/>
            </div>
            }
            { width < breakpoint ?
            <>
             <div style={{padding:'10px' ,width:'100%', backgroundColor:'', textAlign:'center'}}>
                <div>
                    <h1 style={{margin:'0'}}>Cet LED</h1>
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
                    <h1 style={{margin:'0'}}>Cette LED génère plusieurs couleurs</h1>
                    <p>Vous pourrez choisir la couleur qui vous convient</p>
                </div>
                <img style={{width:'900px', marginTop:'50px'}} src={Multicolor}/>
             </div>
             <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                 <img style={{width:'600px'}} src={LightControl}/>
                 <div>
                 <h4 style={{margin:'0', position:'', color:'rgb(79, 79, 79)', textAlign:'center'}}>Depuis l'application ou depuis la télécommande</h4>
                 <p style={{margin:'00px', fontSize:'19px', color:'rgb(79, 79, 79)', textAlign:'center'}}>Vous pourrez modifier la couleur en toute simplicité. </p>
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
                <div style={{backgroundColor:''}}>
                    <h1 style={{margin:'0', color:'rgb(79, 79, 79)'}}>Le meilleur pour la fin...</h1>
                    <p style={{margin:'0'}}>Qurma possède aussi une memoire intégrée<br/> dans laquelle est stocké le majestueux Coran. <br/>Plus de 20 récitateurs des plus connus dans le monde musulman
                    <br/>Plus de 15 traductions dont le Francais, l'Anglais, le Turc et bien sure l'Arabe<br/>
                    Diffusez votre son partout
                    </p>
                </div>
                <img style={{width:'750px'}} src={Veilleuse}/>
            </div>
            }
            {width < breakpoint? 
            <div style={{display:'flex',flexDirection:'column',alignItems:'center', padding:'20px', width:'100%', height:'100vh'}}>
                <img style={{width:'200px', height:'200px'}} src={LuneRose}/>
                <h4 style={{textAlign:'center',marginRight:'20px',marginLeft:'20px', margin:'0', color:'rgb(79, 79, 79)'}}>Une couleur rayonnante qui vous rassurera la nuit</h4>       
            </div>
            :
            <div style={{display:'flex', padding:'50px', width:'100%', height:'100vh'}}>
            <img style={{width:'600px'}} src={AppSourate}/>
            <div>
                <h1 style={{margin:'0', color:'rgb(79, 79, 79)'}}>Elle contient aussi des Hadiths</h1>
            </div>
            </div>}
            
        </div>
    );
}



export default ProductDescription;
import React from 'react';
import LuneJaune from '../images/lunejaune.png';
import Multicolor from '../images/nice.png';
import AppControl from '../images/app_control.jpg';
import Smartphone from '../images/smartphone.png'
import LuneRose from '../images/LuneRose.jpg'
import SousNavBar from "./SousNavBar";


const ProductDescription = () => {
    
    const handleScroll = () => {
        console.log("hello");
    }
    return (
        <div onScroll={handleScroll} style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <SousNavBar/>
            {/* Decouvrez Qurma */}
            <div style={{backgroundColor:'white', width:'100%',height:'130%', display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <div style={{backgroundColor:'', margin:'0', display:'flex', flexDirection:'column', justifyContent:'left'}}>
            <h1 style={{margin:'0', color:'rgb(79, 79, 79)'}}>Découvrez Qurma</h1>
            <span style={{height:'10px'}}>Avec son nouveau design en forme de lune <br/>et son enceinte intégrée</span>
            </div>
            <img style={{width:'30%', height:'100%' }} src={LuneJaune}/>
            </div>
            {/* plusieurs couleurs lune */}
            <div style={{marginTop:'100px',width:'100%', height:'100vh', backgroundColor:'', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div style={{}}>
                    <h1 style={{margin:'0', position:'', color:'rgb(79, 79, 79)'}}>Qurma est Multicouleur</h1>
                    <p style={{margin:'00px', color:'rgb(79, 79, 79)'}}>Grace à sa led lumineuse intégré, Qurma permet de generer <br/>
                    plusieurs couleurs </p>
                </div>
                <img style={{width:'100%', height:'70%'}} src={Multicolor}/>

            </div>
            <div style={{textAlign:'left', display:'flex', alignItems:'center', justifyContent:'left', backgroundColor:''}}>
            <img style={{width:'50%', height:'50%'}} src={Smartphone}/>
            <div style={{backgroundColor:''}}>
            <h1 style={{margin:'0', color:'rgb(79, 79, 79)'}}>Une application pour simplifier</h1>
            <p style={{margin:'0'}}>Une application pour plus de maniabilité ainsi pouvoir choisir la sourate<br></br> que l'on souhaite avec son recitateur preferé</p>
            </div>
            </div>
            <div style={{display:'flex', padding:'50px', width:'100%', height:'100vh'}}>
            <img style={{width:'50%', height:'100%'}} src={LuneRose}/>
            <div>
                <h1 style={{margin:'0', color:'rgb(79, 79, 79)'}}>Une couleur rayonnante qui vous rassurera la nuit</h1>
            </div>
            </div>
        </div>
    );
}

export default ProductDescription;
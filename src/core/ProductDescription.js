import React from 'react';
import LuneJaune from '../images/lunejaune.png';
import Multicolor from '../images/nice.png';
import AppControl from '../images/app_control.jpg';
import Smartphone from '../images/smartphone.png'
import LuneRose from '../images/LuneRose.jpg'
import SousNavBar from "./SousNavBar";


const ProductDescription = () => {
    const width = window.innerWidth;

    const breakpoint = 720;

    return (
        <div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <SousNavBar/>
            {/* Decouvrez Qurma */}
            {width < breakpoint? 
            <div style={{ marginTop:'100px',padding:'20px', backgroundColor:'white', width:'100%',height:'100%', display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <div style={{marginTop:'-170px',backgroundColor:'', margin:'0', display:'flex', flexDirection:'column', justifyContent:'left'}}>
            <h4 style={{margin:'0', color:'rgb(79, 79, 79)'}}>Découvrez Qurma</h4>
            <span style={{height:'6px'}}>Avec son nouveau design en forme de lune <br/>et son enceinte intégrée</span>
            </div>
            <img style={{width:'70%', height:'100%' }} src={LuneJaune}/>
            </div>
            :
            <div style={{backgroundColor:'white', width:'100%',height:'130%', display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <div style={{backgroundColor:'', margin:'0', display:'flex', flexDirection:'column', justifyContent:'left'}}>
            <h1 style={{margin:'0', color:'rgb(79, 79, 79)'}}>Découvrez Qurma</h1>
            <span style={{height:'10px'}}>Avec son nouveau design en forme de lune <br/>et son enceinte intégrée</span>
            </div>
            <img style={{width:'30%', height:'100%' }} src={LuneJaune}/>
            </div>
            }
            {/* plusieurs couleurs lune */}
            {width < breakpoint? 
            <div style={{padding:'20px', marginTop:'100px',width:'100%', height:'100vh', backgroundColor:'', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div style={{}}>
                <h4 style={{margin:'0', position:'', color:'rgb(79, 79, 79)'}}>Qurma est Multicouleur</h4>
                <p style={{margin:'00px', color:'rgb(79, 79, 79)'}}>Grace à sa led lumineuse intégré, Qurma permet de generer <br/>
                plusieurs couleurs </p>
            </div>
            <img style={{width:'120%', height:'90%'}} src={Multicolor}/>

        </div>
            :
            <div style={{marginTop:'100px',width:'100%', height:'100vh', backgroundColor:'', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div style={{}}>
                    <h1 style={{margin:'0', position:'', color:'rgb(79, 79, 79)'}}>Qurma est Multicouleur</h1>
                    <p style={{margin:'00px', color:'rgb(79, 79, 79)'}}>Grace à sa led lumineuse intégré, Qurma permet de generer <br/>
                    plusieurs couleurs </p>
                </div>
                <img style={{width:'100%', height:'70%'}} src={Multicolor}/>

            </div>}
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
            <div style={{display:'flex', padding:'20px', width:'100%', height:'100vh'}}>
                <div>
                <h4 style={{marginRight:'20px',marginLeft:'20px', margin:'0', color:'rgb(79, 79, 79)'}}>Une couleur rayonnante qui vous rassurera la nuit</h4>
            </div>
            <img style={{width:'60%', height:'50%'}} src={LuneRose}/>
            
            </div>
            :
            <div style={{display:'flex', padding:'50px', width:'100%', height:'100vh'}}>
            <img style={{width:'50%', height:'100%'}} src={LuneRose}/>
            <div>
                <h1 style={{margin:'0', color:'rgb(79, 79, 79)'}}>Une couleur rayonnante qui vous rassurera la nuit</h1>
            </div>
            </div>}
        </div>
    );
}

export default ProductDescription;
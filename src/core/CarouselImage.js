import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import LuneJaune from '../images/lunejaune.png';
import LuneRose from '../images/LuneRose.jpg';
import Veilleuse from '../images/veilleuse.jpg';
import LightControl from '../images/lightControl.jpeg';



const CarouselImage = () => {
    const width = window.innerWidth;
    

    const breakpoint = 720;
    return (
        <>
        {width < breakpoint ?
         <Carousel showStatus={false} style={{}}>
         <div style={{backgroundColor:'white'}}>
             <img src={LuneJaune} />
         </div>
         <div style={{backgroundColor:'white'}}>
             <img src={LuneRose} />
         </div>
         <div style={{backgroundColor:'white'}}>
             <img src={LuneJaune} />
         </div>
     </Carousel>
        :
        <div style={{width:'90%', height:'20%'}}>
        <Carousel showStatus={false} style={{}}>
                <div style={{backgroundColor:'white'}}>
                    <img src={LuneRose} />
                </div>
                <div style={{backgroundColor:'white'}}>
                    <img src={LuneRose} />
                </div>
                <div style={{backgroundColor:'white'}}>
                    <img src={Veilleuse} />
                </div>
                <div style={{backgroundColor:'white'}}>
                    <img src={LightControl} />
                </div>
            </Carousel>
            </div>}
            </>
    )
}

export default CarouselImage;
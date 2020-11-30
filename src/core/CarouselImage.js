import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import LuneJaune from '../images/lunejaune.png';

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
             <img src={LuneJaune} />
         </div>
         <div style={{backgroundColor:'white'}}>
             <img src={LuneJaune} />
         </div>
     </Carousel>
        :
        <div style={{width:'60%', height:'20%'}}>
        <Carousel showStatus={false} style={{}}>
                <div style={{backgroundColor:'white'}}>
                    <img src={LuneJaune} />
                </div>
                <div style={{backgroundColor:'white'}}>
                    <img src={LuneJaune} />
                </div>
                <div style={{backgroundColor:'white'}}>
                    <img src={LuneJaune} />
                </div>
            </Carousel>
            </div>}
            </>
    )
}

export default CarouselImage;
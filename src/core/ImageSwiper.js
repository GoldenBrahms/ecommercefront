import React from 'react';

import Lune from '../images/jaune.png'

const ImageSwiper = () => {
  
  return (
      <>
      <div style={{backgroundColor:'black', width:'10%', height:'100%', display:'flex', flexDirection:'column'}}>
          <div style={{backgroundColor:'green', width:'100%', height:'20%'}}></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
      <div style={{backgroundColor:'', width:'90%', height:'100%'}}>
          <img style={{width:'400px'}} src={Lune}/>
      </div>
    </>
    
  )
};
export default ImageSwiper;
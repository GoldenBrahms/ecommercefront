import React from 'react';
import Header from './core/Header';


const Remerciement = () => {
    return (
        <>
        <Header/>
        <div style={{width:'100%', height:'77vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:''}}>
            <h1 style={{textAlign:'center'}}>Confirmation de commande</h1>
                <p>Nous vous remercions de votre commande. Nous vous tiendrons informé par e-mail lorsque les articles de votre commande auront été expédiés.</p>
            <a href="/">Home</a>
        </div>
        </>
    )
}

export default Remerciement;
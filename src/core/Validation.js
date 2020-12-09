import React from 'react'

const Validation = ({props}) => {

    return (
        <>
            <h2>Verification et validation de votre commande</h2>
            <div style={{width:'100%', height:'500px', backgroundColor:''}}>
                <div style={{width:'80%', height:'300px', border:"1px solid #ddd", borderRadius:'4px', display:'flex', justifyContent:'space-between'}}>
                    <div>
                        <span>Adresse de livraison</span>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <span>Adresse de livraison</span>
                    </div>
                    <div>
                        <span>Adresse de livraison</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Validation;
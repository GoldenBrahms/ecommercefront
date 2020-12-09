import React, {useState} from 'react'
import Header from './Header'

const Review = () => {
    const [commentaire, setCommentaire] = useState("");
    return (
        <>
        <Header/>
        <div style={{display:'flex', alignItems:'center',justifyContent:'center', width:'100%', height:'60vh'}}>
            <div style={{width:'80%', backgroundColor:'',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h4>Créer un commentaire</h4>
            <h4>Ajouter un titre</h4>
            <input style={{width:'500px'}}/>
            <h4>Ajouter votre commentaire</h4>
            <textarea style={{width:'500px', height:'100px', marginBottom:'20px'}}/>
            <button style={{width:'200px', cursor:'pointer'}}>Envoyer</button>
            </div>
        </div>
        </>
    )
}

export default Review;
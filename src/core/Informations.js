import React from 'react';

const Informations = () => {
    return(
    <div style={{width:'50%', backgroundColor:'', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <div style={{width:'50%'}} className="form-group">
                <label className="text-muted">Email</label>
                <input
                    type="email"
                    className="form-control"
                    
                />
                <label className="text-muted">Nom</label>
                <input
                    type="text"
                    className="form-control"
                    
                />
                <label className="text-muted">Prénom</label>
                <input
                    type="text"
                    className="form-control"
                    
                />
                <label className="text-muted">Adresse</label>
                <input
                    type="text"
                    className="form-control"
                    
                />
                <label className="text-muted">Code Postal</label>
                <input
                    type="text"
                    className="form-control"
                    
                />
                <label className="text-muted">Ville</label>
                <input
                    type="text"
                    className="form-control"
                    
                />
            </div>
    </div>
    )
}

export default Informations;
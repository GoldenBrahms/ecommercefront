import React, { useEffect } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom'
import SousNavBar from "./SousNavBar";
import ProductDescritpiton from "./ProductDescription"
import { isAuthenticated } from '../auth';
import { signout } from '../auth';



const Header = ({ history }) => (
        <div>
            <div style={{display:'flex',alignItems:'center', position:'block', width:'100%', height:"50px", backgroundColor:'#303030', top:'0', margin:'0', padding:''}}>
                    <h1 style={{marginTop:'0', marginLeft:'20px', color:'#c1c1c1', fontFamily:'Roboto'}}><a href="/" style={{textDecoration:'none', color:'white'}}>Samemo</a></h1>
                    {!isAuthenticated() && (
                            <Link className="btn btn-light" style={{height:'40px',position:'absolute', right:'130px'}} to="/signin">Connexion</Link>

                    )}
                    {isAuthenticated() && (
                        <span onClick={() => {signout(() =>{
                            history.push('/')
                                })}} className="btn btn-dark" style={{position:'absolute', right:'20px', color:'white'}}>Deconnexion</span>
                    )}
            </div>
        </div>

)

export default withRouter(Header);
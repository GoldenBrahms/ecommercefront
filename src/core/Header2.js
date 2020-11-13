import React, { useEffect, useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom'
import SousNavBar from "./SousNavBar";
import ProductDescritpiton from "./ProductDescription"
import { isAuthenticated } from '../auth';
import { signout } from '../auth';



const Header2 = ({ history }) => {
    const [path, setPath] = useState()

    useEffect(() => {
        const path1 = history.location.pathname
        setPath(path1)   
    }, [])

    const pathname = path;
    const width = window.innerWidth;
    

    const breakpoint = 720;
        return (
        <div>
            <div style={{display:'flex',alignItems:'center', position:'block', width:'100%', height:"50px", backgroundColor:'#303030', top:'0', margin:'0', padding:''}}>
                    <h1 style={{marginTop:'0', marginLeft:'20px', color:'#c1c1c1', fontFamily:'Roboto'}}><a href="/" style={{textDecoration:'none', color:'white'}}>Samemo</a></h1>
                            { width < breakpoint ?
                    isAuthenticated() && (
                        <span onClick={() => {signout(() =>{
                            history.push('/')
                                })}} className="btn btn-dark" style={{position:'absolute', right:'10px', color:'white'}}>Deconnexion</span>
                    ) 
                    :
                    isAuthenticated() && (
                        <span onClick={() => {signout(() =>{
                            history.push('/')
                                })}} className="btn btn-dark" style={{position:'absolute', right:'10px', color:'white'}}>Deconnexion</span>
                    )
                }
            </div>
        </div>)

 }

export default withRouter(Header2);
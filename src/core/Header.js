import React, { useEffect, useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom'
import SousNavBar from "./SousNavBar";
import ProductDescritpiton from "./ProductDescription"
import { isAuthenticated } from '../auth';
import { signout } from '../auth';
import { QuestionCircleOutlined, UserOutlined,ShoppingCartOutlined  } from '@ant-design/icons';
import { itemTotal } from './apiCore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShippingFast} from '@fortawesome/free-solid-svg-icons'




const Header = ({ history }) => {
    const [path, setPath] = useState()

    useEffect(() => {
        const path1 = history.location.pathname
        console.log(path1)
        setPath(path1)   
    }, [])

    const pathname = path;
    const width = window.innerWidth;
    

    const breakpoint = 720;
        return (
        <div>
            <div style={{display:'flex',alignItems:'center', position:'block', width:'100%', height:"50px", backgroundColor:'#303030', top:'0', margin:'0', padding:''}}>
                    <h1 style={{marginTop:'0', marginLeft:'20px', color:'#c1c1c1', fontFamily:'Roboto'}}><a href="/" style={{textDecoration:'none', color:'white'}}>Lirya</a></h1>
                    { width < breakpoint ?
                    !isAuthenticated() && (
                        <>
                    { path !== "/cart" ?  
                    <Link  style={{ height:'40px',position:'absolute', right:'120px',top:'7px', textAlign:'center'}} to='/cart'><ShoppingCartOutlined style={{color:'white', fontSize:'40px'}}/><sup style={{color:'orange', fontSize:'30px'}} >{itemTotal()}</sup></Link>
                    :
                    ""
                    }                        
                    <Link className="" style={{color:'white', height:'40px',position:'absolute',top:'10px', right:'70px', textAlign:'center'}} to='/Assistance'><QuestionCircleOutlined style={{color:'white', fontSize:'35px'}} /></Link>
                        
                    <Link  style={{height:'40px',position:'absolute', right:'10px'}} to="/signin"><UserOutlined style={{color:'white', fontSize:'40px'}} /></Link>
                    </>
                    )

                    :
                    !isAuthenticated() &&  (
                        <>
                        <Link className="" style={{color:'white', height:'40px',position:'absolute',top:'10px', right:'240px', textAlign:'center'}} to='/Assistance'>Assistance</Link>
                        {
                            path !== "/cart" ?
                        <Link className="btn btn-light" style={{ height:'40px',position:'absolute', right:'340px', textAlign:'center'}} to='/cart'>Panier<sup><small style={{border:'50%', backgroundColor:'black', fontSize:'22px', color:'white', width:'20px'}}>{itemTotal()}</small></sup></Link>
                    :
                    ""
                    }
                    <Link className="btn btn-light" style={{height:'40px',position:'absolute', right:'10px'}} to="/signin">Connexion</Link>
                    <Link className="btn btn-light" style={{height:'40px',position:'absolute', right:'120px'}} to="/signup">Inscription</Link>
                    </>
                    )
}
                    { width < breakpoint ?
                    isAuthenticated() && (
                        <>
                        <Link className="" style={{color:'white', height:'40px',position:'absolute',top:'10px', right:'140px', textAlign:'center'}} to='/Assistance'>?</Link>
                        <span onClick={() => {signout(() =>{
                            history.push('/')
                                })}} className="btn btn-dark" style={{position:'absolute', right:'10px', color:'white'}}>Deconnexion</span>
                        </>
                    ) 
                    :
                    isAuthenticated() && (
                        <>
                        {
                            path !== "/cart" ?
                        <Link className="btn btn-light" style={{ height:'40px',position:'absolute', right:'240px', textAlign:'center'}} to='/cart'>Panier<sup><small style={{border:'50%', backgroundColor:'black', fontSize:'22px', color:'white', width:'20px'}}>{itemTotal()}</small></sup></Link>
                    :
                    ""
                    }
                        <Link className="" style={{color:'white', height:'40px',position:'absolute',top:'10px', right:'140px', textAlign:'center'}} to='/Assistance'>Assistance</Link>
                        <span onClick={() => {signout(() =>{
                            history.push('/')
                                })}} className="btn btn-dark" style={{position:'absolute', right:'10px', color:'white'}}>Deconnexion</span>
                    </>
                    )
                }
            </div>
        </div>)

 }

export default withRouter(Header);
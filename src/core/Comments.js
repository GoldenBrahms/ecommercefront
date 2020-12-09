import React, {useEffect, useState} from 'react';
import {getComments} from '../user/ApiUser'
import {Link} from 'react-router-dom'
import { isAuthenticated } from '../auth';
import { MergeCellsOutlined } from '@ant-design/icons/lib/icons';

const Comments = ({history}) => {
    const[comments, setComments] = useState([]);

    const width = window.innerWidth;
    

    const breakpoint = 720;

    const init = () => {
        getComments().then(data => {
            if (data.error){
                console.log(data.error)
            } else {
                setComments(data)
                
            }
        })
    }
    const Ecrire = (event) => {
        ///history.push("/")
    }
    const Merci = () => {
        document.getElementById("utile").style.display = "none";

    }
    useEffect(() => {
        init()
    }, [])
    
    const Comments = (comments) => {
        return (
            <div style={{width:'100%', height:'700px'}} >
                <h3 >Ce que dise mes clients du produit</h3>

                <ul >
                    <li className="list-group-item" style={{backgroundColor:'blakc'}}>
                    {comments.map(comments => 
                    <div style={{width:'80%', height:'120px', border:'1px solid black', margin:'10px', display:'flex', padding:'10px', flexDirection:'column'}}>
                        {comments.createdAt}
                        <span style={{fontWeight:'700', margin:'0', padding:'0'}}>{comments.title}</span>
                        <span style={{margin:'0', padding:'0'}}>{comments.comment}</span>
                        <button onClick={Merci} id="utile" style={{cursor:'pointer',width:'50px'}}>utile</button>
                        </div>)}
                    </li>
                </ul>
                {/*{ isAuthenticated() ?
                <Link to="/écrire-un-avis" style={{borderRadius:'12px', width:'300px'}} className="btn btn-secondary btn-lg btn-block">Écrire un avis</Link>
                :
                <Link to="/signin" style={{borderRadius:'12px', width:'300px'}} className="btn btn-primary btn-lg btn-block">Pour laisser un avis</Link>
                }*/}
            </div>
        )

    }
   
    const CommentsMobile = (comments) => {
        return (
            <div style={{width:'100%', height:'600px',backgroundColor:'', justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column'}} >
                <h3 style={{textAlign:'center'}}>Ce que dise mes clients du produit</h3>

                <ul style={{marginLeft:0, width:'400px', padding:0}} >
                    <li className="list-group-item" style={{backgroundColor:'blakc', margin:'0'}}>
                    {comments.map(comments => 
                    <div style={{width:'100%', height:'120px', border:'1px solid black', margin:'0px', display:'flex', padding:'10px', flexDirection:'column'}}>
                        {comments.createdAt}
                        <span style={{fontWeight:'700', margin:'0', padding:'0'}}>{comments.title}</span>
                        <span style={{margin:'0', padding:'0'}}>{comments.comment}</span>
                        </div>)}
                    </li>
                </ul>
               {/* { isAuthenticated() ?
                <Link to="/écrire-un-avis" style={{borderRadius:'12px', width:'300px'}} className="btn btn-secondary btn-lg btn-block">Écrire un avis</Link>
                :
                <Link to="/signin" style={{borderRadius:'12px', width:'300px'}} className="btn btn-primary btn-lg btn-block">Pour laisser un avis</Link>
                }*/}
            </div>
        )

    }

    return (
        <>
        {width < breakpoint ?
        <>
        {CommentsMobile(comments)}
        </>
        :
        <div id="Comments" style={{width:'80%', height:'300px', backgroundColor:''}}>
            {Comments(comments)}
        </div>}
        </>
    )
}

export default Comments;
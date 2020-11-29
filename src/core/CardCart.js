import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { addItem, updateItem, emptyCart} from './cartHelper';
import LuneJaune from '../images/lunejaune.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShippingFast} from '@fortawesome/free-solid-svg-icons'
import Visa from '../images/visa.png'


const CardCart = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = f => f,
  run = undefined
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  const width = window.innerWidth;
    

    const breakpoint = 720;

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View Product</button>
        </Link>
      )
    );
  };
 


  

  const showStock = quantity => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock </span>
    );
  };

  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
        updateItem(productId, event.target.value);
      }
  };

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <>
          
            <input type="number" style={{width:'60px'}}  value={count} onChange={handleChange(product._id)} />
        </>
      )
    );
  };
  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <a
          onClick={emptyCart()}
          
        >
          Supprimer
        </a>
      )
    );
  };
  return (
    <>
    {width < breakpoint ?
    <div>
      <div style={{width:'100%', height:'500px', backgroundColor:'#d9d9d9'}}>
        <img style={{width:'300px', height:'300px' }} src={LuneJaune}/>
        <p style={{fontWeight:'bold', fontSize:'25px', margin:'0'}}>{product.name}</p>
        <p style={{}}>En stock</p>
        <div style={{width:'100%',backgroundColor:''}}>
                {showCartUpdateOptions(cartUpdate)}
                    <span style={{margin:'0', float:'right', fontSize:'20px'}}>{product.price} €</span>
                </div>
                {showRemoveButton(showRemoveProductButton)}

      </div>
    </div>
    :
    <div style={{width:'100%', height:'100px', display:'flex'}}>
        <div id="details" style={{height:'100px',width:'100%', margin:'0px', border:'', display:'flex', alignItems:"left", padding:'0px'}}>
                <div style={{width:'10%', height:'30%', backgroundColor:''}}>
                    <img style={{width:'50px', height:'50px' }} src={LuneJaune}/>
                </div>
                <div style={{width:'1px', height:'120%', backgroundColor:'#d9d9d9'}}></div>
                <div style={{paddingLeft:'10px',marginTop:'20px', width:'85%', backgroundColor:''}}>
                    <p style={{fontWeight:'bold'}}>{product.name}</p>
                    <p style={{}}>En stock</p>
                <div style={{width:'100%',backgroundColor:''}}>
                {showCartUpdateOptions(cartUpdate)}
                {showRemoveButton(showRemoveProductButton)}
                    <span style={{margin:'0', float:'right', fontSize:'20px'}}>{product.price} €</span>
                </div>
                <hr/>
                </div>
            </div>
            <hr/>
        <br />



{/*

  {showCartUpdateOptions(cartUpdate)}*/}
    </div>
}
    </>
  );
};

export default CardCart;
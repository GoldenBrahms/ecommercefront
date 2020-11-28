import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { addItem, updateItem} from './cartHelper';
import LuneJaune from '../images/lunejaune.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShippingFast} from '@fortawesome/free-solid-svg-icons'
import Visa from '../images/visa.png'


const CardCheckout = ({
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
        <button
          onClick={() => {
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Sup
        </button>
      )
    );
  };
  return (
    <div style={{width:'100%', height:'300px', display:'flex', backgroundColor:'yellow', border:'1px solid grey'}}>
        <div id="details" style={{height:'300px',width:'100%', margin:'0px', border:'', display:'flex', flexDirection:'column',alignItems:"left", padding:'0px'}}>
            <h1>Ma commande</h1>
            <div style={{display:'flex', backgroundColor:'#F2F2F2', width:'430px', height:'40%'}}>
                <div style={{width:'30%'}}>
                    Hello
                </div>
                <div style={{borderBottom:'2px solid #dddddd', width:'60%'}}>
                    <p style={{margin:'0', fontWeight:'bold'}}>{product.name}</p>
                    <p style={{margin:'0'}}>En stock</p>
                    <p>{product.price}</p>
                </div>

            </div>
            <div style={{width:'30%'}}>
                    Hello
                </div>
        </div>
    </div>
  );
};

export default CardCheckout;
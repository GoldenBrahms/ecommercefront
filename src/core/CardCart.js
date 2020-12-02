import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { addItem, updateItem, emptyCart} from './cartHelper';
import LuneJaune from '../images/lunejaune.png';
import { Checkbox } from 'antd';
import { itemTotal } from './apiCore'





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
 


  const emptyCartPrev = (e) => {
    e.preventDefault()
    emptyCart()
    window.location.reload(false);

  }

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
          onClick={emptyCartPrev}
          style={{marginLeft:'10px'}}
          href=""
        >
          Supprimer
        </a>
      )
    );
  };
  return (
    <>
    {width < breakpoint ?
    <>
      <div style={{padding:'0px', width:'100%', height:'100px', backgroundColor:'white', display:'flex'}}>
        <div style={{width:'30%'}}>
          <img style={{width:'100px', height:'100px' }} src={LuneJaune}/>
        </div>
        <div>
        <p style={{fontWeight:'bold', fontSize:'15px', margin:'0'}}>{product.name}</p>
        <p style={{fontSize:'15px', margin:'0', color:'#B12704'}}>{product.price} €</p>
        <p style={{color:'#207e1a'}}>En stock</p>
      </div>
      </div>
      <div style={{padding:'20px', width:'100%',backgroundColor:'', display:'flex'}}>
        <div>
            {showCartUpdateOptions(cartUpdate)}
        </div>
        <div>
                {showRemoveButton(showRemoveProductButton)}
           </div>
           </div>
</>
      
    :
    <>
    <div style={{width:'100%', height:'100%', display:'flex'}}>
        <div id="details" style={{height:'100px',width:'100%', margin:'0px', border:'', display:'flex',  padding:'0px'}}>
                <div style={{width:'30%', height:'100%', backgroundColor:'', display:'flex', justifyContent:'', alignItems:''}}>
                    <img style={{width:'170px', height:'190px' }} src={LuneJaune}/>
                </div>
                <div style={{width:'2px', height:'150%', backgroundColor:'#d9d9d9'}}></div>
                <div style={{width:'100%', display:'flex', flexDirection:'column', height:'100px'}}>
                <div style={{paddingLeft:'10px',margin:'0',marginTop:'20px', width:'100%',height:'30%', backgroundColor:''}}>
                    <span style={{fontWeight:'bold', fontSize:'18px'}}>{product.name}</span>
                    <span style={{marginRight:'10px', float:'right', fontSize:'24px', fontWeight:'700'}}>{product.price} €</span>
                  </div>
                <div style={{paddingLeft:'10px',marginTop:'0px', width:'85%',height:'15%', backgroundColor:''}}>
                    <span style={{fontWeight:'bold', fontSize:'14px', color:'#007600'}}>En stock.</span>
                    
                  </div>
                  <div style={{marginTop:'10px', paddingLeft:'10px'}}>
                  <Checkbox>Ceci est un cadeau</Checkbox>
                  </div>
                  <div>
                  {showRemoveButton(showRemoveProductButton)}

                  </div>
                  </div>
                  {/*<div>
                    <p style={{}}>En stock</p>
                <div style={{width:'100%',backgroundColor:''}}>
                {showCartUpdateOptions(cartUpdate)}
                {showRemoveButton(showRemoveProductButton)}
                    <span style={{marginRight:'10px', float:'right', fontSize:'20px'}}>{product.price} €</span>
                </div>
                  </div>*/}
                <hr/>
            </div>
           



{/*

  {showCartUpdateOptions(cartUpdate)}*/}
    </div>
    <div style={{width:'100%', height:'30px', backgroundColor:'', paddingRight:'10px'}}>
      <span style={{float:'right', fontSize:'24px', lineHeight:'34px'}}>Sous-total({itemTotal()} article): 29 €</span>
    </div>
    </>
}
    </>
  );
};

export default CardCart;
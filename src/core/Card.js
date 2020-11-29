import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { addItem} from './cartHelper';
import LuneJaune from '../images/lunejaune.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShippingFast} from '@fortawesome/free-solid-svg-icons'
import Visa from '../images/visa.png'
import Date2 from './Date'


const Card = ({
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
    const maxpoint = 1920;

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View Product</button>
        </Link>
      )
    );
  };
  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <Link onClick={addToCart} style={{}} className="btn btn-outline-warning mt-2 mb-2 card-btn-1  ">
          ACHETER
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
    
  };

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
          </div>
        </div>
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
          Remove Product
        </button>
      )
    );
  };
  return (
    <>
    {width < breakpoint ? 
      <div style={{padding:'10px', display:'flex', flexDirection:'column'}}>
          <h3 style={{fontWeight:'bold'}}>{product.name}</h3>
          <img style={{width:'250px', height:'300px' }} src={LuneJaune}/>
          <h5 style={{margin:'0'}}>Prix de l'offre: {product.price} € <span style={{color:'red',fontSize:'18px'}}>Livraison gratuite en France Métropolitaine</span></h5>
          <p style={{color:'#888888'}}>TVA et frais inclus : env. 4.83 €.</p> 
          <Date2/>
          <p style={{margin:'0px', color:'#007600', fontSize:'24px', fontWeight:"500"}}>En stock.</p>
          {showAddToCartBtn(showAddToCartButton)}
          {shouldRedirect(redirect)}

          <span style={{fontSize:'16px', fontWeight:'bold'}}>EFFECTUEZ VOS ACHATS EN TOUTE CONFIANCE</span>
                <p style={{margin:'0'}}>Livraison Gratuite à votre domicile en France <FontAwesomeIcon icon={faShippingFast} /></p>
                <p>Paiement par carte bancaire sécurisée    <img style={{width:'120px'}} src={Visa}/></p>
                <p>Retour gratuit dans les 30 jours suivant la date de livraison.</p>
                

      </div>
       :
    <div style={{width:'100%', height:'730px', display:'flex'}}>
        <div id="details" style={{height:'500px',width:'80%', margin:'50px', border:'', display:'flex', alignItems:"left", padding:'50px'}}>
                <div style={{width:'50%', height:'100%', backgroundColor:''}}>
                    <img style={{width:'450px', height:'500px' }} src={LuneJaune}/>
                </div>
                <div style={{width:'1px', height:'120%', backgroundColor:'#d9d9d9'}}></div>
                <div style={{paddingLeft:'50px'}}>
                <h1 style={{fontWeight:'bold'}}>{product.name}</h1>
                <h1 style={{margin:'0'}}>{product.price} €</h1>
                <p style={{color:'#888888'}}>TVA et frais inclus : env. 4.83 €.</p> 
                <Date2/>
                {showAddToCartBtn(showAddToCartButton)}

                <p style={{marginTop:'10px', color:'#007600', fontSize:'20px', fontWeight:"500"}}>En stock</p>
                <hr/>
                <span style={{fontSize:'16px', fontWeight:'bold'}}>EFFECTUEZ VOS ACHATS EN TOUTE CONFIANCE</span>
                <p style={{margin:'0'}}>Livraison Gratuite à votre domicile en France <FontAwesomeIcon icon={faShippingFast} /></p>
                <p>Paiement par carte bancaire sécurisée    <img style={{width:'120px'}} src={Visa}/></p>
                <p>Retour gratuit dans les 30 jours suivant la date de livraison.</p>
                </div>
            </div>
      <div className="card-body">
        {shouldRedirect(redirect)}
        <br />



        {showRemoveButton(showRemoveProductButton)}

        {showCartUpdateOptions(cartUpdate)}
      </div>
    </div>
    }
    </>
  );
};

export default Card;


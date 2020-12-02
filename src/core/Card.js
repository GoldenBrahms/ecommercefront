import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { addItem} from './cartHelper';
import LuneJaune from '../images/lunejaune.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShippingFast} from '@fortawesome/free-solid-svg-icons'
import Visa from '../images/visa.png'
import Date2 from './Date'
import CarouselImage from './CarouselImage'
import './FAQ.css'



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
     console.log('added');
    addItem(product, setRedirect(false));
  };

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/mon-panier" />;
    }
  };

  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <a onClick={addToCart} href="/mon-panier" style={{width:'300px', fontWeight:'700'}} className="btn btn-outline-dark mt-2 mb-2 card-btn-1  ">
          ACHETER
        </a>
      )
    );
  };
  const showAddToCartBtnMobile = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <a onClick={addToCart} href="/mon-panier" style={{width:'100%', fontWeight:'700'}} className="btn btn-outline-dark mt-2 mb-2 card-btn-1  ">
          Ajouter au panier
        </a>
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
          <CarouselImage/>
          <p style={{margin:'0', fontSize:'18px'}}>Prix de l'offre: <span style={{color:'#B12704'}}>{product.price} €</span> <span style={{color:'black',fontSize:'18px'}}><b>Livraison gratuite</b> en France Métropolitaine</span></p>
          <p style={{color:'#888888'}}>Tout les prix incluent la TVA.</p> 
          <a href="#Faq"  className="Faqt">Questions fréquentes</a>
          <Date2/>
          <p style={{margin:'0px', color:'#007600', fontSize:'24px', fontWeight:"500"}}>En stock.</p>
          {showAddToCartBtnMobile(showAddToCartButton)}
          {shouldRedirect(redirect)}
          <hr style={{margin:'0'}}/>
                <ul style={{margin:'0', paddingLeft:'18px', fontSize:'14px'}}>
                  <li>Contient tout le Coran</li>
                  <li>Plusieurs recitateurs</li>
                  <li>Plusieurs couleurs</li>
                  <li>Enceinte Bluethoot</li>
                  <li>Télécommande</li>
                </ul>

          <span style={{fontSize:'16px', fontWeight:'bold'}}>EFFECTUEZ VOS ACHATS EN TOUTE CONFIANCE</span>
                <p style={{margin:'0'}}>Livraison Gratuite à votre domicile en France <FontAwesomeIcon icon={faShippingFast} /></p>
                <p>Paiement par carte bancaire sécurisée    <img style={{width:'120px'}} src={Visa}/></p>
                <p>Retour gratuit dans les 30 jours suivant la date de livraison.</p>
                

      </div>
       :
    <div style={{width:'100%', height:'730px', display:'flex', justifyContent:'center'}}>
        <div id="details" style={{height:'500px',width:'80%', margin:'50px', border:'', display:'flex', alignItems:"left"}}>
                <div style={{width:'50%', height:'100%', backgroundColor:''}}>
                  <CarouselImage/>
                </div>
                <div style={{width:'1px', height:'120%', backgroundColor:'#d9d9d9'}}></div>
                <div style={{paddingLeft:'50px'}}>
                <h1 style={{fontWeight:'bold'}}>{product.name}</h1>
                <span style={{margin:'0'}}>prix de l'offre : <span style={{color:'#B12704',fontSize:'18px'}}>{product.price} €</span> <span style={{fontSize:'14px'}}>Livraison gratuite en France métropolitaine</span></span>
                <p style={{color:'#888888'}}>TVA et frais inclus : env. 4.83 €.</p> 
                <span>Une question ? </span>
                <a href="#Faq"  className="Faqt">Questions fréquentes</a>
                <Date2/>
                {showAddToCartBtn(showAddToCartButton)}

                <p style={{marginTop:'10px', color:'#007600', fontSize:'20px', fontWeight:"500"}}>En stock.</p>
                <hr style={{margin:'0'}}/>
                <ul style={{margin:'0', paddingLeft:'14px', fontSize:'18px'}}>
                  <li>Contient tout le Coran</li>
                  <li>Plusieurs recitateurs</li>
                  <li>Plusieurs couleurs</li>
                  <li>Enceinte Bluethoot</li>
                  <li>Télécommande</li>
                </ul>
                <a href="#Description">Description du produit</a>
                <p style={{fontSize:'16px', fontWeight:'bold'}}>EFFECTUEZ VOS ACHATS EN TOUTE CONFIANCE</p>
                <p style={{margin:'0'}}>Livraison Gratuite à votre domicile en France <FontAwesomeIcon icon={faShippingFast} /></p>
                <p>Paiement par carte bancaire sécurisée    <img style={{width:'120px'}} src={Visa}/></p>
                <p>Retour gratuit dans les 30 jours suivant la date de livraison.</p>
                </div>
            </div>
        {shouldRedirect(redirect)}
        <br />



        {showRemoveButton(showRemoveProductButton)}

        {showCartUpdateOptions(cartUpdate)}
    </div>
    }
    </>
  );
};




export default Card;


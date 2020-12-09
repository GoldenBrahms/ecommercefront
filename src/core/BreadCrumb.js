import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import usePathname from './Pathname'


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadCrumb() {
    const path = usePathname()

    useEffect (() => {
        if ( path == "/paiement-securisée"){
            document.getElementById("Adresse").style.color = 'red'
            document.getElementById("Adresse").style.textDecoration = 'underline'
            
        }
        if ( path == "/paiement-sécurisée"){
            document.getElementById("Paiement").style.color = 'red'
            document.getElementById("Paiement").style.textDecoration = 'underline'
            
        }
    }, [])

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link className="disabled" id="Bienvenu" color="inherit" href="/" >
        Bienvenue
      </Link>
      <Link id="Adresse" color="inherit" href="/paiement-securisée/" onClick={handleClick}>
        Adresse
      </Link>
      <Link id="Paiement" color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Paiement
      </Link>
      <Link color="inherit" href="/validation">
        Validation
      </Link>
    </Breadcrumbs>
  );
}
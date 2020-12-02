import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Menu from './core/Menu';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import Profile from './user/Profile';
import AdminDashboard from './user/AdminDashboard';
import AdminRoute from './auth/AdminRoute';
import Header from './core/Header';
import Checkout from './core/Checkout'
import Cart from './core/Cart'
import CheckoutDirect from './core/CheckoutDirect'
import CheckoutDirectInvite from './core/CheckoutDirectInvite'
import ProductDescription from './core/ProductDescription';
import Footer from './core/Footer'
import Contact from './core/Contact'
import ContactEmail from './core/ContactEmail'
import Conditions from './Conditions'
import PolitiqueConf from './PolitiqueConf'
import MentionsLegales from './MentionsLegales'
import Remerciement from './Remerciement'
import NotFound from './core/Notfound.js'
import './Style.css'


const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/identifier" component={Checkout}/>
                    <Route exact path="/paiement-securisée" component={CheckoutDirect}/>
                    <Route exact path="/paiement-secure-invite" component={CheckoutDirectInvite}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/Assistance" component={Contact}/>
                    <Route exact path="/contact/email" component={ContactEmail}/>
                    <Route exact path="/conditions-dutilisation" component={Conditions}/>
                    <Route exact path="/politiquedeconfidentialitée" component={PolitiqueConf}/>
                    <Route exact path="/mentionslegales" component={MentionsLegales}/>
                    <Route exact path="/remerciement" component={Remerciement}/>
                    <Route path="/mon-panier" exact component={Cart} />
                    <PrivateRoute path="/user/dashboard" exact component={Dashboard}/>
                    <PrivateRoute path="/profile/:userId" exact component={Profile}/>
                    <PrivateRoute path="/product/:productId" exact component={ProductDescription}/>
                    <AdminRoute 
                    path="/admin/dashboard" 
                    exact 
                    component={AdminDashboard}/>
                    <Route component={NotFound} />
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default Routes;
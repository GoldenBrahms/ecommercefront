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
import CheckoutDirect from './core/CheckoutDirect'
import ProductDescription from './core/ProductDescription';
import Footer from './core/Footer'


const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Checkout" component={Checkout}/>
                    <Route exact path="/CheckoutDirect" component={CheckoutDirect}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/signup" component={Signup}/>
                    <PrivateRoute path="/user/dashboard" exact component={Dashboard}/>
                    <PrivateRoute path="/profile/:userId" exact component={Profile}/>
                    <AdminRoute 
                    path="/admin/dashboard" 
                    exact 
                    component={AdminDashboard}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default Routes;
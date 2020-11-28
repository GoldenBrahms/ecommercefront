import React from 'react';
import Layout from './Layout';
import ProductDescription from './ProductDescription'
import ProductDescription2 from './ProductDescription2'
import {isAuthenticated} from '../auth';

const Home = () => {
    return (
    <Layout>
        {!isAuthenticated() && (
        <ProductDescription />)}
        {isAuthenticated() && (
            <ProductDescription2/>
        )}
    </Layout>
    );
}

export default Home;
import React from 'react';
import Menu from './Menu';
import Header from './Header';

const Layout = ({ title, description, className, children }) => {
        return (
        <div>
            <Header/>
            
            <div>{children}</div>
        </div>
        );
}

export default Layout;
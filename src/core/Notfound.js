import React from 'react'
import Header from './Header'

const NotFound = ({location}) => {
    return (
        <>
            <Header/>
            <div>
                <h1>{location.pathname}</h1>
            </div>
        </>
    )
}

export default NotFound;
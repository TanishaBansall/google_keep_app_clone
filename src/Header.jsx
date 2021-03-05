import React from 'react';
import logo from './images/logo.png';
const Header = () => {
    return(
        <>
            <div className="header">
                <img src={logo} alt="logo" height="100px" width="100px"/>
                <h1>keep</h1>
            </div>

        </>



    )
}

export default Header;
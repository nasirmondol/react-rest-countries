import React from 'react';
import './Header.css'

const Header = () => {
    
    return (
        <>
        <h2>Welcome to my rest Countries</h2>
        <nav className='header'>
            <a href="/home">Home</a>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
        </nav>
        </>
    );
};

export default Header;
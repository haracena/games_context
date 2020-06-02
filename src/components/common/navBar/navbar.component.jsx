import React from 'react';
import logo from '../../../logo.svg';
import './navbar.style.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Link to='/'>
            <div className='text-center'>
                <img src={logo} className="App-logo" alt="logo"></img>
                <h1 className='text-center d-inline-block m-0'>React Games</h1>
            </div>
        </Link>
    );
}

export default NavBar;

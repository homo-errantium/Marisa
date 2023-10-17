import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        /*цвет шапки*/
        <header className='header'>
            <NavLink className='header__logo' to='/'>
                <img
                    className='header__logo-image'
                    src={logo}
                    alt='Логотип сайта'
                />
            </NavLink>
            <Navigation />
        </header>
    );
}

export default Header;

import React from 'react';
import './Header.sass';
import Navigation from '../Navigation/Navigation';
import headerLogo from '../../images/logo-marisa.jpg';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <NavLink className='header__logo' to='/'>
                <img
                    className='header__logo-image'
                    alt='header logo'
                    src={headerLogo}
                />
            </NavLink>
            <Navigation />
            <div className='header__info'>
                <a
                    className='header__info-phone'
                    href='tel:+79534861552'
                    target='_blank'
                    rel='noreferrer'
                >
                    +7 (953) 48 61 552
                </a>
                <span className='header__info-worktime'>c 9:00 до 21:00</span>
                <span className='header__info-city'>Казань</span>
            </div>
        </header>
    );
}

export default Header;

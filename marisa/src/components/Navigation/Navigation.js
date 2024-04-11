import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Navigation.css';

function Navigation() {
    const [isClicked, setIsClicked] = useState(false);

    function handleOpen() {
        setIsClicked(true);
    }

    function handleClose() {
        setIsClicked(false);
    }
    return (
        <div className='navigation'>
            <>
                <nav className='navigation__links'>
                    <NavLink to='/' className='navigation__link'>
                        Главная
                    </NavLink>
                    <NavLink to='/menu' className='navigation__link'>
                        Торты
                    </NavLink>
                    <NavLink to='/fillings' className='navigation__link'>
                        Начинки
                    </NavLink>
                    <NavLink to='/about-me' className='navigation__link'>
                        Обо мне
                    </NavLink>
                    <NavLink to='/contacts' className='navigation__link'>
                        Контакты
                    </NavLink>
                </nav>
                <button
                    type='button'
                    className='navigation__burger-button'
                    onClick={handleOpen}
                >
                    <span className='navigation__burger-button-element'></span>
                </button>
                {isClicked ? <BurgerMenu handleClose={handleClose} /> : ''}
            </>
        </div>
    );
}

export default Navigation;

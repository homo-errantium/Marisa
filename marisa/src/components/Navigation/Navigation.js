import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to='/' className='navigation__link'>
                        Главная
                    </Link>
                    <Link to='/menu' className='navigation__link'>
                        Торты
                    </Link>
                    <Link to='/fillings' className='navigation__link'>
                        Начинки
                    </Link>
                    <Link to='/about-me' className='navigation__link'>
                        Обо мне
                    </Link>
                    <Link to='/contacts' className='navigation__link'>
                        Контакты
                    </Link>
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

import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.sass';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import MainPage from '../MainPage/MainPage';
import MenuPage from '../MenuPage/MenuPage';
import FillingsPage from '../FillingsPage/FillingsPage';
import AboutMePage from '../AboutMePage/AboutMePage';
import ContactsPage from '../ContactsPage/ContactsPage';
import ImagePopup from '../ImagePopup/ImagePopup';

function App() {
    //выбранная карточка
    const [selectedCard, setSelectedCard] = useState(null);

    // открытие попапа
    function openPopupViewer(card) {
        setSelectedCard(card);
    }
    // закрытие попапа
    function closeAllPopups() {
        setSelectedCard(false);
    }

    // закрытие попапа по клавише Esc или по клику вне области
    useEffect(() => {
        const close = (e) => {
            if (
                e.keyCode === 27 ||
                e.target.classList.contains('popup_opened')
            ) {
                closeAllPopups();
            }
        };
        window.addEventListener('keydown', close);
        window.addEventListener('click', close);
        return () => {
            window.removeEventListener('keydown', close);
            window.removeEventListener('click', close);
        };
    }, []);

    return (
        <div className='page'>
            <Routes>
                <Route
                    path='/'
                    element={<MainPage onCardClick={openPopupViewer} />}
                />

                <Route
                    path='/menu'
                    element={<MenuPage onCardClick={openPopupViewer} />}
                />
                <Route
                    path='/fillings'
                    element={<FillingsPage onCardClick={openPopupViewer} />}
                />
                <Route path='/about-me' element={<AboutMePage />} />
                <Route path='/contacts' element={<ContactsPage />} />

                <Route path='*' element={<Navigate to='/' replace={true} />} />
            </Routes>
            <ImagePopup
                isOpen={selectedCard}
                card={selectedCard}
                onClose={closeAllPopups}
            />
        </div>
    );
}

export default App;

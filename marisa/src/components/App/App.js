import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import MainPage from '../MainPage/MainPage';
import MenuPage from '../MenuPage/MenuPage';
import FillingsPage from '../FillingsPage/FillingsPage';
import AboutMePage from '../AboutMePage/AboutMePage';
import ContactsPage from '../ContactsPage/ContactsPage';
import ImagePopup from '../ImagePopup/ImagePopup';

function App() {
    const [selectedCard, setSelectedCard] = useState(null); //выбранная карточка

    // закрытие попапа
    function closeAllPopups() {
        setSelectedCard(false);
    }

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                closeAllPopups();
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, []);

    // открытие попапа
    function openPopupViewer(card) {
        setSelectedCard(card);
    }

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
                <Route path='/fillings' element={<FillingsPage />} />
                <Route path='/about-me' element={<AboutMePage />} />
                <Route path='/contacts' element={<ContactsPage />} />
                <Route path='*' element={<NotFoundPage />} />
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

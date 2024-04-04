import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Fillings from '../Fillings/Fillings';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import ImagePopup from '../ImagePopup/ImagePopup';

function App() {
    const [selectedCard, setSelectedCard] = React.useState(null); //выбранная карточка

    function closeAllPopups() {
        // закрытие попапа
        setSelectedCard(false);
    }

    function openPopupViewer(card) {
        // открытие попапа
        setSelectedCard(card);
    }

    return (
        <div className='page'>
            <Routes>
                <Route
                    path='/'
                    element={<Main onCardClick={openPopupViewer} />}
                />
                <Route path='/menu' element={<Menu />} />
                <Route path='/fillings' element={<Fillings />} />
                <Route path='/about-me' element={<AboutMe />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='*' element={<NotFound />} />
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

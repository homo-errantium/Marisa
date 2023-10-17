import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Cakes from '../Cakes/Cakes';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';

function App() {
    return (
        <div className='page'>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                {/* <Route path='/menu' element={<Menu />} />
                <Route path='/cakes' element={<Cakes />} />
                <Route path='/about-me' element={<AboutMe />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='*' element={<NotFound />} /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

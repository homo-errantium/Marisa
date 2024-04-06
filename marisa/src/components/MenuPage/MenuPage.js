import './MenuPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MenuContent from '../MenuContent/MenuContent';
import Main from '../Main/Main';

function MenuPage({ onCardClick }) {
    return (
        <div className='wrapper'>
            <Header />
            <Main>
                <MenuContent onCardClick={onCardClick} />
            </Main>
            <Footer />
        </div>
    );
}

export default MenuPage;

import './Menu.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MenuContent from '../MenuContent/MenuContent';

function Menu() {
    return (
        <div className='wrapper'>
            <Header />
            <main className='main'>
                <MenuContent />
            </main>
            <Footer />
        </div>
    );
}

export default Menu;

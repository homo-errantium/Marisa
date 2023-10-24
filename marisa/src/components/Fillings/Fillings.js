import './Fillings.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FillingsContent from '../FillingsContent/FillingsContent';

function Fillings() {
    return (
        <div className='wrapper'>
            <Header />
            <main className='main'>
                <FillingsContent />
            </main>
            <Footer />
        </div>
    );
}

export default Fillings;

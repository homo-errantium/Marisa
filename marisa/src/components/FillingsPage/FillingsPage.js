import './FillingsPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FillingsContent from '../FillingsContent/FillingsContent';

function FillingsPage() {
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

export default FillingsPage;

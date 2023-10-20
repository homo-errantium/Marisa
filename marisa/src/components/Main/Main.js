import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainTop from '../MainTop/MainTop';
import MainMiddle from '../MainMiddle/MainMiddle';
import MainBottom from '../MainBottom/MainBottom';

function Main() {
    return (
        <div className='wrapper'>
            <Header />
            <main className='main'>
                <MainTop />
                <MainMiddle />
                <MainBottom />
            </main>
            <Footer />
        </div>
    );
}

export default Main;

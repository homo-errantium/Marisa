import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainTop from '../MainTop/MainTop';
import MainMiddle from '../MainMiddle/MainMiddle';
import MainBottom from '../MainBottom/MainBottom';

function Main(props) {
    return (
        <div className='wrapper'>
            <Header />
            <main className='main'>
                <MainTop />
                <MainMiddle />
                <MainBottom onCardClick={props.onCardClick} />
            </main>
            <Footer />
        </div>
    );
}

export default Main;

import './MainPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Slider from '../Slider/Slider';
import { Cakes } from '../DataBase/CakeData';

function MainPage({ onCardClick }) {
    return (
        <div className='wrapper'>
            <Header />
            <Main>
                <>
                    <section className='main main_top'>
                        <h1 className='main__title'>Marisa Cake</h1>
                        <h2 className='main__subtitle'>
                            Торты на заказ в Казани
                        </h2>
                    </section>
                    <section className='main main_middle'>
                        <button className='main__order-button'>заказать</button>
                    </section>
                    <section className='main main_bottom'>
                        <Slider title={'Торты'} onCardClick={onCardClick}>
                            {Cakes}
                        </Slider>
                    </section>
                </>
            </Main>
            <Footer />
        </div>
    );
}

export default MainPage;

import './MainTop.css';
import telegramButtonImage from '../../images/telegram-button-image.png';
import whatsappButtonImage from '../../images/whatsapp-button-image.png';
function MainTop() {
    return (
        <section className='main__top'>
            <h1 className='main__title'>Marisa Cake</h1>
            <h2 className='main__subtitle'>Торты на заказ в Казани</h2>
            <h3 className='main__description'>кондитер Марина Сафина</h3>
            <div className='main__buttons'>
                <button className='main__button'>
                    <img
                        src={telegramButtonImage}
                        alt='иконка кнопки связи по телефону'
                        className='main__button-image'
                    />
                    Написать в telegram
                </button>
                <button className='main__button'>
                    <img
                        src={whatsappButtonImage}
                        alt='иконка кнопки связи по ватсап'
                        className='main__button-image'
                    />
                    Написать в whatsapp
                </button>
            </div>
        </section>
    );
}

export default MainTop;

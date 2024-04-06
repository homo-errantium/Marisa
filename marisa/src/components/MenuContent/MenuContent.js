import './MenuContent.css';
import { Cakes } from '../DataBase/cakeData';

function MenuContent({ onCardClick }) {
    return (
        <section className='cakes'>
            <h1 className='cakes__title'>
                Заказывайте вкусные десерты ручной работы
            </h1>
            <div className='cakes__gallery'>
                {Cakes.map((cake) => {
                    return (
                        <figure className='cakes__card'>
                            <img
                                className='cakes__card-image'
                                src={cake.image}
                                alt={cake.name}
                                title={cake.name}
                                onClick={onCardClick}
                            />

                            <figcaption className='cakes__info'>
                                <span className='cakes__caption'>
                                    {cake.name}
                                </span>
                                <div className='cakes__weight-container'>
                                    <span className='cakes__weight-title'>
                                        Вес
                                    </span>
                                    <span className='cakes__weight'>
                                        {`${cake.weight} кг`}
                                    </span>
                                </div>
                                <button
                                    type='button'
                                    onClick={alert('Thank you!')}
                                    className='cakes__buy-button'
                                >
                                    Заказать
                                </button>
                            </figcaption>
                        </figure>
                    );
                })}
            </div>
        </section>
    );
}

export default MenuContent;

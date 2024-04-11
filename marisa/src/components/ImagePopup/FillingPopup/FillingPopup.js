import './FillingPopup.css';

function FillingPopup({ card }) {
    return (
        <>
            <div className='popup__images'>
                <img
                    src={card ? card.image : ''}
                    alt={card ? card.name : ''}
                    className='popup__image'
                />
            </div>

            <div className='popup__text'>
                <div className='popup__text-container'>
                    <span className='popup__title'>
                        {card ? card.name : ''}
                    </span>
                    <p className='popup__description'>
                        <span className='popup__description popup__description_first-word'>
                            Состав:
                        </span>
                        {` ${card ? card.description : ''}`}
                    </p>
                </div>
                <button className='popup__button' type='button'>
                    Заказать
                </button>
            </div>
        </>
    );
}

export default FillingPopup;

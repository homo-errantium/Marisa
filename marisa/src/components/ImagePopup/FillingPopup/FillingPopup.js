import './FillingPopup.sass';

function FillingPopup({ card }) {
    return (
        <>
            <div className='popup__images'>
                <img
                    src={card ? card.image : ''}
                    alt={card ? card.name : ''}
                    className='popup__image popup__image_filling'
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
            </div>
        </>
    );
}

export default FillingPopup;

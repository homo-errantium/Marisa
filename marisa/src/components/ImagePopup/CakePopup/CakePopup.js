import './CakePopup.sass';

function CakePopup({ selectedImage, miniImages, card, vieweImage }) {
    return (
        <>
            <div className='popup__images'>
                <img
                    src={selectedImage ?? miniImages[0]}
                    alt={card ? card.name : ''}
                    className='popup__image'
                />
                <div className='popup__mini-images-container'>
                    {miniImages.map((image, key) => {
                        return (
                            <img
                                key={key}
                                className={`popup__mini-image ${
                                    selectedImage &&
                                    image.slice(-10) ===
                                        selectedImage.slice(-10) &&
                                    'popup__mini-image_selected' // выделить тот слайд, чей адрес совпадает с главным
                                }`}
                                src={image}
                                alt={`фото ${card.name}`}
                                onClick={vieweImage}
                            />
                        );
                    })}
                </div>
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

export default CakePopup;

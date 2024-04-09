import React, { useEffect, useState } from 'react';

import './ImagePopup.css';

function ImagePopup(props) {
    const [miniImages, setMiniImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(miniImages[0]); //выбранная карточка

    function closePopup() {
        props.onClose();
        setSelectedImage(null);
    }

    function vieweImage(event) {
        setSelectedImage(event.target.src);
    }

    const card = props.card;

    useEffect(() => {
        if (card) setMiniImages(card.revieweImages);
    }, [card]);

    return (
        <div className={`popup  ${card ? 'popup_opened' : ''}`}>
            <div className='popup__content'>
                <div className='popup__cake-images'>
                    <img
                        src={selectedImage ?? miniImages[0]} // если не выбран ни один слайд, то исходным сделать первый из мини изобржений
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

                <div className='popup__cake-text'>
                    <div className='popup__cake-text-container'>
                        <span className='popup__cake-title'>
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

                <button
                    type='button'
                    className='popup__btn-close'
                    onClick={closePopup}
                ></button>
            </div>
        </div>
    );
}

export default ImagePopup;

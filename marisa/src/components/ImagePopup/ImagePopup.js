import React, { useEffect, useState } from 'react';

import './ImagePopup.css';

function ImagePopup(props) {
    console.log(props);
    const card = props.card;
    const [miniImages, setMiniImages] = useState([]);

    useEffect(() => {
        if (card) setMiniImages(card.revieweImages);
    }, [card]);

    // console.log(miniImages);
    const [selectedImage, setSelectedImage] = useState(null); //выбранная карточка

    function vieweImage(event) {
        setSelectedImage(event.target.src);
    }

    return (
        <div className={`popup  ${card ? 'popup_opened' : ''}`}>
            <div className='popup__content'>
                <div className='popup__cake-images'>
                    <img
                        src={selectedImage ?? miniImages[0]}
                        alt={card ? card.name : ''}
                        className='popup__image'
                    />
                    <div className='popup__mini-images-container'>
                        {miniImages.map((image) => {
                            return (
                                <img
                                    key={image.id}
                                    className='popup__mini-image'
                                    src={image}
                                    alt={`фото ${card.name}`}
                                    onClick={vieweImage}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className='popup__cake-text'>
                    <span className='popup__description'>
                        {card ? card.description : ''}
                    </span>
                </div>

                <button
                    type='button'
                    className='popup__btn-close'
                    onClick={props.onClose}
                ></button>
            </div>
        </div>
    );
}

export default ImagePopup;

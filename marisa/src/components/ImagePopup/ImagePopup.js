import React, { useEffect, useState } from 'react';
import CakePopup from './CakePopup/CakePopup';
import FillingPopup from './FillingPopup/FillingPopup';
import { useLocation } from 'react-router-dom';
import './ImagePopup.css';

function ImagePopup({ isOpen, card, onClose }) {
    const [miniImages, setMiniImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(miniImages[0]);
    const location = useLocation();

    //ф-я для просмотра мини-изображений
    function vieweImage(event) {
        setSelectedImage(event.target.src);
    }

    //ф-я закрытия попап и очистки текущей карточки
    function closeMultiImagePopup() {
        onClose();
        setSelectedImage(null);
    }

    // взятие массива мини изображений
    useEffect(() => {
        if (location.pathname === '/menu' && card)
            setMiniImages(card.revieweImages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [card]);

    //ф-я выбора типа попапа в зависимости от расположения попапа
    function handleChangeChild() {
        switch (location.pathname) {
            case '/menu':
                return (
                    <CakePopup
                        selectedImage={selectedImage}
                        miniImages={miniImages}
                        card={card}
                        vieweImage={vieweImage}
                    />
                );
            case '/fillings':
                return <FillingPopup card={card} />;
            default:
                console.log('wrong path');
        }
    }

    return (
        <div className={`popup  ${isOpen ? 'popup_opened' : ''}`}>
            <div className='popup__content'>
                {handleChangeChild()}

                <button
                    type='button'
                    className='popup__btn-close'
                    onClick={closeMultiImagePopup}
                ></button>
            </div>
        </div>
    );
}

export default ImagePopup;

import React from 'react';
import './ImagePopup.css';

function ImagePopup(props) {
    return (
        <div
            className={`popup popup_viewer ${props.card ? 'popup_opened' : ''}`}
        >
            <figure className='popup__content'>
                <img
                    src={props.card ? props.card.link : ''}
                    alt={props.card ? props.card.name : ''}
                    className='popup__image'
                />
                {/* {props.card.sliderTitle !== 'Отзывы' && (
                    <figcaption className='popup__description'>
                        {props.card ? props.card.description : ''}
                    </figcaption>
                )} */}

                <figcaption className='popup__description'>
                    {props.card ? props.card.description : ''}
                </figcaption>

                <button
                    type='button'
                    className='popup__btn-close'
                    onClick={props.onClose}
                ></button>
            </figure>
        </div>
    );
}
export default ImagePopup;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SliderCard.sass';

function Card(card) {
    const location = useLocation();
    const navigate = useNavigate();

    //функция просмотра - вызова попапа просмотра
    function handleClickViewe() {
        card.onCardClick(card);
    }

    //функция переадресации
    function handleClickNavigate() {
        navigate(`${card.link}`, { replace: true });
    }

    // выбор функции в зависимости от расположения карточки
    function handleClick() {
        switch (location.pathname) {
            case '/':
                handleClickNavigate();
                break;
            case '/menu':
                handleClickViewe();
                break;

            case '/fillings':
                handleClickViewe();
                break;
            default:
                console.log('wrong path');
        }
    }

    return (
        <figure
            className='card'
            style={{
                width: `${card.cardWidth}vw`,
            }}
        >
            <img
                className='card__image'
                src={card.image}
                alt={card.name}
                title={card.name}
                onClick={handleClick}
            />

            <figcaption className='card__info'>
                <span className='card__caption'>{card.name}</span>
            </figcaption>
        </figure>
    );
}

export default Card;

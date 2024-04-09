import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card(card) {
    const location = useLocation();
    const navigate = useNavigate();

    function handleClickViewe() {
        card.onCardClick(card);
    }

    function handleClickNavigate() {
        navigate(`${card.link}`, { replace: true });
    }

    function handleClick() {
        switch (location) {
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
        <figure className='card'>
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

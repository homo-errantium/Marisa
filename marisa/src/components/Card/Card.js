import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card(card) {
    console.log(card);
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);

    function handleClickViewe() {
        card.onCardClick(card);
    }

    function handleClickNavigate() {
        navigate(`${card.link}`, { replace: true });
    }

    return (
        <figure className='card'>
            <img
                className='card__image'
                src={card.image}
                alt={card.name}
                title={card.name}
                onClick={
                    location === '/' ? handleClickViewe : handleClickNavigate
                }
            />

            <figcaption className='card__info'>
                <span className='card__caption'>{card.name}</span>
            </figcaption>
        </figure>
    );
}

export default Card;

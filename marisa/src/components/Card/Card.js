import React from 'react';
import './Card.css';

function Card(card) {
    function handleClick() {
        card.onCardClick(card);
    }

    return (
        <figure className='card'>
            <img
                className='card__image'
                src={card.link}
                alt={card.name}
                title={card.name}
                onClick={handleClick}
            />

            <figcaption className='card__info'>
                <span className='card__caption'>{card.description}</span>
            </figcaption>
        </figure>
    );
}

export default Card;

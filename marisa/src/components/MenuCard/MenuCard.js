import React from 'react';
import './MenuCard.css';

function MenuCard(props) {
    return (
        <li className='menu-card'>
            <a
                className='menu-card__link'
                href={props.cardLink}
                target='_blank'
                rel='noreferrer'
            >
                <img
                    className='menu-card__image'
                    alt='фото торта'
                    src={props.cardImageSrc}
                />
                <h2 className='menu-card__title'>{`${props.cardTitle}`}</h2>
            </a>
        </li>
    );
}

export default MenuCard;

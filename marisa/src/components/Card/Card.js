import React from 'react';

function Card(cake) {
    function handleClick() {
        cake.onCardClick(cake);
    }

    return (
        <figure className='slide'>
            <img
                className='slider__image'
                // вот так не работает
                // src={require(`${cake.link}`)}
                src={cake.link}
                // а так работает
                // src={require(`../../images/gallery1.jpg`)}
                alt={cake.name}
                title={cake.name}
                onClick={handleClick}
            />

            <figcaption className='slider__info'>
                <span className='slider__caption'>{cake.description}</span>
            </figcaption>
        </figure>
    );
}

export default Card;

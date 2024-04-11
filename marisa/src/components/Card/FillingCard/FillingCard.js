import './FillingCard.css';

//карточка начинки

function FillingCard(filling) {
    function handleClickViewe() {
        filling.onCardClick(filling);
    }
    return (
        <figure className='filling__card'>
            <img
                className='filling__card-image'
                src={filling.image}
                alt={filling.name}
                title={filling.name}
                onClick={handleClickViewe}
            />

            <figcaption className='filling__title'>{filling.name}</figcaption>
        </figure>
    );
}

export default FillingCard;

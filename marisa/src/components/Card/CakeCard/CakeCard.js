import './CakeCard.sass';

function CakeCard(cake) {
    function handleClickViewe() {
        cake.onCardClick(cake);
    }
    return (
        <figure className='cake__card'>
            <img
                className='cake__card-image'
                src={cake.image}
                alt={cake.name}
                title={cake.name}
                onClick={handleClickViewe}
            />

            <figcaption className='cake__info'>
                <span className='cake__caption'>{cake.name}</span>
                <div className='cake__weight-container'>
                    <span className='cake__weight-title'>Вес</span>
                    <span className='cake__weight'>{`${cake.weight} кг`}</span>
                </div>
                <button type='button' className='cake__buy-button'>
                    Заказать
                </button>
            </figcaption>
        </figure>
    );
}

export default CakeCard;

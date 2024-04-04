import './MainBottom.css';
import Slider from '../Slider/Slider';
import Card from '../Card/Card';
import { Cakes } from '../DataBase/CakeData';

function MainBottom({ onCardClick }) {
    return (
        <section className='main__bottom'>
            {/* <h2 className='main__bottom-title'>Торты</h2> */}
            <Slider title={'Торты'}>
                {Cakes.map((cake) => (
                    <Card key={cake.id} {...cake} onCardClick={onCardClick} />
                ))}
            </Slider>
            <h2 className='main__bottom-title'>Десерты</h2>

            <h2 className='main__bottom-title'>Меренговый рулет</h2>

            <h2 className='main__bottom-title'>Отзывы</h2>
        </section>
    );
}

export default MainBottom;

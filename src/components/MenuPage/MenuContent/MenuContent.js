import './MenuContent.sass';
import { Cakes } from '../../DataBase/CakeData';
import CakeCard from '../../Card/CakeCard/CakeCard';

function MenuContent({ onCardClick }) {
    return (
        <section className='cakes'>
            <h1 className='cakes__title'>
                Заказывайте вкусные десерты ручной работы
            </h1>
            <div className='cakes__gallery'>
                {Cakes.map((cake) => {
                    return (
                        <CakeCard
                            key={cake.id}
                            {...cake}
                            onCardClick={onCardClick}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default MenuContent;

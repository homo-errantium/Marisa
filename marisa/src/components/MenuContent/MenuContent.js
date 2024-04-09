import './MenuContent.css';
import { Cakes } from '../DataBase/CakeData';
import Cake from '../Cake/Cake';

function MenuContent({ onCardClick }) {
    return (
        <section className='cakes'>
            <h1 className='cakes__title'>
                Заказывайте вкусные десерты ручной работы
            </h1>
            <div className='cakes__gallery'>
                {Cakes.map((cake) => {
                    return (
                        <Cake
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

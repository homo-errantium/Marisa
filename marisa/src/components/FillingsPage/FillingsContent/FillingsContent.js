import FillingCard from '../../Card/FillingCard/FillingCard';
import './FillingsContent.css';
import Fillings from '../../DataBase/fillingsData';

function FillingsContent({ onCardClick }) {
    return (
        <section className='fillings'>
            <h1 className='fillings__title'>
                Заказывайте вкусные десерты ручной работы
            </h1>
            <div className='fillings__gallery'>
                {Fillings.map((filling) => {
                    return (
                        <FillingCard
                            key={filling.id}
                            {...filling}
                            onCardClick={onCardClick}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default FillingsContent;

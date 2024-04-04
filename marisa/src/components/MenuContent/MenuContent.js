import './MenuContent.css';
import MenuCard from '../MenuCard/MenuCard';
import cardImage1 from '../../images/cakes/gallery1.jpg';
import cardImage2 from '../../images/cakes/gallery2.jpg';
import cardImage3 from '../../images/cakes/gallery3.jpg';
import cardImage4 from '../../images/cakes/gallery4.jpg';

function MenuContent() {
    return (
        <section className='menu-content'>
            <h1 className='menu-content__title'>
                Заказывайте вкусные десерты ручной работы
            </h1>

            <ul className='menu-content__gallery'>
                <MenuCard
                    cardImageSrc={cardImage1}
                    cardLink={'ya.ru'}
                    cardTitle={'Tort1'}
                />
                <MenuCard
                    cardImageSrc={cardImage2}
                    cardLink={'ya.ru'}
                    cardTitle={'Tort2'}
                />
                <MenuCard
                    cardImageSrc={cardImage3}
                    cardLink={'ya.ru'}
                    cardTitle={'Tort1'}
                />
                <MenuCard
                    cardImageSrc={cardImage4}
                    cardLink={'ya.ru'}
                    cardTitle={'Tort1'}
                />
                <MenuCard
                    cardImageSrc={cardImage1}
                    cardLink={'ya.ru'}
                    cardTitle={'Tort1'}
                />
                <MenuCard
                    cardImageSrc={cardImage2}
                    cardLink={'ya.ru'}
                    cardTitle={'Tort1'}
                />
                <MenuCard
                    cardImageSrc={cardImage3}
                    cardLink={'ya.ru'}
                    cardTitle={'Tort1'}
                />
                <MenuCard
                    cardImageSrc={cardImage4}
                    cardLink={'ya.ru'}
                    cardTitle={'Tort1'}
                />
                <MenuCard
                    cardImageSrc={cardImage1}
                    cardLink={'ya.ru'}
                    cardTitle={'Tort1'}
                />
                <MenuCard
                    cardImageSrc={cardImage2}
                    cardLink={'ya.ru'}
                    cardTitle={'Tort2'}
                />
                <MenuCard
                    cardImageSrc={cardImage3}
                    cardLink={'ya.ru'}
                    cardTitle={'Tort1'}
                />
                <MenuCard
                    cardImageSrc={cardImage4}
                    cardLink={'ya.ru'}
                    cardTitle={'Tort1'}
                />
            </ul>
        </section>
    );
}

export default MenuContent;

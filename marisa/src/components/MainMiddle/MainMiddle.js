import './MainMiddle.css';
import authorImage from '../../images/main-info-image.jpg';
import dessertImage from '../../images/main-bg.jpg';
import targetImage from '../../images/main-bg-image.jpg';
import feedbackImage from '../../images/feedback.jpg';
function MainMiddle() {
    return (
        <section className='main__middle'>
            {/* <div className='main__info main__info_left'>
                <img
                    src={authorImage}
                    alt='фото кондитера'
                    className='main__info-image'
                />
                <div className='main__info-text'>
                    <h2 className='main__info-title'>Привет</h2>
                    <h3 className='main__info-subtitle'>
                        Меня зовут Марина и я Кондитер
                    </h3>
                    <p className='main__info-description'>
                        В течение пяти лет я профессионально занимаюсь выпечкой
                        муссовых и бисквитных тортиков. А также капкейков,
                        макаронс и эклеров. У меня вы можете купить торт на
                        любой праздник: свадьбу, день рождение любимого
                        человека,новый год и даже на хэллоуин. В каждый десерт
                        вложена фантазия, много любви и доброты. Я очень дорожу
                        вами и вашем здоровьем, поэтому пеку только из
                        натуральных продуктов.
                    </p>
                </div>
            </div> */}

            <button className='main__info__button'>заказать</button>

            {/* <div className='main__info main__info_right'>
                <img
                    src={dessertImage}
                    alt='фото торта'
                    className='main__info-image'
                />
                <div className='main__info-text'>
                    <h2 className='main__info-title'>Десерты</h2>
                    <h3 className='main__info-subtitle'>
                        Попробуйте десрты ручной работы в Казани
                    </h3>
                    <p className='main__info-description'>
                        Я пеку свои десерты из самых лучших ингредиентов.
                        Использую только свежие ягоды, бельгийский шоколад,
                        проверенные годами ингредиенты и всегда совершенствую
                        свои умения
                    </p>
                </div>
            </div>
            <div className='main__info main__info_left'>
                <img
                    src={targetImage}
                    alt='фото торта'
                    className='main__info-image'
                />
                <div className='main__info-text'>
                    <h2 className='main__info-title'>Цель</h2>
                    <h3 className='main__info-subtitle'>
                        Сделать жизнь людей слаще
                    </h3>
                    <p className='main__info-description'>
                        Я очень рада, когда тортик испеченный мною, дарит улыбку
                        ребенку на день его рождения или девушке с парнем,
                        которые разрезают его в самый счастливый для них день.
                        Моя цель — делать жизнь людей счастливее и радостнее со
                        своей выпечкой.
                    </p>
                </div>
            </div>
            <div className='main__info main__info_right'>
                <img src={feedbackImage} alt='' className='main__info-image' />
                <div className='main__info-text'>
                    <h2 className='main__info-title'>Отзывы</h2>
                    <h3 className='main__info-subtitle'>Люди любят десерты</h3>
                    <p className='main__info-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est debitis rem quos tempore? Commodi blanditiis,
                        accusantium id nam sunt laboriosam, sint harum impedit
                        officia quae odio, aliquam veritatis officiis ut!
                    </p>
                </div>
            </div> */}
        </section>
    );
}

export default MainMiddle;

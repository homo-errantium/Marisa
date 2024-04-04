import './AboutMePage.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import authorImage from '../../images/main-info-image.jpg';
import dessertImage from '../../images/main-bg.jpg';

function AboutMePage() {
    return (
        <div className='wrapper'>
            <Header />
            <main className='main'>
                <section className='about-me'>
                    <div className='about-me__info about-me__info_left'>
                        <img
                            src={authorImage}
                            alt='фото кондитера'
                            className='about-me__info-image'
                        />
                        <div className='about-me__info-text'>
                            <h2 className='about-me__info-title'>
                                ДОБРО ПОЖАЛОВАТЬ
                            </h2>
                            <h3 className='about-me__info-subtitle'>
                                Меня зовут Марина и я Кондитер
                            </h3>
                            <p className='about-me__info-description'>
                                В течение 3х лет я профессионально занимаюсь
                                выпечкой муссовых и бисквитных тортиков. А также
                                капкейков, макаронс и эклеров. У меня вы можете
                                купить торт на любой праздник: свадьбу, день
                                рождение любимого человека,новый год и даже на
                                хэллоуин. В каждый десерт вложена фантазия,
                                много любви и доброты. Я очень дорожу вами и
                                вашем здоровьем, поэтому пеку только из
                                натуральных продуктов.
                            </p>
                        </div>
                    </div>
                    <div className='about-me__info about-me__info_right'>
                        <img
                            src={dessertImage}
                            alt='фото торта'
                            className='about-me__info-image'
                        />
                        <div className='about-me__info-text'>
                            <h2 className='about-me__info-title'>
                                МОЯ СПЕЦИАЛЬНОСТЬ
                            </h2>
                            <h3 className='about-me__info-subtitle'>
                                Попробуйте десрты ручной работы в Казани
                            </h3>
                            <p className='about-me__info-description'>
                                Каждый тортик я делаю с душой и подхожу
                                ответственно к каждому заказу, так как от меня
                                зависит как пройдет праздник с участием моего
                                десерта. Поэтому я стараюсь на максимум
                                выложиться и сделать ваш десерт красивым и очень
                                вкусным.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default AboutMePage;

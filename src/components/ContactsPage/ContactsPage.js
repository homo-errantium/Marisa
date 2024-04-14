import './ContactsPage.sass';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import logoVk from '../../images/vkontakte-image5.svg';
import logoTelegram from '../../images/telegram-image5.svg';
import logoEmail from '../../images/email-image5.svg';
import logoPhone from '../../images/phone-image5.svg';
import logoWhatsapp from '../../images/whatsapp-image5.svg';

function ContactsPage() {
    return (
        <div className='wrapper'>
            <Header />
            <main className='main'>
                <section className='contacts'>
                    <div className='contacts__info contacts__info_left'>
                        <div className='contacts__info-text'>
                            <h2 className='contacts__info-title'>
                                СВЯЗАТЬСЯ СО МНОЙ
                            </h2>

                            <ul className='contacts__links'>
                                <li className='contacts__item'>
                                    <a
                                        className='contacts__link'
                                        href='https://web.whatsapp.com/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <img
                                            src={logoWhatsapp}
                                            alt='logo vkontakte'
                                            className='contacts__image'
                                        />{' '}
                                        whatsapp
                                    </a>
                                </li>
                                <li className='contacts__item'>
                                    <a
                                        className='contacts__link'
                                        href='https://vk.com/id8518592'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <img
                                            src={logoVk}
                                            alt='logo vkontakte'
                                            className='contacts__image'
                                        />{' '}
                                        vkontakte
                                    </a>
                                </li>
                                <li className='contacts__item'>
                                    <a
                                        className='contacts__link'
                                        href='https://web.telegram.org/k/#2029570170'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <img
                                            src={logoTelegram}
                                            alt='logo telegram'
                                            className='contacts__image'
                                        />{' '}
                                        telegram
                                    </a>
                                </li>
                                <li className='contacts__item'>
                                    <a
                                        className='contacts__link'
                                        href='mailto:lunatik89@mail.ru&cc=homo.errantium@gmail.com?body=Привет, вопрос по поводу торта:'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <img
                                            src={logoEmail}
                                            alt='logo email'
                                            className='contacts__image'
                                        />{' '}
                                        e-mail
                                    </a>
                                </li>
                                <li className='contacts__item'>
                                    <a
                                        className='contacts__link'
                                        href='tel:+79534861552'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <img
                                            src={logoPhone}
                                            alt='logo phone'
                                            className='contacts__image'
                                        />{' '}
                                        телефон
                                    </a>
                                </li>
                            </ul>
                            {/* <p className='contacts__info-description'>
                                Чтобы купить десерт звоните по телефону
                                <a
                                    className='contacts__info-link'
                                    href='tel:+79534861552'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    8 953 486 15 52
                                </a>
                                . Вы также можете написать мне в
                                <a
                                    className='contacts__info-link'
                                    href='https://web.telegram.org/k/#2029570170'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Telegram
                                </a>
                                или в
                                <a
                                    className='contacts__info-link'
                                    href='https://web.telegram.org/k/#2029570170'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    WhatsApp
                                </a>
                                . Можете сделать заказ оставив заявку через
                                <a
                                    className='contacts__info-link'
                                    href='mailto:lunatik89@mail.ru&cc=homo.errantium@gmail.com?body=Привет, вопрос по поводу торта:'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    электронную почту
                                </a>
                                .
                            </p> */}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default ContactsPage;

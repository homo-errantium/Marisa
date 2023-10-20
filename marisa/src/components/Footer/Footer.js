import './Footer.css';
import logoVk from '../../images/logo-vk.png';
import logoTelegram from '../../images/logo-telegram.png';
import logoEmail from '../../images/logo-email.png';
import logoPhone from '../../images/logo-phone.png';

function Footer() {
    return (
        <footer className='footer' id='footer'>
            <a
                className='footer__author'
                href='https://github.com/homo-errantium'
                target='_blank'
                rel='noreferrer'
            >
                made by Aishat Safin &copy; 2023
            </a>
            <ul className='footer__links'>
                <li className='footer__item'>
                    <a
                        className='footer__link'
                        href='https://vk.com/id8518592'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={logoVk}
                            alt='logo vkontakte'
                            className='footer__image'
                        />
                    </a>
                </li>
                <li className='footer__item'>
                    <a
                        className='footer__link'
                        href='https://web.telegram.org/k/#2029570170'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={logoTelegram}
                            alt='logo telegram'
                            className='footer__image'
                        />
                    </a>
                </li>
                <li className='footer__item'>
                    <a
                        className='footer__link'
                        href='mailto:lunatik89@mail.ru&cc=homo.errantium@gmail.com?body=Привет, вопрос по поводу торта:'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={logoEmail}
                            alt='logo email'
                            className='footer__image'
                        />
                    </a>
                </li>
                <li className='footer__item'>
                    <a
                        className='footer__link'
                        href='tel:+79534861552'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={logoPhone}
                            alt='logo phone'
                            className='footer__image'
                        />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;

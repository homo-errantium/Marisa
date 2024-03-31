import './MainBottom.css';
import Slider from '../Slider/Slider';
import { SliderData } from '../Slider/SliderData';
import gallery1 from '../../images/gallery1.jpg';
import gallery2 from '../../images/gallery2.jpg';
import gallery3 from '../../images/gallery3.jpg';
import gallery4 from '../../images/gallery4.jpg';
function MainBottom() {
    return (
        <section className='main__bottom'>
            <h2 className='main__bottom-title'>Торты</h2>
            <Slider slides={SliderData} />
            <h2 className='main__bottom-title'>Десерты</h2>
            <div className='main__bottom-gallery'>
                <img
                    src={gallery1}
                    alt='фото торта'
                    className='main__bottom-image'
                />
                <img
                    src={gallery3}
                    alt='фото торта'
                    className='main__bottom-image'
                />
                <img
                    src={gallery4}
                    alt='фото торта'
                    className='main__bottom-image'
                />
                <img
                    src={gallery2}
                    alt='фото торта'
                    className='main__bottom-image'
                />
            </div>

            <h2 className='main__bottom-title'>Меренговый рулет</h2>
            <div className='main__bottom-gallery'>
                <img
                    src={gallery1}
                    alt='фото торта'
                    className='main__bottom-image'
                />
                <img
                    src={gallery3}
                    alt='фото торта'
                    className='main__bottom-image'
                />
                <img
                    src={gallery4}
                    alt='фото торта'
                    className='main__bottom-image'
                />
                <img
                    src={gallery2}
                    alt='фото торта'
                    className='main__bottom-image'
                />
            </div>

            <h2 className='main__bottom-title'>Отзывы</h2>
            <div className='main__bottom-gallery'>
                <img
                    src={gallery1}
                    alt='фото торта'
                    className='main__bottom-image'
                />
                <img
                    src={gallery3}
                    alt='фото торта'
                    className='main__bottom-image'
                />
                <img
                    src={gallery4}
                    alt='фото торта'
                    className='main__bottom-image'
                />
                <img
                    src={gallery2}
                    alt='фото торта'
                    className='main__bottom-image'
                />
            </div>
        </section>
    );
}

export default MainBottom;

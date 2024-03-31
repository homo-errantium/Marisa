import React, { useState } from 'react';
import { SliderData } from './SliderData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Slider.css';
import leftArrow from '../../images/arrow-next-small-svgrepo-com (1).svg';
import rightArrow from '../../images/arrow-next-small-svgrepo-com.svg';

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <button
                className='slider__button slider__button_left'
                onClick={prevSlide}
            >
                <img
                    className='slider__button-img'
                    src={leftArrow}
                    alt='Arrow'
                />
            </button>
            <button
                className='slider__button slider__button_right'
                onClick={nextSlide}
            >
                <img
                    className='slider__button-img'
                    src={rightArrow}
                    alt='Arrow'
                />
            </button>

            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img
                                src={slide.image}
                                alt='cake'
                                className='slider__image'
                            />
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default Slider;

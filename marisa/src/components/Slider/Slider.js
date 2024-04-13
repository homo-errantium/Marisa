import './Slider.sass';
import { useState, useEffect, cloneElement } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SliderCard from '../Card/SliderCard/SliderCard';

function Slider({ title, onCardClick, ...props }) {
    const [marginWidth, setMarginWidth] = useState(0.15);
    const [cardWidth, setCardWidth] = useState(66.5);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        handleChangeCardWidth();
    }, []);

    function handleChangeCardWidth() {
        switch (true) {
            case window.innerWidth > 1600:
                console.log('BIG');
                setCardWidth(15);
                setMarginWidth(0.15);
                break;
            case window.innerWidth <= 1600 && window.innerWidth > 1100:
                console.log('MediUm');
                setCardWidth(20.7);
                setMarginWidth(0.1);
                break;
            case window.innerWidth <= 1100 && window.innerWidth > 600:
                console.log('MediUm');
                setCardWidth(32.4);
                setMarginWidth(0.07);
                break;
            default:
                console.log('HZ');
                setCardWidth(66.5);
                setMarginWidth(0.035);
                break;
        }
    }

    useEffect(() => {
        // setWindowWidth(window.innerWidth);
        // Trigger this function on resize
        window.addEventListener('resize', handleChangeCardWidth);
        //  Cleanup for componentWillUnmount
        return () =>
            window.removeEventListener('resize', handleChangeCardWidth);
    }, [marginWidth, cardWidth, windowWidth]);

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    function handleRightClick() {
        setOffset(() => {
            const newOffset = offset - cardWidth - cardWidth * marginWidth;
            const maxOffset = -(
                (cardWidth + cardWidth * marginWidth) *
                (pages.length - 4)
            );
            return Math.max(newOffset, maxOffset);
        });
    }

    function handleLeftClick() {
        setOffset(() => {
            const newOffset = offset + cardWidth + cardWidth * marginWidth;
            return Math.min(newOffset, 0);
        });
    }

    useEffect(() => {
        //вытаскиваем из пропс массив данных, создаем массив карточек
        const cards = props.children.map((card) => (
            <SliderCard
                key={card.id}
                {...card}
                onCardClick={onCardClick}
                sliderTitle={title}
                cardWidth={cardWidth}
                style={{
                    width: `${cardWidth}vw`,
                }}
            />
        ));
        //возвращаем массив карточек со стилями/рендерим
        setPages(
            cards.map((child) => {
                return cloneElement(child, {});
            })
        );
    }, [cardWidth, onCardClick, props.children, title]);

    return (
        <div className='slider'>
            <h2 className='slider__title'>{title}</h2>
            <div className='slider__container'>
                <FaChevronLeft
                    className='slider__button'
                    onClick={handleLeftClick}
                />
                <div className='slider__window'>
                    <div
                        className='slider__slides'
                        style={{ transform: `translateX(${offset}vw)` }}
                    >
                        {pages}
                    </div>
                </div>
                <FaChevronRight
                    className='slider__button'
                    onClick={handleRightClick}
                />
            </div>
        </div>
    );
}

export default Slider;

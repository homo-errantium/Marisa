import './Slider.sass';
import { useState, useEffect, cloneElement } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SliderCard from '../Card/SliderCard/SliderCard';

function Slider({ title, onCardClick, ...props }) {
    const PAGE_WIDTH = 400;
    const MARGIN_WIDTH = 20;
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    function handleRightClick() {
        setOffset(() => {
            const newOffset = offset - PAGE_WIDTH - MARGIN_WIDTH;
            const maxOffset = -(
                (PAGE_WIDTH + MARGIN_WIDTH) *
                (pages.length - 4)
            );
            return Math.max(newOffset, maxOffset);
        });
    }

    function handleLeftClick() {
        setOffset(() => {
            const newOffset = offset + PAGE_WIDTH + MARGIN_WIDTH;
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
            />
        ));
        //возвращаем массив карточек со стилями/рендерим
        setPages(
            cards.map((child) => {
                return cloneElement(child, {
                    style: {
                        height: `${PAGE_WIDTH}px`,
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                });
            })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                        style={{ transform: `translateX(${offset}px)` }}
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

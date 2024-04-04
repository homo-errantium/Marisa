import './Slider.css';
import { useState, useEffect, Children, cloneElement } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Card from '../Card/Card';

function Slider({ children, title }) {
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
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                });
            })
        );

        console.log(pages.length);
    }, []);

    return (
        <>
            <h2 className='slider-title'>{title}</h2>
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
        </>
    );
}

export default Slider;

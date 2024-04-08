import './Swiper.css';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Swiper({ onCardClick, ...props }) {
    const PAGE_WIDTH = 1300;
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    function handleRightClick() {
        setOffset(() => {
            const newOffset = offset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
            return Math.max(newOffset, maxOffset);
        });
    }

    function handleLeftClick() {
        setOffset(() => {
            const newOffset = offset + PAGE_WIDTH;
            return Math.min(newOffset, 0);
        });
    }

    useEffect(() => {
        //вытаскиваем из пропс массив данных, создаем массив карточек
        const cards = props.children;

        //возвращаем массив карточек со стилями/рнедерим
        setPages(
            cards.map((child) => {
                return (
                    <img
                        key={child.id}
                        className='swiper__image'
                        src={`${child.link}`}
                        alt={`${child.name}`}
                        // onClick={onCardClick}
                        style={{
                            width: `${PAGE_WIDTH}px`,
                        }}
                    />
                );
            })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='swiper'>
            <div className='swiper__container'>
                <FaChevronLeft
                    className='swiper__button'
                    onClick={handleLeftClick}
                />
                <div className='swiper__window'>
                    <div
                        className='swiper__slides'
                        style={{
                            transform: `translateX(${offset}px)`,
                        }}
                    >
                        {pages}
                    </div>
                </div>
                <FaChevronRight
                    className='swiper__button'
                    onClick={handleRightClick}
                />
            </div>
        </div>
    );
}

export default Swiper;

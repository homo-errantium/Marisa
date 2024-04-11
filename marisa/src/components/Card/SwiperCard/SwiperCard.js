import './SwiperCard.css';

function SwiperCard({ pageWidth, card }) {
    return (
        <img
            key={card.id}
            className='swiper__image'
            src={`${card.link}`}
            alt={`${card.name}`}
            style={{
                width: `${pageWidth}px`,
            }}
        />
    );
}

export default SwiperCard;

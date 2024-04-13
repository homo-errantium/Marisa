import './SwiperCard.sass';

function SwiperCard({ pageWidth, card }) {
    return (
        <img
            key={card.id}
            className='swiper__image'
            src={`${card.link}`}
            alt={`${card.name}`}
            // style={{
            //     width: `${pageWidth}vw`,
            // }}
        />
    );
}

export default SwiperCard;

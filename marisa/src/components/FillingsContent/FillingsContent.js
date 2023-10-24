import './FillingsContent.css';
import cheeseCakeImage from '../../images/cheeseCakeImage.jpg';
import brownyImage from '../../images/brownyImage.jpg';
import cherryCakeImage from '../../images/cherryCakeImage.jpg';
import appleCake from '../../images/appleCake.jpg';

function FillingsContent() {
    return (
        <section className='fillingsContent'>
            <div className='fillingsContent__info fillingsContent__info_left'>
                <img
                    src={cheeseCakeImage}
                    alt='фото кондитера'
                    className='fillingsContent__info-image'
                />
                <div className='fillingsContent__info-text'>
                    <h2 className='fillingsContent__info-title'>Чизкейк</h2>
                    <p className='fillingsContent__info-description'>
                        Малиновый бисквит, малиновый ганаш, малиновый заварной
                        крем, мятный крем.
                    </p>
                    <p className='fillingsContent__info-composition'>
                        Состав: яйцо, сахар, мука, растительное масло,
                        разрыхлитель, натуральное малиновое пюре, ягоды малины,
                        листья мяты, желатин, белый шоколад, шоколадная
                        хрустяшка, творожный сыр, сливки 33%.
                    </p>
                </div>
            </div>
            <div className='fillingsContent__info fillingsContent__info_right'>
                <img
                    src={brownyImage}
                    alt='фото торта'
                    className='fillingsContent__info-image'
                />
                <div className='fillingsContent__info-text'>
                    <h2 className='fillingsContent__info-title'>
                        Малиновый тортик
                    </h2>
                    <p className='fillingsContent__info-description'>
                        Малиновый бисквит, малиновый ганаш, малиновый заварной
                        крем, мятный крем.
                    </p>
                    <p className='fillingsContent__info-composition'>
                        Состав: яйцо, сахар, мука, растительное масло,
                        разрыхлитель, натуральное малиновое пюре, ягоды малины,
                        листья мяты, желатин, белый шоколад, шоколадная
                        хрустяшка, творожный сыр, сливки 33%.
                    </p>
                </div>
            </div>
            <div className='fillingsContent__info fillingsContent__info_left'>
                <img
                    src={cherryCakeImage}
                    alt='фото торта'
                    className='fillingsContent__info-image'
                />
                <div className='fillingsContent__info-text'>
                    <h2 className='fillingsContent__info-title'>торт Брауни</h2>
                    <p className='fillingsContent__info-description'>
                        Малиновый бисквит, малиновый ганаш, малиновый заварной
                        крем, мятный крем.
                    </p>
                    <p className='fillingsContent__info-composition'>
                        Состав: яйцо, сахар, мука, растительное масло,
                        разрыхлитель, натуральное малиновое пюре, ягоды малины,
                        листья мяты, желатин, белый шоколад, шоколадная
                        хрустяшка, творожный сыр, сливки 33%.
                    </p>
                </div>
            </div>
            <div className='fillingsContent__info fillingsContent__info_right'>
                <img
                    src={appleCake}
                    alt=''
                    className='fillingsContent__info-image'
                />
                <div className='fillingsContent__info-text'>
                    <h2 className='fillingsContent__info-title'>
                        Меренговый рулет
                    </h2>
                    <p className='fillingsContent__info-description'>
                        Малиновый бисквит, малиновый ганаш, малиновый заварной
                        крем, мятный крем.
                    </p>
                    <p className='fillingsContent__info-composition'>
                        Состав: яйцо, сахар, мука, растительное масло,
                        разрыхлитель, натуральное малиновое пюре, ягоды малины,
                        листья мяты, желатин, белый шоколад, шоколадная
                        хрустяшка, творожный сыр, сливки 33%.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default FillingsContent;

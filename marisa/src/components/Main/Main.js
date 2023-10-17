import './Main.css';

function Main() {
    return (
        <div className='wrapper wrapper_main'>
            <main className='main'>
                <h1 className='main__title'>Marisa</h1>
                <h2 className='main__subtitle'>Торты на заказ в Казани</h2>
                <h3 className='main__description'>кондитер Марина Сафина</h3>
                <div className='main__buttons'>
                    <button className='main__phone-button'></button>
                    <button className='main__whatsup-button'></button>
                </div>
            </main>
        </div>
    );
}

export default Main;

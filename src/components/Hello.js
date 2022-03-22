import arrow from '../assets/arrow.png';


const Hello = (props) => {
    return <div className='hello-div'>
        <div className='hello-text'>
            <h1 className="hiText-Hi">Hi!</h1>
            <h1 className="hiText-rest">My name is Michał Wierzbicki</h1>
            <h1 className="hiText-rest">Click on the button below to view my CV and portfolio</h1>
            <div className='button_hello_div'>
                <button className='button_hello' onClick={() => props.setPortfolio(true)}><img src={arrow} alt='arrow' className='arrow' /></button>
            </div>
        </div>
    </div>
}

export default Hello;
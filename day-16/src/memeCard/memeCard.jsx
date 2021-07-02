import './memeCard.css'
import Meme from './img.png'
const MemeCard = () => {
    return(
        <>
            <div className='app'>
                <div className="card">
                    <div className="card-pic">
                        <img src= {Meme} alt="memeimg"/>
                    </div>

                    <div className="card-text">
                        <h1>React Card</h1>
                        <div className="card-description">
                            <p>your main THA is to make meme cards</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MemeCard
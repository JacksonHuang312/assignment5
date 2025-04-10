import heroImage from '../assets/oppenheimerposter.jpg';
import './Hero.css'

function Hero() {
    return (
        <>
            <div className='hero-image'>
            <img className="hero-image" src={heroImage} alt="" />
            </div>
        </>
    )

}

export default Hero;
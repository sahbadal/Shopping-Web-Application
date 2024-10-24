import './Hero.css'
import { assets } from '../../assets/assets'
import Item from '../Item/Item'

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-left">
                    <div className="hero-content">
                        <h2>Discover Our Latest Styles</h2>
                        <div>
                            <div className="hero-hand-icon">
                                <p>Trendy</p>
                                <img src={assets.hand_icon} />
                            </div>
                            <p>Collections</p>
                            <p>for Every Occasion</p>
                        </div>
                        <div className="hero-btn">
                            <div>Explore Now</div>
                            <img src={assets.arrow} />
                        </div>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-image">
                        <img src={assets.hero_image} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
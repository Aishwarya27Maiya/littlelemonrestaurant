import heroImage from '../images/icons_assets/restauranfood.jpg';
import {Link} from "react-router-dom";

function Hero(){
    return(
        <section className="hero-section" id="home">
            <div className="container hero">
                <div className="hero-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to ="/booking" className="reserve-button">Reserve a table</Link>
                </div>
                <div className="hero-image">
                    <img
                        src={heroImage}
                        alt="little lemon restaurant"
                    />
                </div>
            </div>
                    </section>
    )
}
export default Hero;
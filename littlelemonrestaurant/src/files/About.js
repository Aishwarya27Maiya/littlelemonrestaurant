import aboutImage2 from '../images/icons_assets/Mario and Adrian A.jpg'
import aboutImage1 from '../images/icons_assets/restaurant.jpg'

function About(){
    return(
        <section className="about" id="about">
            <div className='container'>
                <div className="about-contents">
                    <div className="about-text">
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>Little Lemon is a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <div className="about-images">
                        <img
                            src={aboutImage1}
                            alt="restaurant"
                        />
                        <img
                            src={aboutImage2}
                            alt="chefs"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About
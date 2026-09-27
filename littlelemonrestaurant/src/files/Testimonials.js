import customer1 from "../images/icons_assets/person1.jpeg"
import customer2 from "../images/icons_assets/person2.avif"
import customer3 from "../images/icons_assets/person3.jpeg"

function Testimonials(){
    return(
        <section className="testimonials" id="testimonials">
            <div className='container'>
                <h2>Testimonials</h2>
                <div className="testimonial-cards">
                    <article className="testimonial-card">
                        <div className="rating">⭐️⭐️⭐️⭐️⭐️</div>
                        <div className="testimonial-content">
                            <div className="testimonial-image">
                                <img
                                    src={customer1}
                                    alt="customer1"
                                />
                            </div>
                            <div className="testimonial-text">
                                <h3>Rama</h3>
                            </div>
                        </div>
                        <p>Great food and wonderful service!</p>
                    </article>
                    <article className="testimonial-card">
                        <div className="rating">⭐️⭐️⭐️⭐️</div>
                        <div className="testimonial-content">
                            <div className="testimonial-image">
                                <img
                                    src={customer2}
                                    alt="customer2"
                                />
                            </div>
                            <div className="testimonial-text">
                                <h3>Sita</h3>
                            </div>
                        </div>
                        <p>Great food and wonderful service!</p>
                    </article>
                    <article className="testimonial-card">
                        <div className="rating">⭐️⭐️⭐️⭐️</div>
                        <div className="testimonial-content">
                            <div className="testimonial-image">
                                <img
                                    src={customer3}
                                    alt="customer3"
                                />
                            </div>
                            <div className="testimonial-text">
                                <h3>Sita</h3>
                            </div>
                        </div>
                        <p>Great food and wonderful service!</p>
                    </article>
                </div>
            </div>
        </section>
    );
}
export default Testimonials;
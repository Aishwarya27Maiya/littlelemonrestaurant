import customer1 from "../images/icons_assets/person7.avif"
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
                                <img
                                    className="testimonial-image"
                                    src={customer1}
                                    alt="Rama"
                                />
                                <h3>Rama</h3>
                        </div>
                        <p>Great food and wonderful service!</p>
                    </article>
                    <article className="testimonial-card">
                        <div className="rating">⭐️⭐️⭐️⭐️</div>
                        <div className="testimonial-content">
                                <img
                                    src={customer2}
                                    alt="Sita"
                                />
                                <h3>Sita</h3>
                        </div>
                        <p>Great food and wonderful service!</p>
                    </article>
                    <article className="testimonial-card">
                        <div className="rating">⭐️⭐️⭐️⭐️</div>
                        <div className="testimonial-content">
                                <img
                                    src={customer3}
                                    alt="Lakshmana"
                                />
                                <h3>Lakshmana</h3>
                        </div>
                        <p>Great food and wonderful service!</p>
                    </article>
                </div>
            </div>
        </section>
    );
}
export default Testimonials;
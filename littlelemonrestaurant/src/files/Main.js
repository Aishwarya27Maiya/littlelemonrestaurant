import greekSalad from '../images/icons_assets/greek salad.jpg'
import bruschetta from '../images/icons_assets/bruchetta.svg'
import lemonDessert from '../images/icons_assets/lemon dessert.jpg'
import heroImage from '../images/icons_assets/restauranfood.jpg'
import customer1 from "../images/icons_assets/person1.jpeg"
import customer2 from "../images/icons_assets/person2.avif"
import customer3 from "../images/icons_assets/person3.jpeg"
import aboutImage2 from '../images/icons_assets/Mario and Adrian A.jpg'
import aboutImage1 from '../images/icons_assets/restaurant.jpg'
function Main(){
    return(
        <main>
            {/* --------------Hero------------------------   */}
            <section className="hero-section" id="home">
                <div className="container hero">
                    <div className="hero-content">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </p>
                        <button>Reserve a table</button>
                    </div>
                    <div className="hero-image">
                        <img
                            src={heroImage}
                            alt="little lemon restaurant"
                        />
                    </div>
                </div>
            </section>

         {/* ================= HIGHLIGHTS ================= */}

            <section className="highlights" id="menu">
                <div className="container">
                    <div className="highlights-heading">
                    <h2>This week's special</h2>
                    <button>Online Menu</button>
                    </div>
                    <div className="specials">
                        <article className="special-card">
                            <img
                                src={greekSalad}
                                alt="Greek Salad"
                            />
                            <div className="dish-title">
                            <h3>Greek Salad</h3>
                            <span>$12.99</span>
                            </div>
                            <p>The famous Greek salad with lettuce, peppers, olives and our Chicago-style feta cheese.</p>
                            <a href="#order">Order a delivery</a>
                        </article>
                        <article className="special-card">
                            <img
                                src={bruschetta}
                                alt="Bruschetta"
                            />
                            <div className="dish-title">
                                <h3>Bruschetta</h3>
                                <span>$5.99</span>
                            </div>
                            <p>Our bruschetta is made from grilled bread topped with fresh tomatoes, garlic and herbs.</p>
                            <a href="#order">Order a delivery</a>
                        </article>
                        <article className="special-card">
                            <img
                                    src={lemonDessert}
                                    alt="Lemon Dessert"
                            />
                            <div className="dish-title">
                                <h3>Lemon dessert</h3>
                                <span>$5.00</span>
                            </div>
                            <p>This comes straight from grandma's recipe book, with a delicious lemon flavor.</p>
                            <a href="#order">Order a delivery</a>
                        </article>
                    </div>
                </div>
            </section>
      {/* ================= TESTIMONIALS ================= */}
            <section className="testimonials">
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
 {/* ================= ABOUT ================= */}
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
        </main>
    )
}

export default Main;
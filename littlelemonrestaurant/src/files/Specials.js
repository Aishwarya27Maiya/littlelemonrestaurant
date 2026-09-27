import greekSalad from '../images/icons_assets/greek salad.jpg'
import bruschetta from '../images/icons_assets/bruchetta.svg'
import lemonDessert from '../images/icons_assets/lemon dessert.jpg'


function Specials(){
    return(
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
    );    
}
export default Specials;

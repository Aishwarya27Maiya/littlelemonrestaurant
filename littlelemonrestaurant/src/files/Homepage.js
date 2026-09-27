import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Hero from "./Hero";
import About from "./About";

function Homepage(){
    return(
        <main>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </main>
    );
}
export default Homepage;
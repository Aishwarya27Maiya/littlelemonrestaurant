import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/#about" className="nav-link">About</Link></li>
                <li><Link to="/#menu" className="nav-link">Menu</Link></li>
                <li><Link to="/booking" className="nav-link">Reservations</Link></li>
                <li><Link to="/#testimonials" className="nav-link">Testimonials</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
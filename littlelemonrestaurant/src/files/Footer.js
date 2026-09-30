import footerLogo from '../images/icons_assets/logo.png'
import { Link } from 'react-router-dom';
function Footer(){
    return (
        <footer>
            <div className="container footer-content">
                <div className="footer-logo">
                    <img
                        src={footerLogo}
                        alt='little lemon'
                    />
                </div>
                <div className="footer-column">
                    <h3>Door Navigation</h3>
                    <ul>
                        <li> <a href="/#home">Home</a> </li>
                        <li> <a href="/#about">About</a> </li>
                        <li> <a href="/#menu">Menu</a> </li>
                        <li> <Link to="/booking">Reservations</Link> </li>
                        <li> <a href="/#Testimonials">Testimonials</a> </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Contact</h3>
                    <p><em>Address:</em> 312 Gates Dr,Milpitas, 95325</p>
                    <p><em>Phone Number: </em>9448057169</p>
                    <p><em>Email: </em>littlelemone@gmail.com</p>
                </div>

                <div className="footer-column">
                <h3>Social Media Links</h3>
                <ul>
                    <li> <a href="https://www.facebook.com"><em>Facebook: </em>littlelemon</a> </li>
                    <li> <a href="https://instagram.com"><em>Instagram: </em>littlelemon</a> </li>
                </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
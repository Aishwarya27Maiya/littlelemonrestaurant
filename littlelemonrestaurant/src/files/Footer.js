import footerLogo from '../images/icons_assets/logo.png'
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
                    <li> <a href="#home">Home</a> </li>
                    <li> <a href="#about">About</a> </li>
                    <li> <a href="#menu">Menu</a> </li>
                    <li> <a href="#reservations">Reservations</a> </li>
                    <li> <a href="#Testimonials">Testimonials</a> </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Contact</h3>
                    <p><strong>Address:</strong>312 Gates Dr,Milpitas, 95325</p>
                    <p><strong>Phone Number:</strong>9448057169</p>
                    <p><strong>Email:</strong>littlelemone@gmail.com</p>
                </div>

                <div className="footer-column">
                <h3>Social Media Links</h3>
                <ul>
                    <li> <a href="https://www.facebook.com"><strong>Facebook:</strong>littlelemon</a> </li>
                    <li> <a href="https://instagram.com"><strong>Instagram:</strong>littlelemon</a> </li>
                </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
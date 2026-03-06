import vynLogo from "../../assets/images/VyN-logo.png";
import './Footer.css';

function Footer(){


    return(
        <footer id='footer'>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={vynLogo} alt='vyn logo'></img>
                </div>
                <ul className="footer-list">
                    <p>Header</p>
                    <li><a>Link</a></li>
                    <li><a>Link</a></li>
                    <li><a>Link</a></li>
                </ul>
                <ul className="footer-list">
                    <p>Header</p>
                    <li><a>Link</a></li>
                    <li><a>Link</a></li>
                    <li><a>Link</a></li>
                </ul>
                <ul className="footer-list">
                    <p>Header</p>
                    <li><a>Link</a></li>
                    <li><a>Link</a></li>
                    <li><a>Link</a></li>
                </ul>
            </div>
            <div className="footer-credits">
                <p>© 2026 VYN Logistics. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer
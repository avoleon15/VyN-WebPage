import vynLogo from "../../assets/images/VyN-logo.png";
import { useLanguage } from '../../context/LanguageContext.jsx';
import './Footer.css';

function Footer(){
    const { text } = useLanguage()

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
                <p>{text.footer.credits}</p>
            </div>
        </footer>
    )
}

export default Footer
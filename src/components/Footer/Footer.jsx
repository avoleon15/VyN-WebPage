import { Link, useNavigate } from "react-router-dom";
import vynLogo from "../../assets/images/VyN-logo.png";
import { useLanguage } from '../../context/LanguageContext.jsx';
import './Footer.css';

function Footer(){
    const { text } = useLanguage()
    const navigate = useNavigate()

    const goToSection = (id) => {
        navigate('/')
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    return(
        <footer id='footer'>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={vynLogo} alt='vyn logo'></img>
                </div>
                <ul className="footer-list">
                    <p>{text.footer.transports.title}</p>
                    <li><button>{text.footer.transports.seafreight}</button></li>
                    <li><button>{text.footer.transports.airfreight}</button></li>
                    <li><button>{text.footer.transports.overland}</button></li>
                </ul>
                <ul className="footer-list">
                    <p>{text.footer.importantLinks.title}</p>
                    <li><button onClick={() => goToSection('mainService')}>{text.footer.importantLinks.services}</button></li>
                    <li><button><Link to='/about'>{text.footer.importantLinks.about}</Link></button></li>
                    <li><button><Link to='/'>{text.footer.importantLinks.home}</Link></button></li>
                </ul>
                <ul className="footer-list">
                    <p>{text.footer.contact.title}</p>
                    <li><button onClick={() => goToSection('contact')}>{text.footer.contact.message}</button></li>
                </ul>
            </div>
            <div className="footer-credits">
                <p>{text.footer.credits}</p>
            </div>
        </footer>
    )
}

export default Footer
import { useNavigate } from "react-router-dom";
import interBancoLogo from "../../assets/images/LogoInterBanco.png";
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
            <div className="footer-logos">
                <div className="logo">
                    <img src={vynLogo} alt='VYN logo'></img>
                </div>
                <div className="logo">
                    <img src={interBancoLogo} alt='Inter Banco logo'></img>
                </div>
            </div>
            <div className="footer-links">
                <ul className="footer-list">
                    <p>{text.footer.transports.title}</p>
                    <li><button>{text.footer.transports.seafreight}</button></li>
                    <li><button>{text.footer.transports.airfreight}</button></li>
                    <li><button>{text.footer.transports.overland}</button></li>
                </ul>
                <ul className="footer-list">
                    <p>{text.footer.importantLinks.title}</p>
                    <li><button onClick={() => navigate('/')}>{text.footer.importantLinks.home}</button></li>
                    <li><button onClick={() => goToSection('/about')}>{text.footer.importantLinks.about}</button></li>
                    <li><button onClick={() => goToSection('transports')}>{text.footer.importantLinks.transports}</button></li>
                    <li><button onClick={() => goToSection('mainService')}>{text.footer.importantLinks.services}</button></li>
                    <li><button onClick={() => goToSection('stats')}>{text.footer.importantLinks.stats}</button></li>
                    <li><button onClick={() => goToSection('howItWorks')}>{text.footer.importantLinks.howItWorks}</button></li>
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
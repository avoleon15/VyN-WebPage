import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import vynLogo from "../../assets/images/VyN-logo.png";
import { useLanguage } from '../../context/LanguageContext.jsx';
import './Navbar.css';


function Navbar(){
    const { text, toggleLanguage } = useLanguage()

    return(
        <nav id="navbar">
            <div id="left-nav">
                <img src={vynLogo} alt='vyn logo'></img>
            </div>
            <div id="center-nav">
                <ul className='list-nav'>
                    <li><a href="#mainService">{text.navbar.services}</a></li>
                    <li><a href="#contact">{text.navbar.contact}</a></li>
                    <li><a>{text.navbar.about}</a></li>
                    <li><button id="language-toggle" onClick={toggleLanguage}>{text.navbar.language}</button></li>
                </ul>
            </div>
            <div id="right-nav">
                <button id='login-nav'><FontAwesomeIcon icon={faCircleUser} /> {text.navbar.log}</button>
            </div>
        </nav>
    )
}

export default Navbar
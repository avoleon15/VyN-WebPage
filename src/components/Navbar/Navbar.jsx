import { faChevronDown, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import vynLogo from "../../assets/images/VyN-logo.png";
import { useLanguage } from '../../context/LanguageContext.jsx';
import './Navbar.css';


function Navbar(){
    const { text, setSpanish, setEnglish } = useLanguage()
    const [open, setOpen] = useState(false)

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
                    <li>
                        <a className={`language-text ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                            {text.navbar.language} <FontAwesomeIcon className={`chevron-language ${open ? 'rotated' : ''}`} icon={faChevronDown} />
                        </a>
                        <div className={`languages-component ${open ? 'visible-language' : ''}`}>
                            <button className={`language-toggle ${text.navbar.language === "Language" ? "bold" : "" }`} onClick={setEnglish}>English</button>
                            <button className={`language-toggle ${text.navbar.language === "Lenguaje" ? "bold" : "" }`} onClick={setSpanish}>Español</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="right-nav">
                <button id='login-nav'><FontAwesomeIcon icon={faCircleUser} /> {text.navbar.log}</button>
            </div>
        </nav>
    )
}

export default Navbar
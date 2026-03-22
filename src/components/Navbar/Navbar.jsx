import { faBars, faChevronDown, faCircleUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import vynLogo from "../../assets/images/VyN-logo.png";
import { useLanguage } from '../../context/LanguageContext.jsx';

import './Navbar.css';


function Navbar(){
    const { text, setSpanish, setEnglish } = useLanguage()
    const [open, setOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)

    const navigate = useNavigate()

    const goToSection = (id) => {
        navigate('/')
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    return(
        <nav id="navbar">
            <div id="left-nav">
                <img src={vynLogo} alt='vyn logo'></img>
                <button className='hamburger-menu' onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                </button>
                <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                    <button className='hamburger-option' onClick={() => setMenuOpen(!menuOpen)}><Link to='/'>{text.navbar.home}</Link></button>
                    <button className='hamburger-option' onClick={() => setMenuOpen(!menuOpen)}><Link to='/about'>{text.navbar.about}</Link></button>
                    <button className='hamburger-option' onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)}>{text.navbar.language} <FontAwesomeIcon className={`chevron-language ${hamburgerMenuOpen ? 'rotated' : ''}`} icon={faChevronDown} /></button>
                    <div className={`language-mobile ${hamburgerMenuOpen ? 'open' : ''}`}>
                        <button className={`hamburger-option ${text.navbar.language === "Language" ? "bold" : "" }`} onClick={() => { setHamburgerMenuOpen(!hamburgerMenuOpen); setMenuOpen(!menuOpen); setEnglish(); }}>English</button>
                        <button className={`hamburger-option ${text.navbar.language === "Lenguaje" ? "bold" : "" }`} onClick={() => { setHamburgerMenuOpen(!hamburgerMenuOpen); setMenuOpen(!menuOpen); setSpanish(); }}>Español</button>
                    </div>
                </div>
            </div>
            <div id="center-nav">
                <ul className='list-nav'>
                    <li><Link to='/'>{text.navbar.home}</Link></li>
                    <li><button onClick={() => goToSection('mainService')}>{text.navbar.services}</button></li>
                    <li id='contact-nav'><button onClick={() => goToSection('contact')}>{text.navbar.contact}</button></li>
                    <li><Link to='/about'>{text.navbar.about}</Link></li>
                    <li>
                        <a className={`language-text ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                            {text.navbar.language} <FontAwesomeIcon className={`chevron-language ${open ? 'rotated' : ''}`} icon={faChevronDown} />
                        </a>
                        <div className={`languages-component ${open ? 'visible-language' : ''}`}>
                            <button className={`language-toggle ${text.navbar.language === "Language" ? "bold" : "" }`} onClick={() => { setOpen(!open); setEnglish(); }}>English</button>
                            <button className={`language-toggle ${text.navbar.language === "Lenguaje" ? "bold" : "" }`} onClick={() => { setOpen(!open); setSpanish(); }}>Español</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="right-nav">
                <button id='login-nav'><FontAwesomeIcon id='login-icon' icon={faCircleUser} /> {text.navbar.log}</button>
            </div>
        </nav>
    )
}

export default Navbar
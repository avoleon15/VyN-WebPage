import { faBars, faChevronDown, faCircleUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import vynLogo from "../../assets/images/VyN-logo.png";
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useScrollDirection } from '../../utils/useScrollDirection';

import './Navbar.css';


function Navbar(){
    const visible = useScrollDirection()
    const { text, setSpanish, setEnglish } = useLanguage()
    const [menuOpen, setMenuOpen] = useState(false)
    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(null)
    const [openDropdown, setOpenDropdown] = useState(null)

    const navigate = useNavigate()

    const goToSection = (id) => {
        navigate('/')
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    return(
        <nav id="navbar" className={!visible ? 'top-hidden' : ''}>
            <div id="left-nav">
                <img src={vynLogo} alt='vyn logo'></img>
                <button className='hamburger-menu' onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                </button>
                <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                    <button className='hamburger-option' onClick={() => setHamburgerMenuOpen(hamburgerMenuOpen === 'home' ? null : 'home')}>
                        {text.navbar.home} <FontAwesomeIcon className={`chevron-dropdown ${hamburgerMenuOpen === 'home' ? 'rotated' : ''}`} icon={faChevronDown} />
                    </button>
                    <div className={`dropdown-mobile ${hamburgerMenuOpen === 'home' ? 'open' : ''}`}>
                        <button className='hamburger-option' onClick={() => { goToSection('transports'); setMenuOpen(false); }}>{text.transports.title}</button>
                        <button className='hamburger-option' onClick={() => { goToSection('mainService'); setMenuOpen(false); }}>{text.services.title}</button>
                        <button className='hamburger-option' onClick={() => { goToSection('stats'); setMenuOpen(false); }}>{text.stats.title}</button>
                        <button className='hamburger-option' onClick={() => { goToSection('howItWorks'); setMenuOpen(false); }}>{text.howItWorks.title}</button>
                        <button className='hamburger-option' onClick={() => { goToSection('contact'); setMenuOpen(false); }}>{text.contact.title}</button>
                    </div>

                    <button className='hamburger-option' onClick={() => { setMenuOpen(!menuOpen); navigate('/about')}}>{text.navbar.about}</button>

                    <button className='hamburger-option' onClick={() => setHamburgerMenuOpen(hamburgerMenuOpen === 'transports' ? null : 'transports')}>
                        {text.transports.title} <FontAwesomeIcon className={`chevron-dropdown ${hamburgerMenuOpen === 'transports' ? 'rotated' : ''}`} icon={faChevronDown} />
                    </button>
                    <div className={`dropdown-mobile ${hamburgerMenuOpen === 'transports' ? 'open' : ''}`}>
                        <button className='hamburger-option' onClick={() => { navigate('/transport/Seafreight'); setMenuOpen(false); }}>{text.transports.seafreight.title}</button>
                        <button className='hamburger-option' onClick={() => { navigate('/transport/Airfreight'); setMenuOpen(false); }}>{text.transports.airfreight.title}</button>
                        <button className='hamburger-option' onClick={() => { navigate('/transport/Overland'); setMenuOpen(false); }}>{text.transports.overland.title}</button>
                    </div>

                    <button className='hamburger-option' onClick={() => setHamburgerMenuOpen(hamburgerMenuOpen === 'language' ? null : 'language')}>
                        {text.navbar.language} <FontAwesomeIcon className={`chevron-dropdown ${hamburgerMenuOpen === 'language' ? 'rotated' : ''}`} icon={faChevronDown} />
                    </button>
                    <div className={`dropdown-mobile ${hamburgerMenuOpen === 'language' ? 'open' : ''}`}>
                        <button className={`hamburger-option ${text.navbar.language === "Language" ? "bold" : "" }`} onClick={() => { setHamburgerMenuOpen(!hamburgerMenuOpen); setMenuOpen(!menuOpen); setEnglish(); }}>English</button>
                        <button className={`hamburger-option ${text.navbar.language === "Lenguaje" ? "bold" : "" }`} onClick={() => { setHamburgerMenuOpen(!hamburgerMenuOpen); setMenuOpen(!menuOpen); setSpanish(); }}>Español</button>
                    </div>
                </div>
            </div>
            <div id="center-nav">
                <ul className='list-nav'>

                    <li onMouseEnter={() => setOpenDropdown('home')} onMouseLeave={() => setOpenDropdown(null)}>
                        <a className={`${openDropdown === 'home' ? 'visible-dropdown' : ''}`}>
                            {text.navbar.home} <FontAwesomeIcon className={`chevron-dropdown ${openDropdown === 'home' ? 'rotated' : ''}`} icon={faChevronDown} />
                        </a>
                        <div className={`dropdown-menu ${openDropdown === 'home' ? 'visible-dropdown' : ''}`}>
                            <button className='dropdown-component' onClick={() => { navigate('/'); setOpenDropdown(null)}}>{text.navbar.home}</button>
                            <button className='dropdown-component' onClick={() => { goToSection('transports') ; setOpenDropdown(null)}}>{text.transports.title}</button>
                            <button className='dropdown-component' onClick={() => { goToSection('mainService') ; setOpenDropdown(null)}}>{text.services.title}</button>
                            <button className='dropdown-component' onClick={() => { goToSection('stats') ; setOpenDropdown(null)}}>{text.stats.title}</button>
                            <button className='dropdown-component' onClick={() => { goToSection('howItWorks') ; setOpenDropdown(null)}}>{text.howItWorks.title}</button>
                            <button className='dropdown-component' onClick={() => { goToSection('contact') ; setOpenDropdown(null)}}>{text.contact.title}</button>
                        </div>
                    </li>

                    <li onMouseEnter={() => setOpenDropdown('transports')} onMouseLeave={() => setOpenDropdown(null)}>
                        <a className={`${openDropdown === 'transports' ? 'visible-dropdown' : ''}`}>
                            {text.transports.title} <FontAwesomeIcon className={`chevron-dropdown ${openDropdown === 'transports' ? 'rotated' : ''}`} icon={faChevronDown} />
                        </a>
                        <div className={`dropdown-menu ${openDropdown === 'transports' ? 'visible-dropdown' : ''}`}>
                            <button className='dropdown-component' onClick={() => { navigate('/transport/Seafreight') ; setOpenDropdown(null)}}>{text.transports.seafreight.title}</button>
                            <button className='dropdown-component' onClick={() => { navigate('/transport/Airfreight') ; setOpenDropdown(null)}}>{text.transports.airfreight.title}</button>
                            <button className='dropdown-component' onClick={() => { navigate('/transport/Overland') ; setOpenDropdown(null)}}>{text.transports.overland.title}</button>
                        </div>
                    </li>

                    <li><Link to='/about'>{text.navbar.about}</Link></li>

                    <li onMouseEnter={() => setOpenDropdown('languages')} onMouseLeave={() => setOpenDropdown(null)}>
                        <a className={`${openDropdown === 'languages' ? 'visible-dropdown' : ''}`}>
                            {text.navbar.language} <FontAwesomeIcon className={`chevron-dropdown ${openDropdown === 'languages' ? 'rotated' : ''}`} icon={faChevronDown} />
                        </a>
                        <div className={`dropdown-menu ${openDropdown === 'languages' ? 'visible-dropdown' : ''}`}>
                            <button className={`dropdown-component ${text.navbar.language === "Language" ? "bold" : "" }`} onClick={() => { setEnglish() ; setOpenDropdown(null)}}>English</button>
                            <button className={`dropdown-component ${text.navbar.language === "Lenguaje" ? "bold" : "" }`} onClick={() => { setSpanish() ; setOpenDropdown(null)}}>Español</button>
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
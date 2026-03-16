import { useLanguage } from '../../context/LanguageContext.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import './Header.css';

function Header(){
    const { text } = useLanguage()


    return(
        <>
            <section id="header">
                <Navbar/>
                <div id='hero-header'>
                    <div id="hero-header-left">
                        <h2 id='hero-title'>{text.header.title}</h2>
                        <p id='hero-paragraph'>{text.header.description}</p>
                        <div id='hero-buttons'>
                            <button className='track-button'>{text.header.button1}</button>
                            <button className='services-button'>{text.header.button2}</button>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Header
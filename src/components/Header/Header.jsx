import { useLanguage } from '../../context/LanguageContext.jsx';
import './Header.css';

function Header(){
    const { text } = useLanguage()


    return(
    <section id="header">
        <div id='hero-header'>
            <div id="hero-header-left">
                <h2 id='hero-title'>{text.header.title}</h2>
                <p id='hero-paragraph'>{text.header.description}</p>
                <div id='hero-buttons'>
                    <a className='track-button'>{text.header.button1}</a>
                    <a href='#transports' className='services-button'>{text.header.button2}</a>
                </div>
            </div>
        </div>
        
    </section>
    )
}

export default Header
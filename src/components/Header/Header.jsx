import Navbar from '../Navbar/Navbar.jsx';
import './Header.css';

function Header(){


    return(
        <>
            <section id="header">
                <Navbar/>
                <div id='hero-header'>
                    <div id="hero-header-left">
                        <h2 id='hero-title'>Conectamos tu mundo, movemos tu negocio.</h2>
                        <p id='hero-paragraph'>
                            Gestionamos toda tu cadena logística, operando en puertos, aeropuertos y aduanas para que tu negocio nunca se detenga.
                        </p>
                        <div id='hero-buttons'>
                            <button className='track-button'>Traquea tu paquete</button>
                            <button className='services-button'>Ver Transportes</button>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Header
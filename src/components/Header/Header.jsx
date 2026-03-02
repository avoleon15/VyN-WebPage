import Navbar from '../Navbar/Navbar.jsx'
import './Header.css'

function Header(){


    return(
        <>
            <section id="header">
                <Navbar/>
                <div id='hero-header'>
                    <div id="hero-header-left">
                        <h3>Conectamos tu mundo, movemos tu negocio.</h3>
                        <p>
                            Tu carga, nuestra responsabilidad. Gestionamos toda tu cadena logística con más de 20 años de experiencia, operando en puertos, aeropuertos y aduanas para que tu negocio nunca se detenga.
                        </p>
                    </div>
                    <div id="hero-header-right">
                        <button>Traquea tu paquete</button>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Header
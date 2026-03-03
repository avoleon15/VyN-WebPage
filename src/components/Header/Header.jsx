import './Header.css'

function Header(){


    return(
        <>
            <section id="header">
                <div id='hero-header'>
                    <div id="hero-header-left">
                        <h2 id='hero-title'>Conectamos tu mundo, movemos tu negocio.</h2>
                        <p id='hero-paragraph'>
                            Tu carga, nuestra responsabilidad. Gestionamos toda tu cadena logística con más de 20 años de experiencia, operando en puertos, aeropuertos y aduanas para que tu negocio nunca se detenga.
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
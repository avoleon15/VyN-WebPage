import { faBoxOpen, faPlane, faShield, faShip, faTruck } from '@fortawesome/free-solid-svg-icons'
import ServiceComponent from '../ServiceComponent/ServiceComponent.jsx'
import './MainServices.css'

function MainServices(){


    return(
        <section id="mainService">
            <h3 id='service-title'>Principales Servicios</h3>
            <div id='service-container'>
            <ServiceComponent
                icon={faPlane}
                title="Transporte Aéreo"
            />

            <ServiceComponent
                icon={faShip}
                title="Transporte Marítimo"
            />

            <ServiceComponent
                icon={faTruck}
                title="Transporte Terrestre"
            />

            <ServiceComponent
                icon={faBoxOpen}
                title="Cargas Especiales"
            />

            <ServiceComponent
                icon={faShield}
                title="Seguros de Transporte"
            />
            </div>
        </section>
    )
}

export default MainServices
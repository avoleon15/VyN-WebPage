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
                description="tranporte via martimia asegurandoq que los paquetees lleguen seguros a su destino."
            />

            <ServiceComponent
                icon={faShip}
                title="Transporte Marítimo"
                description="tranporte via martimia asegurandoq que los paquetees lleguen seguros a su destino."
            />

            <ServiceComponent
                icon={faTruck}
                title="Transporte Terrestre"
                description="tranporte via martimia asegurandoq que los paquetees lleguen seguros a su destino."
            />

            <ServiceComponent
                icon={faBoxOpen}
                title="Cargas Especiales"
                description="tranporte via martimia asegurandoq que los paquetees lleguen seguros a su destino."
            />

            <ServiceComponent
                icon={faShield}
                title="Seguros de Transporte"
                description="tranporte via martimia asegurandoq que los paquetees lleguen seguros a su destino."
            />
            </div>
        </section>
    )
}

export default MainServices
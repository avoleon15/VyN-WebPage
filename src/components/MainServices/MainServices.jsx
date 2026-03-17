import { faBoxOpen, faPlane, faShield, faShip, faTruck } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../context/LanguageContext.jsx';
import ServiceComponent from '../ServiceComponent/ServiceComponent.jsx';
import './MainServices.css';

function MainServices(){
    const { text } = useLanguage()

    return(
        <section id="mainService">
            <div id='service-info'>
                <h3 id='service-title'>{text.services.title}</h3>
                <p id='service-subtitle'>{text.services.description}</p>
            </div>
            <div id='service-container'>
            <ServiceComponent
                icon={faShip}
                title={text.services.seafreight.title}
                description={text.services.seafreight.description}
                button={text.services.seafreight.button}
            />

            <ServiceComponent
                icon={faPlane}
                title={text.services.airfreight.title}
                description={text.services.airfreight.description}
                button={text.services.airfreight.button}
            />

            <ServiceComponent
                icon={faTruck}
                title={text.services.overland.title}
                description={text.services.overland.description}
                button={text.services.overland.button}

            />

            <ServiceComponent
                icon={faBoxOpen}
                title={text.services.special.title}
                description={text.services.special.description}
                button={text.services.special.button}
            />

            <ServiceComponent
                icon={faShield}
                title={text.services.secure.title}
                description={text.services.secure.description}
                button={text.services.secure.button}
            />
            </div>
        </section>
    )
}

export default MainServices
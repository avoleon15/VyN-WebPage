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
                title={text.services.service1.title}
                description={text.services.service1.description}
                button={text.services.service1.button}
            />

            <ServiceComponent
                icon={faPlane}
                title={text.services.service2.title}
                description={text.services.service2.description}
                button={text.services.service2.button}
            />

            <ServiceComponent
                icon={faTruck}
                title={text.services.service3.title}
                description={text.services.service3.description}
                button={text.services.service3.button}

            />

            <ServiceComponent
                icon={faBoxOpen}
                title={text.services.service4.title}
                description={text.services.service4.description}
                button={text.services.service4.button}
            />

            <ServiceComponent
                icon={faShield}
                title={text.services.service5.title}
                description={text.services.service5.description}
                button={text.services.service5.button}
            />
            </div>
        </section>
    )
}

export default MainServices
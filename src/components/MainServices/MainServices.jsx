import { faBoxOpen, faPlane, faShield, faShip, faTruck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import ServiceComponent from '../ServiceComponent/ServiceComponent.jsx';
import './MainServices.css';

function MainServices(){
    const { text } = useLanguage()
    const [openService, setOpenService] = useState(null)

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
                    isOpen={openService === 'service1'}
                    onClick={() => setOpenService(openService === 'service1' ? null : 'service1')}
                />
                <ServiceComponent
                    icon={faPlane}
                    title={text.services.service2.title}
                    description={text.services.service2.description}
                    button={text.services.service2.button}
                    isOpen={openService === 'service2'}
                    onClick={() => setOpenService(openService === 'service2' ? null : 'service2')}
                />
                <ServiceComponent
                    icon={faTruck}
                    title={text.services.service3.title}
                    description={text.services.service3.description}
                    button={text.services.service3.button}
                    isOpen={openService === 'service3'}
                    onClick={() => setOpenService(openService === 'service3' ? null : 'service3')}
                />
                <ServiceComponent
                    icon={faBoxOpen}
                    title={text.services.service4.title}
                    description={text.services.service4.description}
                    button={text.services.service4.button}
                    isOpen={openService === 'service4'}
                    onClick={() => setOpenService(openService === 'service4' ? null : 'service4')}
                />
                <ServiceComponent
                    icon={faShield}
                    title={text.services.service5.title}
                    description={text.services.service5.description}
                    button={text.services.service5.button}
                    isOpen={openService === 'service5'}
                    onClick={() => setOpenService(openService === 'service5' ? null : 'service5')}
                />
            </div>
        </section>
    )
}

export default MainServices
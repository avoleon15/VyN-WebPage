import airfreight from "../../assets/images/airfreight.jpg";
import overland from "../../assets/images/overland.jpg";
import seafreight from "../../assets/images/seafreight.jpg";
import { useLanguage } from '../../context/LanguageContext.jsx';
import TransportCard from '../TransportCard/TransportCard.jsx';
import './Transports.css';

function Transports(){
    const { text } = useLanguage()

    return(
        <section id="transports">
            <div id="transports-info">
                <p id='transports-description'>{text.transports.description}</p>
                <h3 id='transport-title'>{text.transports.title}</h3>
            </div>
            <div id='transports-container'>
            <TransportCard
            image={seafreight}
            title={text.transports.seafreight.title}
            description={text.transports.seafreight.description}
            button={text.transports.seafreight.button}
            />
            <TransportCard
            image={airfreight}
            title={text.transports.airfreight.title}
            description={text.transports.airfreight.description}
            button={text.transports.airfreight.button}
            />
            <TransportCard
            image={overland}
            title={text.transports.overland.title}
            description={text.transports.overland.description}
            button={text.transports.overland.button}
            />
            </div>
        </section>
    )
}

export default Transports
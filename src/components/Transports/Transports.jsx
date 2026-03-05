import airfreight from "../../assets/images/airfreight.jpg";
import overland from "../../assets/images/overland.jpg";
import seafreight from "../../assets/images/seafreight.jpg";
import TransportCard from '../TransportCard/TransportCard.jsx';
import './Transports.css';

function Transports(){


    return(
        <section id="transports">
            <div id="transports-info">
                <p id='transports-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi distinctio, nostrum explicabo repudiandae in ullam tempora non autem consequatur labore! Tempora iusto illum commodi incidunt. Neque officia fugit asperiores veritatis.</p>
                <h3 id='transport-title'>Transportes</h3>
            </div>
            <div id='transports-container'>
            <TransportCard
            image={seafreight}
            title="Seafreigth"
            description="Tu carga, nuestra responsabilidad. Cobertura terrestre completa y ágil. Tu carga, nuestra responsabilidad. Cobertura terrestre completa y ágil."
            link="A"
            />
            <TransportCard
            image={airfreight}
            title="Airfreight"
            description="Tu carga, nuestra responsabilidad. Cobertura terrestre completa y ágil."
            link="A"
            />
            <TransportCard
            image={overland}
            title="Overland"
            description="Tu carga, nuestra responsabilidad. Cobertura terrestre completa y ágil."
            link="A"
            />
            </div>
        </section>
    )
}

export default Transports
import airfreight from "../../assets/images/airfreight.jpg";
import overland from "../../assets/images/overland.jpg";
import seafreight from "../../assets/images/seafreight.jpg";
import TransportCard from '../TransportCard/TransportCard.jsx';
import './Transports.css';

function Transports(){


    return(
        <section id="transports">
            <h3 id='transport-title'>Transportes</h3>
            <div id='transports-container'>
            <TransportCard
            image={seafreight}
            title="a"
            description="a"
            link="A"
            />
            <TransportCard
            image={airfreight}
            title="a"
            description="a"
            link="A"
            />
            <TransportCard
            image={overland}
            title="a"
            description="a"
            link="A"
            />
            </div>
        </section>
    )
}

export default Transports
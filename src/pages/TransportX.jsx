import {
    faAnchor, faBoxOpen, faFileInvoiceDollar, faGauge, faIndustry,
    faPlane, faPlaneCircleCheck, faPlaneDeparture, faRoute, faShield,
    faShip, faTriangleExclamation, faTruck, faTruckFast, faTruckRampBox
} from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import airfreightImg from "../assets/images/airfreight.jpg";
import overlandImg from "../assets/images/overland.jpg";
import seafreightImg from "../assets/images/seafreight.jpg";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar.jsx";
import TopBar from '../components/TopBar/TopBar.jsx';
import TransportXService from "../components/TransportXService/TransportXService.jsx";
import { useLanguage } from '../context/LanguageContext.jsx';
import './TransportX.css';

const iconMap = {
    faShip, faBoxOpen, faTruckRampBox, faAnchor, faTruck, faTriangleExclamation,
    faShield, faFileInvoiceDollar, faPlane, faPlaneDeparture, faPlaneCircleCheck,
    faGauge, faRoute, faTruckFast, faIndustry
}

const imageMap = {
    Seafreight: seafreightImg,
    Airfreight: airfreightImg,
    Overland: overlandImg
}

function TransportX(){
    const { text } = useLanguage()
    const { transportName } = useParams()
    const transport = text.transportX?.[transportName]

    if (!transport) return <p>Transporte no encontrado</p>

    const services = transport.services
    const transportImage = imageMap[transportName]
    const firstGroup = services.slice(0, 4)
    const secondGroup = services.slice(4)

    const renderServiceBoxes = (group) => (
        <>
            <div className='transportX-servicesbox'>
                {group.slice(0, 2).map((service, i) => (
                    <TransportXService
                        key={i}
                        icon={iconMap[service.icon]}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
            <div className='transportX-servicesbox'>
                {group.slice(2).map((service, i) => (
                    <TransportXService
                        key={i}
                        icon={iconMap[service.icon]}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </>
    )

    return(
        <section id='transportX'>
            <TopBar />
            <Navbar/>
            <section id='transportX-header'>
                <div className="transportX-headerbox1">
                    <h2>{transport.title}</h2>
                    <p>{text.transportX.transport}</p>
                </div>
                <div className="transportX-headerbox2">
                    <h5>{transport.pseudoTitle}</h5>
                    <p>{transport.description}</p>
                </div>
            </section>
            <section className='transportX-services'>
                <section className='transportX-servicescontainer'>
                    {renderServiceBoxes(firstGroup)}
                </section>
                <div className='transportX-servicesimage'>
                    <img src={transportImage} alt={transport.title} />
                </div>
            </section>
            <section className='transportX-services inverted'>
                <section className='transportX-servicescontainer'>
                    {renderServiceBoxes(secondGroup)}
                </section>
                <div className='transportX-servicesimage'>
                    <img src={transportImage} alt={transport.title} />
                </div>
            </section>
            <Footer/>
        </section>
    )
}

export default TransportX

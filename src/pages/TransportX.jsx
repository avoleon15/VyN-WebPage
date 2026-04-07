import { faShip } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import seafreight from "../assets/images/seafreight.jpg";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar.jsx";
import TopBar from '../components/TopBar/TopBar.jsx';
import TransportXService from "../components/TransportXService/TransportXService.jsx";
import { useLanguage } from '../context/LanguageContext.jsx';
import './TransportX.css';

function TransportX(){

    const { text } = useLanguage()
    const { transportName } = useParams()
    const transport = text.transportX?.[transportName]

    if (!transport) return <p>Transporte no encontrado</p>

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
                    <div className='transportX-servicesbox'>
                    <TransportXService
                    icon={faShip}
                    title='Import & Export FCL'
                    description='llorem alkd mani amls mof noanf mlamf noinf nuefafdsm uneuf fmi mail fnmief mof emfoe'
                    />
                    <TransportXService
                    icon={faShip}
                    title='Import & Export FCL'
                    description='llorem alkd mani amls mof noanf mlamf noinf nuefafdsm uneuf fmi mail fnmief mof emfoe'
                    />
                    </div>
                    <div className='transportX-servicesbox'>
                    <TransportXService
                    icon={faShip}
                    title='Import & Export FCL'
                    description='llorem alkd mani amls mof noanf mlamf noinf nuefafdsm uneuf fmi mail fnmief mof emfoe'
                    />
                    <TransportXService
                    icon={faShip}
                    title='Import & Export FCL'
                    description='llorem alkd mani amls mof noanf mlamf noinf nuefafdsm uneuf fmi mail fnmief mof emfoe'
                    />
                    </div>
                </section>
                <div className='transportX-servicesimage'>
                    <img src={seafreight} alt="" />
                </div>
            </section>
            <section className='transportX-services inverted'>
                <section className='transportX-servicescontainer'>
                    <div className='transportX-servicesbox'>
                    <TransportXService
                    icon={faShip}
                    title='Import & Export FCL'
                    description='llorem alkd mani amls mof noanf mlamf noinf nuefafdsm uneuf fmi mail fnmief mof emfoe'
                    />
                    <TransportXService
                    icon={faShip}
                    title='Import & Export FCL'
                    description='llorem alkd mani amls mof noanf mlamf noinf nuefafdsm uneuf fmi mail fnmief mof emfoe'
                    />
                    </div>
                    <div className='transportX-servicesbox'>
                    <TransportXService
                    icon={faShip}
                    title='Import & Export FCL'
                    description='llorem alkd mani amls mof noanf mlamf noinf nuefafdsm uneuf fmi mail fnmief mof emfoe'
                    />
                    <TransportXService
                    icon={faShip}
                    title='Import & Export FCL'
                    description='llorem alkd mani amls mof noanf mlamf noinf nuefafdsm uneuf fmi mail fnmief mof emfoe'
                    />
                    </div>
                </section>
                <div className='transportX-servicesimage'>
                    <img src={seafreight} alt="" />
                </div>
            </section>
            <Footer/>
        </section>
    )
}

export default TransportX
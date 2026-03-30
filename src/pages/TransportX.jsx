import { faShip } from '@fortawesome/free-solid-svg-icons';
import seafreight from "../assets/images/seafreight.jpg";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar.jsx";
import TransportXService from "../components/TransportXService/TransportXService.jsx";
import './TransportX.css';

function TransportX(){
    return(
        <section id='transportX'>
            <Navbar/>
            <section id='transportX-header'>
                <div className="transportX-headerbox1">
                    <h2>Seafreight</h2>
                    <p>TRANSPORTS</p>
                </div>
                <div className="transportX-headerbox2">
                    <h5>Our customers save cost with our shipping services</h5>
                    <p>Our customers save cost with our shipping services , both full loads FCL, LCL and consolidated . Due to preferential rates with the major shipping companies worldwide, we can offer solutions for shipping to or from Guatemala with rates and transit times very competitive, even for oversized cargo or any other logistics project , taking any need, let us offer our customer support and compliance.</p>
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
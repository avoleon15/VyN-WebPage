import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Header from '../components/Header/Header.jsx'
import HowItWorks from '../components/HowItWorks/HowItWorks.jsx'
import MainService from '../components/MainServices/MainServices.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import Stats from '../components/Stats/Stats.jsx'
import TopBar from '../components/TopBar/TopBar.jsx'
import Transport from '../components/Transports/Transports.jsx'

function Home() {

    return (
        <>
        <TopBar />
        <Navbar/>
        <Header/>
        <Transport/>
        <MainService/>
        <Stats/>
        <HowItWorks/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home

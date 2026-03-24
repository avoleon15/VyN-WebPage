import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Header from '../components/Header/Header.jsx'
import MainService from '../components/MainServices/MainServices.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import Stats from '../components/Stats/Stats.jsx'
import Transport from '../components/Transports/Transports.jsx'
import './Home.css'

function Home() {

    return (
        <>
        <Navbar/>
        <Header/>
        <Transport/>
        <MainService/>
        <Stats/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home

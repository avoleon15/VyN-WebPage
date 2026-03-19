import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Header from '../components/Header/Header.jsx'
import MainService from '../components/MainServices/MainServices.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import Transport from '../components/Transports/Transports.jsx'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Transport/>
      <MainService/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

import './App.css'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import MainService from './components/MainServices/MainServices.jsx'
import Transport from './components/Transports/Transports.jsx'

function App() {

  return (
    <>
      <Header/>
      <Transport/>
      <MainService/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

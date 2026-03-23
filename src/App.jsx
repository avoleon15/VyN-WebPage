import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import ScrollToTop from './utils/ScrollTop';

function App() {

  return (
    <>
      <ScrollToTop/>
      <a href="https://wa.me/50212345678?text=Hola,%20me%20interesa%20más%20información%20sobre%20sus%20servicios." target="_blank" className="whatsapp-button">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  )
}

export default App

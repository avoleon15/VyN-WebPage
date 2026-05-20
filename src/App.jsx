import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import TransportX from './pages/TransportX';
import ScrollToTop from './utils/ScrollTop';

function App() {

  return (
    <>
      <ScrollToTop/>
      <a href="https://wa.me/50212345678" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/transport/:transportName" element={<TransportX />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

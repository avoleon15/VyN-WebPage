import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import TransportX from './pages/TransportX';
import ScrollToTop from './utils/ScrollTop';

function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/transport/:transportName" element={<TransportX />} />
      </Routes>
    </>
  )
}

export default App

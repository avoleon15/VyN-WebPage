import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import ScrollToTop from './utils/ScrollTop'

function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  )
}

export default App

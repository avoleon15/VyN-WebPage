import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from '../src/context/LanguageContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <StrictMode>
      <BrowserRouter basename="/VyN-WebPage/">
        <App />
      </BrowserRouter>
    </StrictMode>
  </LanguageProvider>
)

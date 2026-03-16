import { createContext, useContext, useState } from 'react'
import { english } from '../locales/english.js'
import { spanish } from '../locales/spanish.js'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('english')
    const text = language === 'spanish' ? spanish : english

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'spanish' ? 'english' : 'spanish')
    }

    return (
        <LanguageContext.Provider value={{ text, language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}
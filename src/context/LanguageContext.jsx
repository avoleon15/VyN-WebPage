import { createContext, useContext, useState } from 'react'
import { english } from '../locales/english.js'
import { spanish } from '../locales/spanish.js'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('es')
    const text = language === 'es' ? spanish : english

    const setSpanish = () => setLanguage('es')
    const setEnglish = () => setLanguage('en')

    return (
        <LanguageContext.Provider value={{ text, language, setSpanish, setEnglish }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}
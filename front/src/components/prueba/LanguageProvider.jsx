"use client"
import { createContext, useContext, useState } from "react"


export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({children}) {
    const [language, setLanguage] = useState("en")

    return(
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
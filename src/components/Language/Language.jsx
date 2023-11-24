import { useTranslation } from 'react-i18next'
import styles from './Language.module.css'
import { useState } from 'react';

export default function Language() {
    const [t, i18n] = useTranslation("global");
    const [language, setLanguage] = useState('en')
    const handleLanguage = () => {
        if (language === 'en') {
            i18n.changeLanguage('es')
            setLanguage('es')
        }
        if (language === 'es') {
            i18n.changeLanguage('en')
            setLanguage('en')
        }
    }
    return (
        <div
            onClick={handleLanguage}
            className={styles.container}
            // className="flex flex-col justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
        >
            <p className="font-semibold uppercase text-white dark:text-white text-5xl md:text-8xl">
                {language}
            </p>
            <p className="font-bold transition duration-300 ease-in-out ">
                <span className={language === "en" ? "text-purple-400" : "text-white"}>EN</span>{" "}
                <span className={language === "es" ? "text-purple-400" : "text-white"}>ES</span>
            </p>
        </div>
    )
}
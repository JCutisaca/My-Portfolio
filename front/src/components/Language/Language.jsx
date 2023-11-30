import { useTranslation } from 'react-i18next'
import styles from './Language.module.css'
import { useEffect, useState } from 'react';

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
    useEffect(() => {
        const item = localStorage.getItem("language");
        if (item) {
            setLanguage(item);
            i18n.changeLanguage(item);
        } else {
            localStorage.setItem("language", "en");
            setLanguage("en");
            i18n.changeLanguage("en");
        }
    }, []);

    return (
        <div onClick={handleLanguage} className={styles.container}>
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
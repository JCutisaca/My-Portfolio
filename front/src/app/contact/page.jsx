"use client"
import { useEffect, useState } from 'react';
import styles from './ContactPage.module.css';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ContactForm from '@/components/ContactForm/ContactForm';
import global_en from '@/config/languages/en/global.json'
import global_es from '@/config/languages/es/global.json'


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default function ContactPage() {

    useEffect(() => {
        const language = localStorage.getItem("language");
        i18n.changeLanguage(language);
    }, []);


    return (
        <div className={styles.container}>
            <ContactForm></ContactForm>
        </div>
    )
}
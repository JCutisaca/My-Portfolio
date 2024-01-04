"use client"
import Head from "next/head";
import About from '@/components/About/About'
import Language from '@/components/Language/Language'
import styles from './app.module.css'
import { motion } from "framer-motion"
import global_en from '@/config/languages/en/global.json'
import global_es from '@/config/languages/es/global.json'
import { useEffect } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Theme from "@/components/Theme/Theme";
import { ThemeProvider } from "next-themes";
import Age from "@/components/Age/Age";
import LinkedIn from "@/components/LinkedIn/LinkedIn";
import SpotifyCard from "@/components/Spotify/Spotify";
import Projects from "@/components/Projects/Projects";
import Weather from "@/components/Weather/Weather";
import Contact from "@/components/Contact/Contact";
import GitHub from "@/components/GitHub/GitHub";
import Certificates from "@/components/Certificates/Certificates";


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

export default function Home() {

  useEffect(() => {
    const language = localStorage.getItem("language");
    i18n.changeLanguage(language);
  }, []);

  return (
    <>
      <ThemeProvider
        attribute="class"
        enableSystem={true}
        defaultTheme="system"
      >
          <Head>
            <title>Jhonathan Cutisaca | FullStack Developer</title>
          </Head>
          <motion.div
            initial={{ opacity: 0, y: -2000 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100, duration: 1 }}
            transition={{ duration: 2.5, delay: 0.5, type: "spring" }}
            className={styles.container}>
            <div className={styles.containerCards}>
              <About></About>
              <Language></Language>
              <Theme></Theme>
              <Age></Age>
              <LinkedIn></LinkedIn>
              <SpotifyCard></SpotifyCard>
              <Projects></Projects>
              <Contact></Contact>
              <Language></Language>
              <Certificates></Certificates>
              <Weather></Weather>
              <Language></Language>
              <Language></Language>
              <GitHub></GitHub>
            </div>
          </motion.div>
      </ThemeProvider>
    </>
  )
}
"use client"
import Head from "next/head";
import About from '@/components/About/About'
import Language from '@/components/Language/Language'
import styles from './app.module.css'
import { motion } from "framer-motion"
import Theme from "@/components/Theme/Theme";
import Age from "@/components/Age/Age";
import LinkedIn from "@/components/LinkedIn/LinkedIn";
import SpotifyCard from "@/components/Spotify/Spotify";
import Projects from "@/components/Projects/Projects";
import Weather from "@/components/Weather/Weather";
import Contact from "@/components/Contact/Contact";
import GitHub from "@/components/GitHub/GitHub";
import Certificates from "@/components/Certificates/Certificates";
import Exp from "@/components/Exp/Exp";
import Discord from "@/components/Discord/Discord";
import Technologies from "@/components/Technologies/Technologies";
import Resume from "@/components/Resume/Resume";

export default function Home() {

  return (
    <>
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
          <Exp></Exp>
          <Weather></Weather>
          <Technologies></Technologies>
          <Discord></Discord>
          <Resume />
          <GitHub></GitHub>
          <Certificates></Certificates>
        </div>
      </motion.div>
    </>
  )
}
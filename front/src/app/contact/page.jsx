"use client"
import styles from './ContactPage.module.css';
import { useTranslation } from "react-i18next";
import ContactForm from '@/components/ContactForm/ContactForm';
import Theme from '@/components/Theme/Theme';
import Link from 'next/link';
import ArrowIcon from '@/components/Utils/ArrowIcon';
import Language from '@/components/Language/Language';
import Cv from '@/components/Utils/Cv/Cv';
import CvEs from '@/components/Utils/Cv/CvEs';

export default function ContactPage() {

  const [t, i18n] = useTranslation("global");


  return (
      <div className={styles.container}>
        <Link
          href="/">
          <ArrowIcon></ArrowIcon>
        </Link>
        <div className="w-full col-span-3 md:col-span-4 aspect-2/1 md:aspect-auto flex justify-between items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl overflow-hidden flex-col">
          <h1 className="text-white uppercase font-bold text-2xl md:text-5xl ml-4 flex gap-1 md:gap-4 justify-center items-center">
            {t("contact.title")}
          </h1>
        </div>
        <Language></Language>
        <Theme></Theme>
        <ContactForm></ContactForm>
        <Cv></Cv>
        <CvEs></CvEs>
      </div>
  )
}
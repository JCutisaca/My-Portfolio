"use client"
import styles from './ContactPage.module.css';
import { useTranslation } from "react-i18next";
import ContactForm from '@/components/ContactForm/ContactForm';
import Link from 'next/link';
import ArrowIcon from '@/components/Utils/ArrowIcon';
import { useTheme } from 'next-themes';

export default function ContactPage() {

  const [t, i18n] = useTranslation("global");

  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? 'bg-[#1c053a9c]' : 'bg-[#e5d599]';

  return (
    <div className={styles.container}>
      <Link
        href="/">
        <ArrowIcon></ArrowIcon>
      </Link>
      <div className={`w-full col-span-3 md:col-span-4 aspect-2/1 md:aspect-auto flex justify-between items-center ${bgColor} rounded-3xl overflow-hidden flex-col`}>
        <h1 className="text-white uppercase font-bold text-2xl md:text-5xl ml-4 flex gap-1 md:gap-4 justify-center items-center">
          {t("contact.title")}
        </h1>
      </div>
      <ContactForm></ContactForm>
    </div>
  )
}
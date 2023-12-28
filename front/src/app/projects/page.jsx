"use client"
import styles from './ProjectsPage.module.css';
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { ThemeProvider } from 'next-themes';
import global_en from '@/config/languages/en/global.json'
import global_es from '@/config/languages/es/global.json'
import Theme from '@/components/Theme/Theme';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ArrowIcon from '@/components/Utils/ArrowIcon';
import Language from '@/components/Language/Language';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { getAllProjects } from '@/apiRequests/getAllProjects';


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

export default function ProjectsPage() {

  const [t, i18n] = useTranslation("global");
  const [allProjects, setAllProjects] = useState()

  const fetchAllProjects = async () => {
    try {
      const response = await getAllProjects();
      setAllProjects(response)
      return;
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    const language = localStorage.getItem("language");
    i18n.changeLanguage(language);
    fetchAllProjects()
  }, []);


  return (
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="system"
    >
      <div className={styles.container}>
        <Link
          href="/">
          <ArrowIcon></ArrowIcon>
        </Link>
        <div className="w-full col-span-3 md:col-span-4 aspect-2/1 md:aspect-auto flex justify-between items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl overflow-hidden flex-col">
          <h1 className="text-white uppercase font-bold text-2xl md:text-5xl ml-4 flex gap-1 md:gap-4 justify-center items-center">
            {t("projectsTitle")}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-4 mb-5 container mx-auto xl:px-20 ">
        {allProjects?.map(({ name, descriptionEnglish, descriptionSpanish, image, website, gitHub, technologies }) => {
          return (
            <ProjectCard
              key={name}
              name={name}
              descriptionEnglish={descriptionEnglish}
              descriptionSpanish={descriptionSpanish}
              image={image}
              website={website}
              gitHub={gitHub}
              technologies={technologies}
            ></ProjectCard>
          )
        })}
        <Language></Language>
        <Theme></Theme>
      </div>
    </ThemeProvider>
  )
}
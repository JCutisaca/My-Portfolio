"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import ProviderRedux from '@/redux/ProviderRedux'
import ProjectsPage from './projects/ProjectsPage';
import { usePathname } from 'next/navigation';
import { initReactI18next, useTranslation } from 'react-i18next';
import global_en from '@/config/languages/en/global.json'
import global_es from '@/config/languages/es/global.json'
import i18next from 'i18next';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';


const inter = Inter({ subsets: ['latin'] })

i18next
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

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isProjectRoute = pathname.startsWith('/projects');
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const language = localStorage.getItem("language");
    i18n.changeLanguage(language);
  }, []);

  return (
    <html lang={i18n.language}>
      <head>
        <title>Jhonathan Cutisaca</title>
        <meta name="description" content="Jhonathan Cutisaca's portfolio showcasing web development and design projects. Explore my work and creative skills. Welcome!" />
        <link rel="icon" href="/images/me.png" />
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <ProviderRedux>
            {isProjectRoute && <ProjectsPage />}
            {children}
          </ProviderRedux>
        </ThemeProvider>
      </body>
    </html>
  )
}
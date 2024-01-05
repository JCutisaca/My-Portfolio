import Image from 'next/image'
import styles from './About.module.css'
import me from '@/assets/images/me.png'
import { useTranslation } from 'react-i18next'

export default function About() {
  const [t, i18n] = useTranslation("global")
  return (
    <div className={styles.container}>
      <div className={styles.water}></div>
      <Image
        src={me}
        alt="Jhonathan Cutisaca"
        className="absolute bottom-0 -right-1/4 w-8/12 md:h-full md:auto object-cover -z-0 hidden md:flex"
        width="512"
        height="512"
        draggable="false"
        loading="eager"
        priority
      />
      <div className={styles.containerAbout}>
        <h1 className="text-3xl md:text-xl lg:text-5xl font-bold text-white mb-4 md:mb-5">👋 {t('introAbout')} Jhonathan</h1>
        <p className="text-md md:text-lg lg:text-2xl text-white">
          {i18n.language === 'en' ? (
            <>
              I am a passionate <b>fullstack developer</b> eager to learn new technologies, with a solid background in <b>JavaScript</b>, <b>React</b>, <b>Node.js</b>, and <b>PostgreSQL</b>.
              <br />
              Focused on quality and attention to detail, I am creative, efficient, and always ready to overcome challenges.
              <br />
            </>
          ) : (
            <>
            Soy un <b>desarrollador fullstack</b> apasionado por aprender nuevas tecnologías, con experiencia sólida en <b>JavaScript</b>, <b>React</b>, <b>Node.js</b> y <b>PostgreSQL</b>.
            <br />
            Enfocado en la calidad y el detalle, soy creativo, eficaz y siempre dispuesto a superar desafíos.
            <br />
            <br />
          </>
          )}
        </p>
      </div>
    </div>
  )
}
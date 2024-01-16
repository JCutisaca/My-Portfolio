import Image from "next/image";
import ExternalLinkIcon from "../Utils/ExternalLinkIcon";
import githubIcon from '@/assets/svg/githubIcon.svg'
import { useTranslation } from "react-i18next";
import styles from './GitHub.module.css'
import cat3 from './cat3.gif'


export default function GitHub() {

    const [t, i18n] = useTranslation("global");

    return (
        <a
            href="https://github.com/JCutisaca"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.container}
        >
            <div className={`${styles.github} p-4 md:p-8 bg-[#00000077] dark:bg-[#1c053a9c]`}>
                <Image alt="" className="absolute bg-[#0e0642]" src={cat3}></Image>

                <ExternalLinkIcon></ExternalLinkIcon>
                <div className={styles.githubInfo}>
                    <Image src={githubIcon} className="text-xs md:text-5xl hidden md:flex w-12 h-12" alt="GitHub" />
                    <div className="">
                        <h2 className="text-white text-sm md:text-xl lg:text-3xl font-bold">GitHub</h2>
                        <p className="text-white text-sm md:text-md lg:text-2xl">{t("githubDescription")}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}
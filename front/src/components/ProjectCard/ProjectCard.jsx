import { useTranslation } from "react-i18next";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";


export default function ProjectCard({ id, name, descriptionEnglish, descriptionSpanish, image, technologies }) {

    const [t, i18n] = useTranslation("global");
    const router = useRouter()

    const handleClick = () => {
        router.replace(`/projects/${id}`)
    }

    const  { theme } = useTheme();
    const textColor = theme === 'dark' ? 'text-white' : 'text-white';
    const bgColor = theme === 'dark' ? 'bg-[#af72ff56]' : 'bg-[#f07c19]';

    return (
            <motion.div
                onClick={handleClick} className={styles.container}>
                <motion.div
                    className={`${bgColor} ${styles.card}`}>
                    <p className={`${textColor} ${styles.name}`}>{name}</p>
                    <p className={`${textColor} ${styles.description}`}>{i18n.language === "en" ? descriptionEnglish : descriptionSpanish}</p>
                    <div className={styles.containerTags}>
                        {technologies?.map(technology => {
                            return (
                                <p key={technology} className={`${textColor} ${styles.tags} bg-[#000000aa]`} >{technology}</p>
                            )
                        })}
                    </div>
                    <div className={styles.containerImage}>
                        <Image
                            alt={name}
                            src={image}
                            className={styles.image}
                            width={1280}
                            height={720}
                            priority
                        />
                    </div>
                </motion.div>
            </motion.div>
    )
}
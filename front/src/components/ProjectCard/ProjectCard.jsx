import { useTranslation } from "react-i18next";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectCard({ id, name, descriptionEnglish, descriptionSpanish, image, website, gitHub, technologies }) {

    const [t, i18n] = useTranslation("global");
    const router = useRouter()

    const handleClick = () => {
        router.replace(`/projects/${id}`)
    }

    return (
        <div onClick={handleClick} className={styles.container}>
            <div className={`bg-[#1c053a9c] dark:bg-[#af72ff56] ${styles.card}`}>
                <p className={styles.name}>{name}</p>
                <p className={styles.description}>{i18n.language === "en" ? descriptionEnglish : descriptionSpanish}</p>
                <div className={styles.containerTags}>
                    {technologies?.map(technology => {
                        return (
                            <p key={technology} className={`${styles.tags} bg-[#000000aa]`} >{technology}</p>
                        )
                    })}
                </div>
                <div className={styles.containerImage}>
                    <Image
                        alt=""
                        src={image}
                        className={styles.image}
                        width={1280}
                        height={720}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
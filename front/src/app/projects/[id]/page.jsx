"use client"
import styles from './ProjectId.module.css'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import ExternalLinkIcon from '@/components/Utils/ExternalLinkIcon';
import githubIcon from '@/assets/svg/githubIcon.svg'
import Image from 'next/image';

export default function ProjectId({ params }) {
    const { id } = params;
    const router = useRouter();
    const [t, i18n] = useTranslation("global")

    const [showModal, setShowModal] = useState(false);
    const projectsIds = useSelector(state => state.projectsReducer.projectsIds);
    const projectId = (useSelector(state => state.projectsReducer.allProjects)).find(project => project.id === id);


    const closeModal = (event) => {
        if (event.target.id === "modal") {
            setShowModal(false);
            router.replace("/projects")
        }
    }

    useEffect(() => {
        if (projectsIds.includes(id)) {
            setShowModal(true)
        } else {
            router.replace("/projects")
        }
    }, [])

    return (
        <>
            {showModal &&
                <div id="modal" onClick={closeModal} className={styles.modal}>
                    <motion.div
                        layout layoutId={projectId.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed z-10 w-[90%] md:w-[60%] h-[80%] md:h-[60%] top-[10%] md:top-[20%] left-[5%] md:left-[20%]">
                        <motion.div
                            layout
                            className="w-full h-full rounded-3xl p-4 "
                            style={{ backgroundColor: "#5183B4aa" }} // bg-[#f8efff] dark:bg-[#09030e]
                        >
                            <div className="rrelative rounded-3xl w-full h-full p-4 md:p-8 overflow-y-scroll">
                                <div className="absolute right-6 top-6 md:right-10 md:top-10 cursor-pointer">
                                    <i className="fa-solid fa-xmark text-3xl"></i>
                                </div>

                                <h1 className="text-3xl font-bold mb-4">{projectId.name}</h1>
                                <p className={`text-lg ${(projectId?.descriptionSpanish.length > 0 ||
                                    projectId?.descriptionEnglish.length > 0) &&
                                    "h-1/3"
                                    } overflow-y-scroll md:h-auto`}
                                >
                                    {i18n.language === "en"
                                        ? projectId?.descriptionEnglish
                                        : projectId?.descriptionSpanish}
                                </p>
                                <div className="flex gap-2 mt-4 w-full overflow-x-scroll pb-2">
                                    {projectId.technologies.map((tech) => (
                                        <p key={tech}
                                            className="text-xs md:text-base px-2 md:px-4 rounded-3xl h-6 flex items-center text-nowrap"
                                            style={{ backgroundColor: "#5183B4aa" }}
                                        > {tech} </p>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-2 mt-8">
                                    <p className="flex items-center gap-2 font-semibold">
                                        <ExternalLinkIcon /> Website
                                    </p>
                                    <a href={projectId.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline truncate">
                                        {projectId.website}
                                    </a>
                                </div>
                                <div className="flex flex-col gap-2 mt-8">
                                    <p className="flex items-center gap-2 font-semibold">
                                        <Image src={githubIcon} className="text-xs md:text-5xl md:flex w-6 h-6" alt="GitHub" /> Github
                                    </p>
                                    <a href={projectId.gitHub}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline truncate">
                                        {projectId.gitHub}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            }
        </>
    )
}
"use client"
import styles from './ProjectsPage.module.css';
import { useTranslation } from "react-i18next";
import Theme from '@/components/Theme/Theme';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ArrowIcon from '@/components/Utils/ArrowIcon';
import Language from '@/components/Language/Language';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { getAllProjects } from '@/apiRequests/getAllProjects';
import { useSelector, useDispatch } from 'react-redux'
import { getProjects } from '@/redux/features/projectsSlice';


export default function ProjectsPage() {

    const [t, i18n] = useTranslation("global");

    const allProjects = useSelector(state => state.projectsReducer.allProjects)

    const dispatch = useDispatch();

    const fetchAllProjects = async () => {
        try {
            const response = await getAllProjects();
            if (allProjects.length !== response.length) {
                dispatch(getProjects(response))
            }
        } catch (error) {
            console.log("error", error.message);
        }
    }

    useEffect(() => {
        fetchAllProjects()
    }, []);


    return (
        <>
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
            <div className="grid grid-cols-3 gap-8 md:grid-cols-3 md:gap-4 mb-5 w-[90%] mx-auto xl:w-full xl:px-20 ">
                {allProjects?.map(({ id, name, descriptionEnglish, descriptionSpanish, image, website, gitHub, technologies }) => {
                    return (
                        <ProjectCard
                            key={id}
                            id={id}
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
        </>
    )
}
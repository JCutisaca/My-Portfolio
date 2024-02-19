"use client"
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ArrowIcon from '@/components/Utils/ArrowIcon';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { getAllProjects } from '@/apiRequests/getAllProjects';
import { useSelector, useDispatch } from 'react-redux'
import { getProjects } from '@/redux/features/projectsSlice';
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";



export default function ProjectsPage() {

    const [t, i18n] = useTranslation("global");

    const allProjects = useSelector(state => state?.projectsReducer?.allProjects);

    const [stylePage, setStylePage] = useState();

    const dispatch = useDispatch();

    const pathname = usePathname();

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

    const variants = {
        open: { opacity: 1, height: "auto" },
        closed: { opacity: 0, height: 0 }
    };

    const  { theme } = useTheme();
    const textColor = theme === 'dark' ? 'text-white' : 'text-white';
    const bgColor = theme === 'dark' ? 'bg-[#af72ff56]' : 'bg-[#f07c19]';

    useEffect(() => {
        if(theme === "dark") {
            setStylePage("bg-[#af72ff56]")
        } else {
            setStylePage("bg-[#f07c19]")
        }
    }, [theme])

    return (
        <>
            <motion.div initial="closed"
                animate="open"
                exit="closed"
                variants={variants}
            >
                {pathname === "/contact" || pathname === "/projects" ? (
                    <Link href="/">
                        <ArrowIcon />
                    </Link>
                ) : null}
                <div className="container mx-auto mt-20 mb-8 aspect-2/1 md:aspect-auto flex justify-between items-center overflow-hidden flex-col w-[90%] xl:w-full">
                    <h1 className={`${textColor} ${stylePage} uppercase font-bold text-2xl md:text-5xl flex gap-1 md:gap-4 justify-center items-center rounded-3xl w-[100%] xl:w-[90%] xl:px-20`}>
                        {t("projectsTitle")}
                    </h1>
                </div>
                <div className="container mx-auto grid grid-cols-3 gap-8 md:grid-cols-3 md:gap-4 mb-5 w-[90%] xl:w-full xl:px-20">
                    {allProjects?.map(({ id, name, descriptionEnglish, descriptionSpanish, image, technologies }) => {
                        return (

                            <ProjectCard
                                key={name}
                                id={id}
                                name={name}
                                descriptionEnglish={descriptionEnglish}
                                descriptionSpanish={descriptionSpanish}
                                image={image}
                                technologies={technologies}
                            ></ProjectCard>
                        )
                    })}
                </div>
            </motion.div >
        </>
    )
}
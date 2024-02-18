import { useTranslation } from "react-i18next"
import ArrowIcon from "../Utils/ArrowIcon"
import Link from "next/link";
import cat3 from '../GitHub/cat3.gif'
import Image from "next/image";


export default function Projects() {

    const [t, i18n] = useTranslation("global");

    return (
        <Link
            href="/projects"
            className="relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden hover:scale-[103%] transition duration-300 ease-in-out"
        >
            <ArrowIcon></ArrowIcon>
            <Image alt="Bongo Cat" className="absolute bg-[#0e0642] z-[1]" src={cat3}></Image>
            <div className="w-full h-full absolute top-0 left-0 text-white p-4 md:p-8 z-10 pointer-events-none">
                <h2 className="font-bold text-md md:text-xl lg:text-4xl">
                    {t("projectsTitle")}
                </h2>
            </div>
            <div className="w-full h-full bg-[#1c053a9c] dark:bg-[#af72ff56] absolute">
            </div>
        </Link>
    )
}
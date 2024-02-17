import Image from "next/image";
import ExternalLinkIcon from "../Utils/ExternalLinkIcon";
import githubIcon from '@/assets/svg/githubIcon.svg'
import { useTranslation } from "react-i18next";


export default function GitHub() {

    const [t, i18n] = useTranslation("global");

    return (
        <a
            href="https://github.com/JCutisaca/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative justify-around md:justify-normal flex flex-col aspect-square items-center gap-4 p-3 md:p-7 lg:p-8 rounded-3xl col-span-1 overflow-hidden bg-[#000000] hover:scale-[103%] transition duration-300 ease-in-out"
            style={{ border: "solid 1px" }}
        >
            <>
                <ExternalLinkIcon></ExternalLinkIcon>
            </>
            <Image src={githubIcon} className="w-1/5 md:m-4" alt="" />
            <div className="relative -top-4 sm:top-0 text-center">
                <p className="capitalize text-white text-xs md:text-lg lg:text-2xl font-semibold lg:mb-0">
                    GitHub
                </p>
                <p className="invisible sm:visible text-white text-xs md:text-base text-nowrap">{t("githubDescription")}</p>
            </div>
        </a>
    )
}
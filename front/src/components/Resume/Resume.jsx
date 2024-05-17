import Image from "next/image";
import { useTranslation } from "react-i18next";
import downloadIcon from '@/assets/svg/download.svg'


export default function Resume() {
    const [t, i18n] = useTranslation("global");
    const file = "/pdf/Resume_Jhonathan_Cutisaca.pdf";
    const fileEs = "/pdf/Cv_Jhonathan_Cutisaca.pdf";
    return (
        <div
            className="gap-6 md:gap-0 relative justify-around md:justify-normal flex flex-col aspect-square items-center gap-4 p-3 md:p-7 lg:p-8 rounded-3xl col-span-1 overflow-hidden bg-[#436850] transition duration-300 ease-in-out"
        >
            <p className="text-center capitalize text-white text-xs md:text-lg lg:text-2xl font-semibold lg:mb-0">
                {t("cvTextDownload")}
            </p>
            <Image alt="Icon Download" className="hidden md:flex w-8" src={downloadIcon}></Image>
            <div className="relative -top-4 sm:top-0 text-center w-full h-full flex flex-col md:flex-row justify-between items-center">
                <a className="text-xs text-white md:text-md lg:text-lg xl-text-xl" href={file} download>
                    {t("cvTextEn")}
                </a>
                <a className="text-xs text-white md:text-md lg:text-lg xl-text-xl" href={fileEs} download>
                    {t("cvTextEs")}
                </a>
            </div>
        </div>
    )
}
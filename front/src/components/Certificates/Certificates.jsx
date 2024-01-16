import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

import soyHenry from "@/assets/images/soyHenry.png";
import ExternalLinkIcon from "../Utils/ExternalLinkIcon";

export default function PlatziCard() {
    const [t, i18n] = useTranslation("global");

    return (
        <a
            href="https://certificates.soyhenry.com/new-cert?id=3ed91ff13e87575adfe0ee63aadd377efbda23d24b24eaf584c133931fa7e255"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col aspect-square items-center gap-4 p-3 md:p-7 lg:p-8 rounded-3xl col-span-1 overflow-hidden bg-[#ffff00] hover:scale-[103%] transition duration-300 ease-in-out"
        >
            <>
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-black dark:text-[#00000]"
                    // className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-black dark:text-[#ffffffaa]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z">
                    </path>
                </svg>
            </>
            <Image src={soyHenry} className="w-1/3" alt="" />
            <div className="relative -top-4 sm:top-0 text-center">
                <p className="capitalize text-black text-xs md:text-lg lg:text-2xl font-semibold lg:mb-0">
                    {t("certificateTitle")}
                </p>
                <p className="invisible sm:visible text-black text-xs md:text-lg text-nowrap">Soy Henry - 2023</p>
            </div>
        </a>
    );
}
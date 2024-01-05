"use client"

import { usePathname } from "next/navigation"

export default function ExternalLinkIcon() {

    const pathname = usePathname();

    return (
        <>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                className={`${pathname.startsWith("/projects")
                    ? "relative top-0 left-0 text-xl"
                    : "absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]"
                    }`}
                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
            </svg>
        </>
    )
}
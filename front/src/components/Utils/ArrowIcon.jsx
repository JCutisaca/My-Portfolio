"use client"
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";




export default function ArrowIcon() {
    const pathname = usePathname();
    const  { theme } = useTheme();
    const textColor = theme === 'dark' ? 'white' : 'black';
    const isSpecialRoute = pathname === "/contact" || pathname.startsWith("/projects");
    return (
        <div>
            <svg
                stroke="currentColor"
                fill={isSpecialRoute ? textColor : 'white'}
                strokeWidth="0"
                viewBox="0 0 16 16"
                className={(pathname !== "/contact" && !pathname.startsWith("/projects"))
                    ? "absolute right-2 top-auto md:right-8 md:top-8 z-10 text-4xl"
                    : "absolute left-4 bottom-4 top-8 md:left-8 md:top-8 z-10 text-4xl rotate-180"}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenod"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                ></path>
            </svg>
        </div>
    )
}
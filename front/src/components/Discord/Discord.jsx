import React, { useEffect, useMemo, useState } from "react";
import moment from "moment/moment";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import discord from "@/assets/svg/discord.svg";
import { getDiscordStatus } from "@/apiRequests/getDiscordStatus";

export default function Discord() {
    const [data, setData] = useState(null);
    const [activity, setActivity] = useState(null);
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        const item = localStorage.getItem("language");
        const fetchStatus = async () => {
            const response = await getDiscordStatus();
            setData(response);
        }
        fetchStatus();
    }, []);

    useEffect(() => {
        moment.locale(i18n.language);
    }, [i18n]);

    useEffect(() => {
        let activities = [];
        activities = data?.data?.activities?.filter((activity) => {
            return activity.name !== "Spotify" && activity.type === 0;
        });

        if (activities?.length > 0) {
            setActivity(activities[0]);
        }
    }, [data]);

    const [status, backgroundStatus] = useMemo(() => {
        if (!data) return ["loading", "bg-gray-400"];
        switch (data?.data?.discord_status) {
            case "idle":
            case "dnd":
                return ["dnd", "bg-[#FF5B5B] dark:bg-[#E33E3E]"];
            case "online":
                return ["online", "bg-[#7289da] dark:bg-[#7289da]"];
            case "offline":
                return ["offline", "bg-[#909090] dark:bg-[#AFAFAF]"];
        }
    }, [data]);

    return (
        <div
            className={`text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm ${backgroundStatus}`}
        >
            <div className="relative flex justify-center w-full h-fit top-4 z-[1]">
                <p className="z-1 capitalize text-xs md:text-base lg:text-base font-semibold lg:mb-0">{t("discord.add")} #9700</p>
            </div>
            <div className="absolute text-nowrap inset-0 flex items-center justify-center text-md md:text-2xl xl:text-3xl font-bold">
                <div className="flex items-center gap-3 max-w-[90%]">
                    <p className="flex gap-1 md:gap-2 justify-center items-center text-xs md:text-lg lg:text-2xl"><Image src={discord} alt="" /> {t(`discord.${status}`)}</p>
                </div>
            </div>

            {status !== "offline" && (
                <div className="absolute bottom-0 w-full flex justify-end items-center p-5 gap-5 invisible lg:visible">
                    <div className="flex flex-col items-end ">
                        <p className="font-bold">{activity?.name}</p>
                        <p>{`${t("discord.since")} ${moment(
                            activity?.timestamps?.start
                        ).fromNow()}`}</p>
                    </div>
                    {activity?.assets?.large_image && (
                        <Image
                            className="invisible rounded-md w-10 h-10 lg:visible"
                            src={`https://cdn.discordapp.com/app-assets/${activity?.application_id}/${activity?.assets?.large_image}.webp`}
                            width="40"
                            height="40"
                            draggable="false"
                            alt="Icon Discord"
                        />
                    )}
                </div>
            )}
        </div>
    );
}
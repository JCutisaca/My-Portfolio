import { useEffect, useState, useRef } from 'react'
import styles from './Spotify.module.css'
import { getCurrentTrack } from '@/apiRequests/getCurrentTrack';
import Image from 'next/image';
import ButtonPause from '../Utils/ButtonPause';
import ButtonPlay from '../Utils/ButtonPlay';
import SpotifyIcon from './SpotifyIcon';
import { useTranslation } from 'react-i18next';

export default function SpotifyCard() {
    const audioRef = useRef(null);
    const [idTrack, setIdTrack] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [startTrack, setStartTrack] = useState(true);
    const [t, i18n] = useTranslation("global");

    const handleState = () => {
        setIsPlaying((prev) => !prev);
        if (!isPlaying) {
            setStartTrack(false)
        }
    };

    const resetStartTrack = () => {
        setStartTrack(true)
    }

    const handleTogglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const currentTrack = await getCurrentTrack();
                if (currentTrack) {
                    setIdTrack(currentTrack);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchTrack();
    }, []);

    return (
        <>
            <div className="bg-[#00000042] relative flex flex-col justify-between p-3 md:p-7 lg:p-8 rounded-3xl md:col-span-2 col-span-2 row-span-1 overflow-hidden">
                <div className="absolute invisible md:visible md:static">
                    <a
                        href={idTrack?.external_urls.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:text-4xl text-[#62DBBE] dark:text-[#25ac8c] duration-500 hover:text-[#4cd1b2] dark:hover:text-[#3ca188] ease-in-out"
                        aria-label="Spotify"
                    >
                        <SpotifyIcon />
                    </a>
                </div>

                <div>
                    <p className="text-[#ffffff] font-bold text-xs lg:text-2xl md:text-xl">
                        {i18n.language === "en" ? "Recently listened" : "Recientemente escuchado" }
                    </p>
                    <div className="flex mb-2 flex-col">
                        <p className="text-[#ffffff] w-full xl:text-xl lg:text-lg text-xs font-semibold truncate">
                            {idTrack?.name}
                        </p>
                        <p className="text-[#ffffff] w-full xl:text-xl lg:text-lg text-xs truncate">
                            {idTrack?.artists.length > 1
                                ? idTrack?.artists.map((artist) => artist.name).join(", ")
                                : idTrack?.artists[0].name}
                        </p>
                    </div>
                    {idTrack?.preview_url ? <div id="audiovisual" className={styles.audiovisual}>
                        <div onClick={() => { handleTogglePlay(), handleState() }} className="cursor-pointer text-white text-xl">
                            {isPlaying ? <ButtonPause /> : <ButtonPlay />}
                        </div>
                        <div className={`${styles.audiowire} ${isPlaying ? styles.audioPlay : styles.audioPause} ${startTrack ? styles.audioReset : ""}`} id="audio1"></div>
                        <div className={`${styles.audiowire} ${isPlaying ? styles.audioPlay : styles.audioPause} ${startTrack ? styles.audioReset : ""}`} id="audio2"></div>
                        <div className={`${styles.audiowire} ${isPlaying ? styles.audioPlay : styles.audioPause} ${startTrack ? styles.audioReset : ""}`} id="audio3"></div>
                        <div className={`${styles.audiowire} ${isPlaying ? styles.audioPlay : styles.audioPause} ${startTrack ? styles.audioReset : ""}`} id="audio4"></div>
                        <div className={`${styles.audiowire} ${isPlaying ? styles.audioPlay : styles.audioPause} ${startTrack ? styles.audioReset : ""}`} id="audio5"></div>
                        <div className={`${styles.audiowire} ${isPlaying ? styles.audioPlay : styles.audioPause} ${startTrack ? styles.audioReset : ""}`} id="audio6"></div>
                        <div className={`${styles.audiowire} ${isPlaying ? styles.audioPlay : styles.audioPause} ${startTrack ? styles.audioReset : ""}`} id="audio7"></div>
                        <div className={`${styles.audiowire} ${isPlaying ? styles.audioPlay : styles.audioPause} ${startTrack ? styles.audioReset : ""}`} id="audio8"></div>
                        <div className={`${styles.audiowire} ${isPlaying ? styles.audioPlay : styles.audioPause} ${startTrack ? styles.audioReset : ""}`} id="audio9"></div>
                    </div> : ""}

                    <audio ref={audioRef} src={idTrack?.preview_url} id="music" onEnded={() => { handleState(), resetStartTrack() }}>
                    </audio>
                </div>
                {idTrack?.album.images[0]?.url &&<Image
                    src={idTrack?.album.images[0].url}
                    alt={idTrack?.name || "Song Spotify"}
                    width={idTrack?.album.images[0].width}
                    height={idTrack?.album.images[0].height}
                    className="absolute w-full h-full top-0 left-0 object-cover object-center z-[-1] transition-all duration-300 ease-in-out"
                    priority
                />}
            </div>
        </>
    )
}
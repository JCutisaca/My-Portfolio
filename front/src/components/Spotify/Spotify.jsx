import { useEffect, useState, useRef } from 'react'
import styles from './Spotify.module.css'
import { useTheme } from 'next-themes';
import { getCurrentTrack } from '@/apiRequests/getCurrentTrack';

export default function SpotifyCard() {
    const [idTrack, setIdTrack] = useState();
    const { theme, resolvedTheme } = useTheme();

    const isDarkMode = theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark');

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
        <div className={`bg-[#282828] dark:bg-[#282828] ${styles.container}`}>
            <iframe
                className={`${styles.player}`}
                // style="border-radius:12px" 
                src={`https://open.spotify.com/embed/track/${idTrack}?utm_source=generator&theme=0`}
                width="100%"
                // height="152" 
                // frameBorder="0"
                // allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
        </div>
    )
}
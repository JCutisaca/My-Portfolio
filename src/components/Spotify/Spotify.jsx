import { useEffect, useRef, useState } from 'react'
import styles from './Spotify.module.css'
import { Spotify } from 'react-spotify-embed';
import { useTheme } from 'next-themes';

export default function SpotifyCard() {
    const [player, setPlayer] = useState(undefined);
    const { theme, resolvedTheme } = useTheme();

    const isDarkMode = theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark');
    // const audioRef = useRef()
    // const handleClick = () => {
    //     if (isPlaying) {
    //         audioRef.current.pause()
    //     } else {
    //         // audioRef.current.src = "https://p.scdn.co/mp3-preview/deaafa97293cd4899da4fb7ad1c157b5af7f4f26?cid=4ddae86ce3a1482cb8ca1c9e259ca35d"
    //         audioRef.current.src = "https://open.spotify.com/intl-es/track/2RpKh7kXSdO8NLrW9VQ46p?si=1c28fe5da7914087"
    //         audioRef.current.play()
    //         audioRef.current.volume = 0.1
    //     }
    //     setIsPlaying(!isPlaying)
    // }
    return (
        <div className={`bg-[#FFFFFF] dark:bg-[#121212] ${styles.container}`}>
            <Spotify isBlurred className={`${styles.player}`} wide link="https://open.spotify.com/track/34sGnIHB3ZthMvHpNX1i7e?si=24973691ea384fb2" />
        {/* {!isDarkMode ? <Spotify className={`bg-[#FFFFFF] dark:bg-[#121212] rounded-3xl ${styles.containerMusic}`} wide link="https://open.spotify.com/track/2RpKh7kXSdO8NLrW9VQ46p?si=24973691ea384fb2" />
        //    :
        //    <Spotify className={`bg-[#FFFFFF] dark:bg-[#121212] rounded-3xl ${styles.containerMusic}`} wide link="https://open.spotify.com/track/6RH49kOurGNl02pT2iKOOp?utm_source=generator&theme=0" />} */}
        </div>
    )
}
import styles from './WeatherTheme.module.css';
import Image from "next/image";
import moon from '@/assets/svg/moon.svg';

export default function WeatherNight() {
    return (
        <>
            <div className={`${styles.moonBorder} w-20 h-20 md:w-40 md:h-40 right-5`}>
            </div>
            <Image className={`${styles.moon} w-20 h-20 md:w-40 md:h-40 right-5`} src={moon}></Image>
        </>
    )
}
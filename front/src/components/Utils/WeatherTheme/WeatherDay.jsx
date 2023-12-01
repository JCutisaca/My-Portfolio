import styles from './WeatherTheme.module.css'

export default function WeatherDay() {
    return (
        <>
            <div className={`${styles.sun} w-20 h-20 md:w-40 md:h-40 right-5`}>
            </div>
        </>
    )
}
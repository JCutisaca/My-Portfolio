import { getCurrentWeather } from "@/apiRequests/getCurrentWeather";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from './Weather.module.css'

export default function Weather() {

  const [dataWeather, setDataWeather] = useState();
  const [time, setTime] = useState("");
  const [t, i18n] = useTranslation("global");
  const handleTime = () => {
    const fechaHoraLocal = new Date();
    const hour = String(fechaHoraLocal.getHours()).padStart(2, '0');
    const minutes = String(fechaHoraLocal.getMinutes()).padStart(2, '0');
    const currentTime = `${hour}:${minutes}`
    return currentTime
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const language = i18n.language;
          const response = await getCurrentWeather(lat, lon, language);
          setDataWeather(response)
        }
      );
    } else {
      console.error('Geolocalización no es compatible en este navegador.');
    }
  }, [i18n.language])

  useEffect(() => {
    setInterval(() => {
      setTime(handleTime())
    }, 1000)
  }, [])

  return (
    <div className={styles.container}>
      <div className={`bg-[#089cffa4] ${styles.weatherContainer}`}>
        <div className={`${!dataWeather?.country_code ? "hidden" : styles.weatherLeft}`}>
          <div className={styles.currentWeather}>
            <p className="text-lg md:text-6xl lg:text-7xl font-bold">
              {(Math.round(dataWeather?.current.temp * 10) / 10) + "°"}
            </p>
            <Image
              src={`https://openweathermap.org/img/wn/${dataWeather?.current.weather[0].icon}@2x.png`}
              width={100}
              height={100}
              className={styles.imageWeather}
              draggable="false"
              alt=""
            />
          </div>
          <p className="capitalize text-xs md:text-2xl lg:text-2xl font-semibold lg:mb-0">
            {dataWeather?.current.weather[0].description}
          </p>
          <p className="text-xs md:text-lg lg:text-xl">{time}</p>
          <p className="text-xs md:text-lg lg:text-xl">
            {dataWeather?.town + ", " + dataWeather?.country_code.toUpperCase()}
          </p>
        </div>
        <div className={`${!dataWeather?.country_code ? "justify-center" : styles.weatherRight}`}>
          <div className={`${styles.sun} w-20 h-20 md:w-40 md:h-40 right-5`}>
          </div>
        </div>
      </div>
    </div >
  )
}
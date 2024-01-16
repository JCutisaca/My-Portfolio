import { getCurrentWeather } from "@/apiRequests/getCurrentWeather";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from './Weather.module.css';
import WeatherDay from "../Utils/WeatherTheme/WeatherDay";
import WeatherNight from "../Utils/WeatherTheme/WeatherNight";
import { AnimatePresence, motion } from "framer-motion";


export default function Weather() {

  const [dataWeather, setDataWeather] = useState();
  const [time, setTime] = useState("");
  const [drops, setDrops] = useState([]);
  const [t, i18n] = useTranslation("global");

  const handleTime = () => {
    const fechaHoraLocal = new Date();
    const hour = String(fechaHoraLocal.getHours()).padStart(2, '0');
    const minutes = String(fechaHoraLocal.getMinutes()).padStart(2, '0');
    const currentTime = `${hour}:${minutes}`
    return currentTime
  }

  const generateDrops = () => {
    const currentDrops = [];
    for (let i = 0; i < 10; i++) {
      const size = Math.random() > 0.5 ? 'dropBig' : (Math.random() > 0.5 ? 'dropMedium' : 'dropMedium');
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 2;
      currentDrops.push({ size, left, animationDelay });
    }
    return currentDrops;
  }

  const timeDescription = dataWeather?.current.weather[0].description.toLowerCase().split(" ");

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
    setDrops(generateDrops())
    const timeInterval = setInterval(() => {
      setTime(handleTime())
    }, 1000)

    const dropsInterval = setInterval(() => {
      setDrops(generateDrops())
    }, 10000)
    return () => {
      clearInterval(timeInterval);
      clearInterval(dropsInterval);
    }
  }, [])
  
  return (
    <div className={styles.container}>
      <div className={`bg-[#089cffa4] ${styles.weatherContainer}`}>
        {timeDescription?.includes("lluvia") || timeDescription?.includes("rain") ? drops.map((drop, index) => (
          <div
            key={index}
            className={styles[drop.size]}
            style={{
              left: `${drop.left}%`,
              animationDelay: `${drop.animationDelay}s`
            }}
          />
        )) : null}
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
          <AnimatePresence mode='wait'>
            <motion.div
              key={time && parseInt(time.split(':')[0]) >= 19 || parseInt(time.split(':')[0]) < 7 ? 'Night' : 'Day'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              {time && parseInt(time.split(':')[0]) >= 19 || parseInt(time.split(':')[0]) < 7 ? <WeatherNight /> : <WeatherDay />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div >
  )
}
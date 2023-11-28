import { getCurrentWeather } from "@/apiRequests/getCurrentWeather";
import axios from "axios";

export default function Weather() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const result = await getCurrentWeather(lat, lon)
            console.log(result);
            console.log(`Latitud: ${lat}, Longitud: ${lon}`);
          },
          (error) => {
            console.error(`Error al obtener la ubicación: ${error.message}`);
          }
        );
      } else {
        console.error('Geolocalización no es compatible en este navegador.');
      }
      
    return (
        <div className={`bg-[#1c053a9c;] dark:bg-[#1c053a9c;]rounded-3xl flex relative overflow-hidden col-span-2`}>
            <h1>soy la card del clima</h1>
        </div>
    )
}
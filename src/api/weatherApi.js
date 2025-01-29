
const API_KEY = process.env.OPENWEATHER_API_KEY;

const getWeatherData = async (ciudad) => {
    try {
      const respuesta = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${ciudad}&aqi=no`
      );
      const datos = await respuesta.json();
      console.log("Datos del clima recibidos:", datos);
      return datos;
    } catch (error) {
      console.error("Error al obtener el clima:", error);
      return null;
    }
  };
  
  export default getWeatherData;

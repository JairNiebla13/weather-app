import { useEffect, useState } from "react";
import { getDocs, collection, query, orderBy, where } from "firebase/firestore";
import { db } from "../firebase-config";

function WeatherSaved({ auth }) {
  const [weatherList, setWeatherList] = useState([]);
  const [loading, setLoading] = useState(true);
  const weatherCollectionRef = collection(db, "weather");

  const fetchWeatherSaved = async () => {
    try {
      const q = query(
        weatherCollectionRef,
        where("id", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const data = await getDocs(q);
      setWeatherList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth.currentUser) {
      fetchWeatherSaved();
    }
  }, [auth.currentUser?.uid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Saved Weather</h2>
      <ul>
        {weatherList.map((weather) => (
          <li key={weather.id} className="flex justify-between">
            <p>
              <strong>Ciudad:</strong> {weather.city}
            </p>
            <p>
              <strong>Temperatura:</strong> {weather.temperature}°C
            </p>
            <p>
              <strong>Condición:</strong> {weather.condition}
            </p>
            <p>
              <strong>Humedad:</strong> {weather.humidity}%
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherSaved;

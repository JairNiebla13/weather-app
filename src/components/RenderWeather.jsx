import rain from '../assets/rain.png';
import thunderstorms from '../assets/thunderstorms.png';
import icon from '../assets/icon.png';
import clouds from '../assets/clouds.png';
import sunny from '../assets/sunny.png';
import cloudy from '../assets/cloudy.png';

function getWeatherImage(weatherCondition) {
    switch (weatherCondition) {
        case 'Clear':
            return sunny;
        case 'Rain':
            return rain;
        case 'Thunderstorm':
            return thunderstorms;
        case 'Clouds':
            return clouds;
        case 'Cloudy':
            return cloudy;
        default:
            return icon;
    }
}

function RenderWeather({ weather, error }) {

    const weatherCondition = weather && weather.weather && weather.weather[0] ? weather.weather[0].main : '';

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {weather.name && (
                <>
                    <h3>{weather.name}</h3>
                    <p>{weather.main && weather.main.temp ? `${weather.main.temp} C°` : "Temperatura no disponible"}</p>
                    <p>{weather.weather[0].main}</p>
                    <p>{weather.main && weather.main.humidity ? `Humidity: ${weather.main.humidity} %` : "Humedad no disponible"}</p>
                    <img src={getWeatherImage(weatherCondition)} alt="img" />
                </>
            )}
        </div>
    )
}

export default RenderWeather
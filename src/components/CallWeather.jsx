import React, { useState } from 'react';
import SearchWeather from './SearchWeather';
import cloudsImage from '../assets/clouds.png'
import RenderWeather from './RenderWeather';

const api = {
    key: "f1ebc685ca4622a690e800786572f17d",
    base: "https://api.openweathermap.org/data/2.5/"
}

function CallWeather() {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
    const [error, setError] = useState(null); // Añadir un estado para manejar errores


    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Error en la respuesta de la API");
                }
                return res.json();
            })
            .then(result => {
                setWeather(result);
                setError(null); // Limpiar cualquier error previo
                console.log(weather)
            })
            .catch(err => {
                setError(err.message); // Establecer el mensaje de error
                setWeather({}); // Limpiar el estado del tiempo en caso de error
            });
    }





    return (
        <div className='container text-white'>
            <div>
                <SearchWeather setSearch={setSearch} searchPressed={searchPressed} />
            </div>
            <div>
                <RenderWeather weather={weather} error={error} />
            </div>
        </div>
    )
}

export default CallWeather;

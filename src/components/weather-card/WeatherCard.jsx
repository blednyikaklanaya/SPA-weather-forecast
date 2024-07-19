/* eslint-disable react/prop-types */
import { useState } from "react";
import "./weatherCard.css";

export default function WeatherCard() {

    let [tepmState, setTemp] = useState(0);
    let [locationState, setLocation] = useState("No data:(");
    let [windState, setWind] = useState(0);

    const getDataWeather = (lat = 50.4547, long = 30.5238) => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&timezone=auto`)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                let { hourly } = response;
                let { temperature_2m } = hourly;

                let { timezone } = response;

                setTemp(temperature_2m[length]);
                setLocation(timezone);
                console.log(response.ok);
            })
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=wind_speed_10m&timezone=auto`)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                let { hourly } = response;
                let { wind_speed_10m } = hourly;

                setWind(wind_speed_10m[length]);
            })
    };

    const getGeocoding = (country = "Kiev") => {
        return fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=1&appid=4a47ff6c5d1b8c94b08e133f4a2ca9b3`)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                return ([response[0].lat, response[0].lon]);
            })
    };

    async function setData(country = "Kiev") {
        let data = await getGeocoding(country);
        getDataWeather(data[0], data[1])

        console.log(data);
    }

    function onCheckLocation(e) {
        console.log(e.target.value);

        if (e.target.value.length >= 3) {
            console.log("search");

            setData(e.target.value);
        }

    }

    return (

        <div className="weather-card" >

            <div className="container-weather-card">
                <span className="text-location">Location: {locationState}</span>
                <span className="text-sectione-card">Weather conditions</span>
                <span className="text-temperature">Temperature: {tepmState} km/h</span>
                <span className="text-wind-speed">Wind speed: {windState} km/h</span>
            </div>

            <div className="weather-card-location">
                <label className="search-label">Input Location</label>
                <input
                    className="search-input"
                    onChange={onCheckLocation}
                >

                </input>
            </div>

        </div >
    )
}
import {UI_ELEMETS_DETAIL} from "./view.js";
import {URL} from "./now.js";

export function addDetail(cityName) {
    const url = `${URL.SERVER_URL}?q=${cityName}&appid=${URL.APIKEY}`;
    fetch(url)
        .then(response => response.json())
        .then(function (cityName) {
            UI_ELEMETS_DETAIL.CITY_NAME.textContent = cityName.name;
            return cityName
        })
        .then(function (temperatyre) {
            let temperatyreСelsius = +temperatyre.main.temp - 273;
            UI_ELEMETS_DETAIL.TEMPERATYRE.textContent = 'Temperature: ' + Math.round(temperatyreСelsius) + '°';
            return temperatyre
        })
        .then(function (feelslike) {
            let feelsLikeСelsius = +feelslike.main.feels_like - 273;
            UI_ELEMETS_DETAIL.FEELS_LIKE.textContent = 'Feels like: ' + Math.round(feelsLikeСelsius) + '°';
            return feelslike
        })
        .then(function (weathers) {
            UI_ELEMETS_DETAIL.WEATHER.textContent = 'Weather: ' +weathers.weather[0].main
            return weathers
        })
        .then(function (sunrise) {
            UI_ELEMETS_DETAIL.SUNRISE.textContent = 'Sunrise: ' + translate_unix_Time(sunrise.sys.sunrise)
            return sunrise
        })
        .then(function (sunset) {
            UI_ELEMETS_DETAIL.SUNSET.textContent = 'Sunset: ' + translate_unix_Time(sunset.sys.sunset)
            return sunset
        })
}

function translate_unix_Time(unix_timestamp){
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours ();
    let minutes = date.getMinutes ();
    const time = `${hours }:${ minutes}`
    return time
}
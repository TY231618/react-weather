import axios from 'axios';

const API_KEY = '4b9b0e72d97b23d3c56c21ca5ee37155';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}${city},us&appid=${API_KEY}`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
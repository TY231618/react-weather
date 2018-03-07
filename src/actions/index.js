import axios from 'axios';

const WEATHER_KEY = '4b9b0e72d97b23d3c56c21ca5ee37155';

const REVIEW_KEY = 'ffbaa0fda8b8463a9c659405e441343f';

const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?q=`;

const TIMES_MOVIE_REVIEWS_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key='

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const FETCH_REVIEWS = 'FETCH_REVIEWS';

export function fetchWeather(city) {

  const weatherUrl = `${WEATHER_URL}${city},us&appid=${WEATHER_KEY}`;

  //redux-promise makes this code look synchronous when its not, the preomise which this request returns gets
  // handled by redux-promise which sends a new action to the reducers when original promise is resolved
  const weatherRequest = axios.get(weatherUrl);

  return {
    type: FETCH_WEATHER,
    payload: weatherRequest
  };
}

export function fetchMovieReviews() {

  const movieUrl = `${TIMES_MOVIE_REVIEWS_URL}${REVIEW_KEY}`;

  const movieRequest = axios.get(movieUrl);

  console.log('movies', movieRequest);

  return {
    type: FETCH_REVIEWS,
    payload: movieRequest
  };
}
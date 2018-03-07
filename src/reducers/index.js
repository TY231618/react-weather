import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import MovieReviewReducer from './reducer_movie_reviews';
import DetailReducer from './reducer_details';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  details: DetailReducer,
  reviews: MovieReviewReducer
});

export default rootReducer;

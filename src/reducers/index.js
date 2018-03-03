import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import DetailReducer from './reducer_details';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  details: DetailReducer
});

export default rootReducer;

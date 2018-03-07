import { FETCH_WEATHER } from '../actions/index';

export default (state = [], action) => {

  switch(action.type) {
    case FETCH_WEATHER:

    // doesnt mutate original state creates a new array with added city data
    return state.concat([action.payload.data]);

    // return just one and removes on new search
    // return [action.payload.data];
    // es6 way 
    // return [action.payload.data, ...state];
  }
  return state;
};
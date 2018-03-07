import { FETCH_REVIEWS } from '../actions/index';

export default (state = [], action) => {

  console.log('action', action);

  switch(action.type) {
    case FETCH_REVIEWS:

      console.log('im here', action);

      return [action.payload.data];
  }
  return state;
};
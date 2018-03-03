import React from 'react';
import ReduxPromise from 'redux-promise';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/app';
import reducers from './reducers';

const devToolsExtension = window.devToolsExtension;
// const middleware = [ReduxPromise]
const composeMiddleware = compose(
  applyMiddleware(
    ReduxPromise
  ),
  devToolsExtension()
);
const store = createStore(reducers, {}, composeMiddleware)

// const createStoreWithMiddleware = compose(applyMiddleware(ReduxPromise), [devToolsExtension()])(createStore);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));

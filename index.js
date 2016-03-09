/**
 * Created by adjohnso on 2/11/2016.
 */
import 'babel-polyfill'
import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'

import configureStore from './store/configureStore'
import DevTools from './containers/DevTools'
import 'bootstrap-webpack'

/*
var thunkMiddleware = function ({ dispatch, getState }) {
  // console.log('Enter thunkMiddleware');
  return function(next) {
    // console.log('Function "next" provided:', next);
    return function (action) {
      // console.log('Handling action:', action);
      return typeof action === 'function' ?
        action(dispatch, getState) :
        next(action)
    }
  }
};
*/

//let store = createStore(smartCardApp, applyMiddleware(thunkMiddleware));

const store = configureStore();

render(
  <Provider store={store}>
    <div className="container">
      <App />
    </div>
  </Provider>,
  document.getElementById('app')
);


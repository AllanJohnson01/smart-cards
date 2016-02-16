/**
 * Created by adjohnso on 2/11/2016.
 */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import smartCardApp from './reducers'
import App from './containers/App'

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

let store = createStore(smartCardApp, applyMiddleware(thunkMiddleware));
//let finalStore = applyMiddleware(thunkMiddleware)(store);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


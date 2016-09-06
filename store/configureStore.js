//@flow
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'
import { createEpicMiddleware } from 'redux-observable'

import { pingEpic } from '../actions'

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

const epicMiddlware = createEpicMiddleware(pingEpic);

const enhancer = compose(
  applyMiddleware(thunkMiddleware, epicMiddlware),
  DevTools.instrument()
);

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
    store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}

export default configureStore;

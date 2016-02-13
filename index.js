/**
 * Created by adjohnso on 2/11/2016.
 */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import smartCardApp from './reducers'
import App from './components/App'

let store = createStore(smartCardApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


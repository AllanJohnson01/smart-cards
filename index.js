// @flow
import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import Horizon from '@horizon/client'
import 'rxjs';
const hz = new Horizon({
  host: 'localhost:8181',
  authType: 'token'
});
if (!hz.hasAuthToken()) {
  console.log('in hz.hasAuthToken');
  hz.authEndpoint('facebook').subscribe((endpoint) => {
    console.log('subscribing to authEndpoint');
    window.location.replace(endpoint);
  });
} else {
  console.log('do authendicated Horizon stuff here');
  hz.connect();
  // We have a token already, do authenticated Horizon stuff here
}

//
// // Start establishing the Horizon connection.
// // This step is optional. We can skip it and go directly to the next line.
//hz.connect();



import App from './containers/App'
import configureStore from './store/configureStore'
import DevTools from './containers/DevTools'

hz.onReady().subscribe(() => {
  // Get access to the messages collection
  const messages = hz('messages');
  console.log("Connected to Hoizon server")
  // // Start using the collection
  messages.store({ msg: 'Hello World!' });
})
;

hz.onDisconnected().subscribe(() => console.log("Disconnected from Horizon server"));

hz.status().subscribe((e) => console.log('changes?', e));

//hz.connect();

const store : any = configureStore();

render(
  <Provider store={store}>
  <div>
  <App />
  <DevTools />
  </div>
  </Provider>,
  document.getElementById('app')
);


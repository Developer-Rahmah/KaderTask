import {AppRegistry} from 'react-native';
import t from 'MyMoviesApp/base64Polyfill';
import App from 'MyMoviesApp/App';
import {name as appName} from 'MyMoviesApp/app.json';
import {Provider} from 'react-redux';
import store from 'MyMoviesApp/services/redux/store';
import React from 'react';

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Application, t);

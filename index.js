/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </GestureHandlerRootView>
));

import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Provider} from 'react-redux';

import RootNavigator from './app/navigation/RootNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import configureStore from './app/store/configureStore';

const store = configureStore();

export default class App extends Component {   
  render() {
    return (
      <Provider store={store}>
        <AuthNavigator/>
      </Provider>
    );
  }
}



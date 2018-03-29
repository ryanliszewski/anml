import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import RootNavigator from './app/navigation/RootNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';

export default class App extends Component {   
  render() {
    return (
      <AuthNavigator/>
    );
  }
}



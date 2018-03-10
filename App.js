import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RootNavigator from './app/navigation/RootNavigator';

export default class App extends Component {
  render() {
    return (
        <RootNavigator/>
    );
  }
}



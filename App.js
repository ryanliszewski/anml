import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RootNavigator from './app/navigation/RootNavigator';
import Feed from './app/screens/Feed';

export default class App extends Component {
  render() {
    return (
      <RootNavigator/>

    );
  }
}



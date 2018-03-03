import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Landing from './app/screens/Landing';
import Feed from './app/screens/Feed';
import Login from './app/screens/Login';
import Feed2 from './app/screens/Feed2';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Landing/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

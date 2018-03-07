import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Landing from './app/screens/Landing';
import Feed from './app/screens/Feed';
import Login from './app/screens/Login';
import Profile from './app/screens/Profile';

export default class App extends Component {
  render() {
    return (
        <Feed/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

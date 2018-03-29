import React, { Component } from 'react';
import { View, Text, AsyncStorage  } from 'react-native';

export default class AuthLoading extends Component {
  constructor(props){
    super(props);
    this.isUserLoggedIn()
  }

  isUserLoggedIn = async () => {
    const user = await AsyncStorage.getItem('user');

    this.props.navigation.navigate(user ? 'App' : 'Intro')
  }
  
  
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}



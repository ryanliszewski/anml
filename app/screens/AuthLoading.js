import React, { Component } from 'react';
import { View, Text, AsyncStorage  } from 'react-native';
import { connect } from 'react-redux';
import { updateUserDetails } from '../actions/user';

class AuthLoading extends Component {
  constructor(props){
    super(props);
    this.isUserLoggedIn()
  }

  isUserLoggedIn = async () => {
    var user = await AsyncStorage.getItem('user');

    if(user){
      user = JSON.parse(user)
      this.props.dispatch(updateUserDetails(user));
    }
    this.props.navigation.navigate(user ? 'App' : 'Intro')
  }
  
  render() {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
}

export default connect(state => state)(AuthLoading) 



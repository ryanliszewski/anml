import React, { Component }  from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Button, TouchableOpacity } from 'react-native';
import {  Icon } from 'react-native-elements';
import  {LinearGradient}  from 'expo';
import { Ionicons } from '@expo/vector-icons';

import InputBottomBorder from '../components/Input';
import ButtonOutline from '../components/Button';

export default class Login extends React.Component { 

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      enabled: false,
      buttonEnabledBorder: ''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(input){
    this.setState({password: input})
    const {username, password } = this.state;
    console.log(username)

    if(username.length > 2 && password.length > 7){
      this.setState({enabled: true})
    } else {
      this.setState({enabled: false})
    }
  }

  render(){
    const { enabled }  = this.state 
    
    return (
      <LinearGradient
      style={styles.mainContainer}
      colors={['#FFEBB7','#0E9577']}
      start={{x: 0.0, y: 0.0}}
      end={{x:1.0, y: 1.0}}
      locations={[0.1,0.8]}
      >

      <Text style={styles.title}> anml. </Text> 
        <View style={styles.form}>
          
          <View style={styles.inputContainer}>
           <InputBottomBorder
             securedText={false}
             placeholder='Username'
             iconName='ios-person-outline'
             value={this.state.username}
             onChangeText={(text) => this.setState({username: text})}
            />
          </View>
        <View style={styles.inputContainer}>
          <InputBottomBorder
            securedText={true}
            placeholder='Password'
            iconName='ios-lock-outline'
            value={this.state.password}
            onChangeText={(text) => this.handleInput(text)}
          />
        </View>

        <ButtonOutline 
          buttonEnabled={enabled}
          title='Login'
        />
      </View>
      </LinearGradient> 
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },

  inputContainer: {
    paddingBottom: 20,
  },

  form: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },

  title: {
    paddingTop: 10,
    fontFamily: 'Futura', 
    fontSize: 36,
    color: '#F1EFB9',
    marginTop: 100,
  }
});
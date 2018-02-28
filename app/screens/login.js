import React, { Component }  from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Button, TouchableOpacity } from 'react-native';
import {  Icon } from 'react-native-elements';
import  {LinearGradient}  from 'expo';
import { Ionicons } from '@expo/vector-icons';

import InputBottomBorder from '../components/Input';

export default class Login extends React.Component { 

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonEnabled: false,
      buttonEnabledBorder: ''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(input){
    this.setState({password: input})
    const {username, password } = this.state;

    if(username.length > 2 && password.length > 7){
      this.setState({buttonEnabled: true})
    } else {
      this.setState({buttonEnabled: false})
    }
  }

  render(){
    const { buttonEnabled }  = this.state 
    
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
            securedText={false}
            placeholder='Password'
            iconName='ios-lock-outline'
          />
        </View>

        <TouchableOpacity
          style={{borderColor: buttonEnabled ? '#18ebbb': '#eb1848',
          borderRadius: 30,
          borderWidth: 3,
          padding: 30,
          width: 160,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center'}}
          activeOpacity={buttonEnabled ? 0.25 : 1}
        >
        <Text style={styles.buttonText}> Login </Text> 
        </TouchableOpacity>
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

  buttn: {
   
    borderRadius: 30,
    borderWidth: 3,
    padding: 30,
    width: 160,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: 250,
    paddingBottom: 5,
    paddingLeft: 10,
    fontFamily: 'Futura',
    fontSize: 16,
    color: '#053A2E',
    fontWeight: 'bold'
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

  icon: {
    paddingLeft: 5,
  },

  buttonText: {
    fontFamily: 'Futura',
    color: '#fff',
    fontSize: 24
  },

  input: {
  },

  title: {
    paddingTop: 10,
    fontFamily: 'Futura', 
    fontSize: 36,
    color: '#F1EFB9',
    marginTop: 100,
  }
});
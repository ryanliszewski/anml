import React, { Component }  from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Button, TouchableOpacity } from 'react-native';
import {  Icon } from 'react-native-elements';
import  {LinearGradient}  from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class Login extends React.Component { 

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render(){
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
          <Ionicons 
            name="md-person" 
            size={24} 
            color='#FBFAE1'
            style={styles.icon}
            />  
           <TextInput
              style={styles.input}
              value={this.state.username}
              onChangeText={(text) => this.setState({username: text})}
            />         
        </View>

        <View style={styles.inputContainer}>
          <Ionicons 
            name="md-lock" 
            size={24} 
            color='#FBFAE1'
            style={styles.icon}
            />  
           <TextInput
              style={styles.input}
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
            />
        </View>         
        <TouchableOpacity
          style={styles.button}
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

  input: {
    width: 250,
    paddingBottom: 5,
    paddingLeft: 10,
    fontFamily: 'Futura',
    fontSize: 16,
    color: '#053A2E',
    fontWeight: 'bold'
  },

  button: {
    padding: 30,
    width: 160,
    height: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#18EBBB',
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderColor: '#F1EFB9',
    marginBottom: 40,
  },

  form: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },

  icon: {
    paddingLeft: 5,
  },

  buttonText: {
    fontFamily: 'Futura',
    color: '#fff',
    fontSize: 24
  },

  title: {
    paddingTop: 10,
    fontFamily: 'Futura', 
    fontSize: 36,
    color: '#F1EFB9',
    marginTop: 100,
  }
});
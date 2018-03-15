import React, { Component }  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import propTypes from 'prop-types';


const ButtonFill = (props) => {
  
return (
  
  <View style={styles.buttonContainer}>
  <TouchableOpacity
    style={styles.button}
    onPress={() => this.setState({currentScreen: 'login'})}
    underlayColor='#04DEAD'
  >
    <Text style={[styles.buttonText, {fontFamily: props.font}]}> Login </Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.button}
    onPress={() => this.setState({currentScreen: 'register'})}
    underlayColor='#04DEAD'
  >
    <Text style={[styles.buttonText, {fontFamily: props.font}]}> Sign Up </Text>
    </TouchableOpacity>
  </View> 
  
  ); 
}

ButtonFill.propTypes = {
  buttonEnabled: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  onPress: propTypes.func,
  font: propTypes.string,

}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
});

export default ButtonOutline;
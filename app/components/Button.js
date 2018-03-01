import React, { Component }  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import propTypes from 'prop-types';


const ButtonOutline = (props) => {
  
return (
  <TouchableOpacity
      style={{borderColor: props.buttonEnabled ? '#18ebbb': '#eb1848',
      borderRadius: 30,
      borderWidth: 3,
      padding: 30,
      width: 160,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center'}}
      activeOpacity={props.buttonEnabled ? 0.25 : 1}
    >
      <Text style={styles.buttonText}>{props.title}</Text> 
    </TouchableOpacity>
  ); 
}

ButtonOutline.propTypes = {
  buttonEnabled: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
}

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: 'Futura',
    color: '#fff',
    fontSize: 24
  },
});

export default ButtonOutline;



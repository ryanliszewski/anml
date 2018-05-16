import React, { Component }  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ViewPropTypes} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import propTypes from 'prop-types';

const ButtonOutline = (props) => {

return (
  <TouchableOpacity
      style={[
        {borderColor: props.buttonEnabled ? '#18ebbb': '#eb1848',
        borderRadius: props.borderRadius,
        borderWidth: 3,
        width: props.width,
        height: props.height,
        alignItems: 'center',
        justifyContent: 'center',
      }, 
        {...props.style}
      ]}  
      activeOpacity={props.buttonEnabled ? 0.25 : 1}
      onPress={props.onPress}
    >
      <Text style={[styles.buttonText, {fontFamily: props.font}]}>{props.title}</Text> 
    </TouchableOpacity>
  ); 
}

ButtonOutline.propTypes = {
  buttonEnabled: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  onPress: propTypes.func,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  borderRadius: propTypes.number,
  font: propTypes.string,
  style: ViewPropTypes.style
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 20
  },
});

export default ButtonOutline;


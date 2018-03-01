import React, { Component }  from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import propTypes from 'prop-types';

const AlertCustom = (props) => {
  return(
    Alert.alert(
      props.message,
      props.subMessage,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false })
  );
}

AlertCustom.propTypes = {
  message: propTypes.string.isRequired,
  subMessage: propTypes.string.isRequired,
}

export default AlertCustom;
import React, { Component }  from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import propTypes from 'prop-types';


const InputBottomBorder = (props) => {

return(  
  <View style={styles.inputContainer}>
    <Ionicons 
      name={props.iconName}
      size={30} 
      color='#FBFAE1'
      style={styles.icon}
      />  
    <TextInput
        style={styles.input}
        value={props.value}
        secureTextEntry={props.securedText}
        placeholder={props.placeholder}
        placeholderTextColor='#829c96'
        onChangeText={props.onChangeText}
      />
  </View>    
  );
}

InputBottomBorder.propTypes = {
  securedText: propTypes.bool.isRequired,
  placeholder: propTypes.string.isRequired,
  iconName: propTypes.string.isRequired,
  value: propTypes.string,
  onChangeText: propTypes.func,  
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    paddingBottom: 5,
    paddingLeft: 10,
    fontFamily: 'Futura',
    fontSize: 18,
    color: '#053A2E',
    fontWeight: 'bold'
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderColor: '#F1EFB9',
  },

  icon: {
    paddingLeft: 5,
  },
});


export default InputBottomBorder;

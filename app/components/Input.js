import React, { Component }  from 'react';
import { StyleSheet, Text, View, TextInput, Platform, ViewPropTypes} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import propTypes from 'prop-types';

const InputBottomBorder = (props) => {
  
  renderError = () => {
    const { error, value, valid } = props;

    if(error && value && !valid ){
      return( 
        <Text style={[styles.error, {fontFamily: props.font}]}> 
          {error} 
        </Text>
      )
    }
  }

  renderInput = () => {
    const  
      { font, 
      value, 
      securedText, 
      placeholder, 
      onChangeText, 
      onChange, 
      keyType, 
      onSubmitEditing } = props;

      const isAndroid = Platform.OS === 'ios' ? false : true; 

    return (
        <TextInput
        style={[
           styles.input,
           isAndroid ? borderBottomWidth: 0,
          {fontFamily: font},
          {...props.style}
        ]}
        value={value}
        secureTextEntry={securedText}
        placeholder={placeholder}
        placeholderTextColor='#829c96'
        onChangeText={onChangeText}
        allowFontScaling={true}
        onChange={onChange}
        returnKeyType={keyType}
        onSubmitEditing={onSubmitEditing}
      />   
    )
  }


return(  
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <Ionicons 
        name={props.iconName}
        size={30} 
        color='#FBFAE1'
        style={styles.icon}
        />  
        { this.renderInput()}
    </View>
    { this.renderError() }
  </View>    
  );
}

InputBottomBorder.propTypes = {
  securedText: propTypes.bool.isRequired,
  placeholder: propTypes.string.isRequired,
  iconName: propTypes.string.isRequired,
  value: propTypes.string,
  onChangeText: propTypes.func,  
  onChange: propTypes.func,
  keyType: propTypes.string,
  onSubmitEditing: propTypes.func,
  focus: propTypes.bool, 
  font: propTypes.string,
  error: propTypes.string,
  valid: propTypes.bool,
  style: ViewPropTypes.style
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 20,
    color: '#053A2E',
    borderBottomWidth: 0,
    borderColor: 'transparent',
  },

  error: {
    fontSize: 10,
    color: '#930d2c',
    paddingLeft: 5,
    paddingTop: 1,
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

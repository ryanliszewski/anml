import React, { Component }  from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import propTypes from 'prop-types';


const InputBottomBorder = (props) => {
  
  focus = () => {
    this.focus()
  }

  renderError = () => {
    const { error } = props;

    if(props.error && props.value){
      return( 
        <Text style={[styles.error, {fontFamily: props.font}]}> 
          {error} 
        </Text>
      )
    }
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
      <TextInput
          style={[styles.input,
            {fontFamily: props.font}]}
          value={props.value}
          secureTextEntry={props.securedText}
          placeholder={props.placeholder}
          placeholderTextColor='#829c96'
          onChangeText={props.onChangeText}
          allowFontScaling={true}
          onChange={props.onChange}
          returnKeyType={props.keyType}
          onSubmitEditing={props.onSubmitEditing}
        />     
    </View>
    {this.renderError()}
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
  pattern: propTypes.string, 
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
    fontSize: 12,
    color: '#930d2c',
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

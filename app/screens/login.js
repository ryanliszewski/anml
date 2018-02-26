import React, { Component }  from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import  {LinearGradient}  from 'expo';

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
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeHolderText='Enter your username'
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
          />

          <TextInput 
            style={styles.input}
            placeHolderText='Enter your password'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({password:text})}
          />
          <Button
            style={styles.button}
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
    justifyContent: 'center',
  },

  input: {
    height: 60,
    width: 250,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#FBFAE1'
  },

  button: {
    padding: 30,
  }
});
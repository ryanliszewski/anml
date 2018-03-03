import React, { Component }  from 'react';
import { StyleSheet, Alert, View, Platform } from 'react-native';
import  {LinearGradient}  from 'expo';

//Components
import InputBottomBorder from '../components/Input';
import ButtonOutline from '../components/ButtonOutline';
import Logo from '../components/Logo';

export default class Register extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    }
  }

  isEnabled = () => {
    const {email, username, password} = this.state;
    return email.length > 7 && username.length > 2 && password.length > 7;
  }

  handlePress = () => { 
    const {username, enabled} = this.state

    if(this.isEnabled()){
      Alert.alert(
        `Registration was successful`,
        `Welcome to anml, ${username}`,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],

        { cancelable: false })
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
       <View style={styles.logoContainer}>
          <Logo 
            width={150}
            height={150}
            />
        </View>

        <View style={styles.form}>
        <View style={styles.inputContainer}>
        <InputBottomBorder
              securedText={false}
              placeholder='Enter your email'
              iconName='md-mail'
              value={this.state.email}
              onChangeText={(text) => this.setState({email: text})}
              keyType = 'next'
              />       
        </View>
        <View style={styles.inputContainer}>
          <InputBottomBorder
              securedText={false}
              placeholder='Enter your username'
              iconName='ios-mail-outline'
              value={this.state.username}
              onChangeText={(text) => this.setState({username: text})}
              keyType = 'next'
              />   
          </View>
        <View style={styles.inputContainer}>
          <InputBottomBorder
              securedText={true}
              placeholder='Enter your password'
              iconName='md-lock'
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
              keyType = 'go'
              onSubmitEditing={() => this.handlePress()}
              />       
        </View>         
        <ButtonOutline 
            buttonEnabled={this.isEnabled()}
            title='Login'
            onPress={this.handlePress}
            height={40}
            width={160}
            borderRadius={40}
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
  },


  button: {
    borderRadius: 30,
    borderWidth: 3,
    padding: 30,
    width: 160,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    paddingBottom: 20,
  },

  form: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  logoContainer: {
    paddingTop: 60,
  },
});
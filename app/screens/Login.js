import React, { Component }  from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {  Icon } from 'react-native-elements';
import  {LinearGradient}  from 'expo';
import { Ionicons } from '@expo/vector-icons';

//Components
import InputBottomBorder from '../components/Input';
import ButtonOutline from '../components/ButtonOutline';
import AlertCustom from '../components/Alert';
import Logo from '../components/Logo';

export default class Login extends React.Component { 

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      focusPasswordInput: false,
      screen: null,
    }
  }

  async componentDidMount() {
    this.pingServer()
  }


  async pingServer() {
    // Check server status
    // Simple GET request to /api
    try {
      const response = await fetch(`https://daug-app.herokuapp.com/api`, {
        method: 'GET'
      });
      const responseJSON = await response.json();

      debugger
      
      if (response.status === 200) {
        console.log(responseJSON.message);
        console.log('Server up and running!');
      } else {
        const error = responseJSON.message

        console.log("Server request failed " + error);
      }
    } catch (error) {
      console.log("Server is down " + error);
    }
  }


  isEnabled = () => {
    const {username, password} = this.state;
    return username.length > 2 && password.length > 7;
  }

  handleNameInputSubmit() {
  
    this.setState({focusPasswordInput: true});
  }

  handlePress = () => { 
    const {username, enabled} = this.state
    const { navigation } = this.props.navigation

    if(this.isEnabled()){
      Alert.alert(
        `Success`,
        `You've logged in, ${username}`,
        [
          {text: 'OK', onPress: () => Navigation('TabNavigator')},
        ],

        { cancelable: false })
        
    }
  }

  renderContent(){
    const { screen } = this.state;

    if(screen === 'feed'){
      return <Feed/> 
    } else {
      return(
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
              placeholder='Username'
              iconName='ios-person-outline'
              value={this.state.username}
              onChangeText={(text) => this.setState({username: text})}
              keyType = 'next'
              />
            </View>
          <View style={styles.inputContainer}>
            <InputBottomBorder
              securedText={true}
              placeholder='Password'
              iconName='ios-lock-outline'
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
            width={160}
            height={40}
            borderRadius={40}
          />
        </View>
      </LinearGradient> 
      );
    }
  }

  render(){
    return (
      this.renderContent()
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },

  logoContainer: {
    paddingTop: 60,
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
});
import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

//Components
import InputBottomBorder from '../components/Input';
import ButtonOutline from '../components/ButtonOutline';
import AlertCustom from '../components/Alert';
import Logo from '../components/Logo';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      focusPasswordInput: false,
      screen: null,
    }
  }

  async componentDidMount() {
  }

  async pingServer() {
    const { username, password } = this.state
    const { navigate } = this.props.navigation

    var details = {
      'email': username,
      'password': password, 
    }

    var formBody = [];

    for(var property in details){
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);

      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");

    try {
      let response = await fetch(`https://daug-app.herokuapp.com/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      });

      let responseJSON = null

      if (response.status === 201) {

        responseJSON = await response.json();
        
        Alert.alert(
          'Success!',
          'Welcome to anml!',
          [
            { text: "Continue", onPress: () => navigate("TabNavigator", {
              user: responseJSON.user
            }
          )}
          ],
          { cancelable: false }
        )
      } else {
        const error = responseJSON.message

        console.log("Server request failed " + error);
      }
    } catch (error) {
      console.log("Server is down " + error);
    }
  }

  isEnabled = () => {
    const { username, password } = this.state;
    return username.length > 2 && password.length > 7;
  }

  handleNameInputSubmit() {
    this.setState({ focusPasswordInput: true });
  }

  handlePress = () => {
    if (this.isEnabled()) {
      this.pingServer()
    }
  }

  renderContent() {
    const { screen } = this.state;

    if (screen === 'feed') {
      return <Feed />
    } else {
      return (
        <LinearGradient
          style={styles.mainContainer}
          colors={['#FFEBB7', '#0E9577']}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 1.0 }}
          locations={[0.1, 0.8]}
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
                onChangeText={(text) => this.setState({ username: text })}
                keyType='next'
              />
            </View>
            <View style={styles.inputContainer}>
              <InputBottomBorder
                securedText={true}
                placeholder='Password'
                iconName='ios-lock-outline'
                value={this.state.password}
                onChangeText={(text) => this.setState({ password: text })}
                keyType='go'
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

  render() {
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
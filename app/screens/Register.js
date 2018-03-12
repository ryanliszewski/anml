import React, { Component } from 'react';
import { StyleSheet, Alert, View, Platform } from 'react-native';
import { LinearGradient } from 'expo';

//Screens 
import Feed from './Feed.js'

//Components
import InputBottomBorder from '../components/Input';
import ButtonOutline from '../components/ButtonOutline';
import Logo from '../components/Logo';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      screen: null,
      isLoading: false,
    }
  }

  isEnabled = () => {
    const { email, username, password } = this.state;
    return email.length > 7 && username.length > 2 && password.length > 7;
  }

  handlePress = () => {
    const { username, enabled } = this.state

    if (this.isEnabled()) {
      Alert.alert(
        `Registration was successful`,
        `Welcome to anml, ${username}`,
        [
          { text: 'OK', onPress: () => this.setState({ screen: 'feed' }) },
        ],

        { cancelable: false })
    }
  }

  async signupButtonPressed() {

    this.setState({ isLoading: true }) 

      const { username, email, password } = this.state
      const { navigate } = this.props.navigation

      var details = {
        'name': username,
        'email': email,
        'password': password
      };

      var formBody = [];

      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);

        formBody.push(encodedKey + "=" + encodedValue);
      }

      formBody = formBody.join("&");

      try {
        let response = await fetch(`https://daug-app.herokuapp.com/auth/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formBody
        });

        let responseJSON = null

        if (response.status === 201) {

          responseJSON = await response.json();

          console.log(responseJSON)

          this.setState({ isLoading: false })
          Alert.alert(
            'Signed Up!',
            'You have successfully signed up!',
            [
              { text: "Continue", onPress: () => navigate("TabNavigator") }
            ],
            { cancelable: false }
          )
        } else {
          responseJSON = await response.json();
          const error = responseJSON.message

          console.log(responseJSON)

          this.setState({ isLoading: false, errors: responseJSON.errors })
          Alert.alert('Sign up failed!', `Unable to signup.. ${error}!`)
        }
      } catch (error) {
        this.setState({ isLoading: false, response: error })

        console.log(error)

        Alert.alert('Sign up failed!', 'Unable to Signup. Please try again later')
      }
    }

  renderContent() {
    const { buttonEnabled, screen } = this.state;

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
                placeholder='Enter your email'
                iconName='ios-mail-outline'
                value={this.state.email}
                onChangeText={(text) => this.setState({ email: text })}
                keyType='next'
              />
            </View>
            <View style={styles.inputContainer}>
              <InputBottomBorder
                securedText={false}
                placeholder='Enter your username'
                iconName='ios-person-outline'
                value={this.state.username}
                onChangeText={(text) => this.setState({ username: text })}
                keyType='next'
              />
            </View>
            <View style={styles.inputContainer}>
              <InputBottomBorder
                securedText={true}
                placeholder='Enter your password'
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
              onPress={this.isEnabled() && this.signupButtonPressed.bind(this)}
              height={40}
              width={160}
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
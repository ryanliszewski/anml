import React, { Component } from 'react';
import { StyleSheet, Alert, View, Platform, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import Ionicons from '@expo/vector-icons/Ionicons';

//Components
import InputBottomBorder from '../components/Input';
import ButtonOutline from '../components/ButtonOutline';
import Logo from '../components/Logo';

//validation utilities 
import { 
  validEmail, 
  validPassword, 
  validUsername,
  VALID_PASSWORD, 
  VALID_EMAIL,
  VALID_USERNAME
} from '../utils/validation';

let window = Dimensions.get('window');

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      isLoading: false,
    }
  }

  isEnabled = () => {
    const { email, username, password } = this.state;
    return validEmail(email) && validUsername(username) && validPassword(password);
  }

  handlePress = () => {
    if(this.isEnabled()){
      this.pingServer()
    }
  }

  async saveUser(user){
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
      this.props.dispatch(updateUserDetails(user))
    } catch (error){
      //error saving data 
    }
  }

  //POST /auth/signup 
  async pingServer() {

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

          this.saveUser(responseJSON.user)

          Alert.alert(
            'Signed Up!',
            'You have successfully signed up!',
            [
              { text: "Continue", onPress: () => navigate("App") }
            ],
            { cancelable: false }
          )
        } else {
          responseJSON = await response.json();
          const error = responseJSON.message

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
    const { 
      buttonEnabled, 
      password, 
      email,
      username } = this.state;

      console.log(email)

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
                error={VALID_EMAIL}
                valid={validEmail(email)}
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
                error={VALID_USERNAME}
                valid={validUsername(username)}
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
                error= {VALID_PASSWORD}
                valid={validPassword(password)}
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
    marginBottom: 20,
    width: window.width * 0.7,
    height: window.height * 0.05,
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
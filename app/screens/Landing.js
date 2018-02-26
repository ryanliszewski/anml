import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import LoginScreen from './login';


export default class LandingScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentScreen: null
    };

    onPress = (type) => {

    }
  }

  renderContent() {
      const { currentScreen } = this.state;

        if (currentScreen === 'login') {
          return <LoginScreen/>
        } else {
          return (
            <View style={styles.mainContainer}>
              <View
                style={styles.landingContainer}
              >
                <View style={styles.logoContainer}>

                </View>
              
              <View style={styles.buttonContainer}>
                <Button

                />

                <Button 

                />
              </View> 
            </View> 
          );
        }
  }

  render() {
    return(
      this.renderContent()
    );
  }
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1
  },

  landingContainer: {
    flex: 1,
  },

  buttonContainer: {
    height: 60, 

  },

  logoContainer: {

  }
});
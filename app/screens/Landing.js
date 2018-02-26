import React, { Component }  from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import  {LinearGradient}   from 'expo';

import LoginScreen from './login';


export default class LandingScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentScreen: null
    };
  }

  onPress = (type) => {

  }

  renderContent() {
    const { currentScreen } = this.state;

    if (currentScreen === 'login') {
      return <LoginScreen/>
    } else {
      return (
        <View style={styles.mainContainer}>
          <LinearGradient
            style={styles.landingContainer}
            colors={['#FFEBB7','#0E9577']}
            start={{x: 0.0, y: 0.0}}
            end={{x:1.0, y: 1.0}}
            locations={[0.0,0.95 ]}
          >
            <View style={styles.logoContainer}>

            </View>
        </LinearGradient>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={styles.button}
              
                >
              <Text style={styles.buttonText}> Login </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              
              >
              <Text style={styles.buttonText}> Sign Up </Text>
            </TouchableHighlight>
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
    flex: 1,
  },

  landingContainer: {
    flex: 1,
  },

  buttonContainer: {
    height: 70, 
    flexDirection: 'row',
    backgroundColor: '#0E9577'

  },

  button: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },

  buttonText: {
    color: '#FBFAE1',
    fontWeight: 'bold',
    fontSize: 18,
  },

  logoContainer: {

  }
});
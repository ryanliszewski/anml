import React, { Component }  from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import  {LinearGradient}   from 'expo';

//Screens
import LoginScreen from './login';

//Components
import Intro from '../components/Intro';

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
            locations={[0.1,0.8]}
          >
              <Intro/>
        </LinearGradient>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.setState({currentScreen: null})}
              underlayColor='#04DEAD'
            >
              <Text style={styles.buttonText}> Login </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.setState({currentScreen: null})}
              underlayColor='#04DEAD'
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
    alignItems: 'center',
    justifyContent: 'center',

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

  introContainer: {

  }
});
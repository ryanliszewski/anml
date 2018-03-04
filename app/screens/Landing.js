import React, { Component }  from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import  {LinearGradient}   from 'expo';
import Carousel from 'react-native-snap-carousel';

//Screens
import LoginScreen from './Login';
import RegisterScreen from './Register';
import Feed from './Feed';
import Profile from './Profile';

//Components
import Logo from '../components/Logo';
import Name from '../components/Name';

export default class Landing extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentScreen: null
    };
  }

  _renderItem = ({item, index}) => {
    
  }

  renderContent() {
    console.log(this.state.currentScreen);
    const { currentScreen } = this.state;
    const { profile } = this.props;

    if (currentScreen === 'login') {
      return <LoginScreen/>
    } else if (currentScreen === 'register'){
      return <RegisterScreen/>
    } else if (currentScreen === 'feed') {
      return <Feed/>
    
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
              <Logo
                width={200}
                height={200}
              />
              <Name/>
        </LinearGradient>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.setState({currentScreen: 'login'})}
              underlayColor='#04DEAD'
            >
              <Text style={styles.buttonText}> Login </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.setState({currentScreen: 'register'})}
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
});
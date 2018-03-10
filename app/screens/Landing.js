import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { LinearGradient, Font } from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';


//Screens
import LoginScreen from './LoginScreen';
import RegisterScreen from './Register';
import Feed from './Feed';
import Profile from './Profile';

//Components
import Logo from '../components/Logo';
import Name from '../components/Name';

//Constants
import LANDING_SCREEN_CAROUSEL_DATA from '../constants/LANDING_SCREEN_CAROUSEL_DATA'

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: null,
      activeSlide: 0,
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('../../assets/fonts/open-sans/OpenSans-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }


  get pagination() {
    const { activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={4}
        activeDockIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}

        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  _renderItem = ({ item, index }) => {

  }

  renderContent() {
    console.log(this.state.currentScreen);
    const { currentScreen } = this.state;
    const { profile } = this.props;

    if (currentScreen === 'login') {
      return <LoginScreen />
    } else if (currentScreen === 'register') {
      return <RegisterScreen />
    } else if (currentScreen === 'feed') {
      return <Feed />

    } else {
      return (
        <View style={styles.mainContainer}>
          <LinearGradient
            style={styles.landingContainer}
            colors={['#FFEBB7', '#0E9577']}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            locations={[0.1, 0.8]}
          >
            <Logo
              width={200}
              height={200}
            />
            {this.state.fontLoaded &&
              <Name
                font='open-sans-bold'
              />
            }
          </LinearGradient>
  
          {/* TODO - Finish Carousel
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={LANDING_SCREEN_CAROUSEL_DATA}
            onSnapToItem={(index) => this.setState({ activeSlide: index })}
          />
          {this.pagination} */}
          {this.state.fontLoaded &&
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.setState({ currentScreen: 'login' })}
                underlayColor='#04DEAD'
              >
                <Text style={[styles.buttonText, {fontFamily: 'open-sans-bold'}]}> Login </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.setState({ currentScreen: 'register' })}
                underlayColor='#04DEAD'
              >
                <Text style={[styles.buttonText, {fontFamily: 'open-sans-bold'}]}> Sign Up </Text>
              </TouchableHighlight>
            </View>
          }
          </View>
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
          alignItems: 'center',
          justifyContent: 'center',
        },
      
  buttonText: {
          color: '#FBFAE1',
          fontWeight: 'bold',
          fontSize: 18,
        },
});
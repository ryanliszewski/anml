import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Platform, TouchableOpacity} from 'react-native';
import {  Icon } from 'react-native-elements';
import  { LinearGradient }  from 'expo';
import { Ionicons } from '@expo/vector-icons';

//Screens
import Profile from './Profile';

//Constant
import { SOCIAL_FEED_MOCK_DATA } from '../constants/SOCIAL_FEED_MOCK_DATA';
const ICON_NAMES_IOS = ['ios-heart-outline', 'ios-chatbubbles-outline', 'ios-paper-plane-outline'];
//Complete with Platform
const ICON_NAMES_MATERIAL = [];


export default class Login extends React.Component { 

  constructor(props){
    super(props);

    this.state = {
      profile: null, 
      screen: null 
    }
  }

  renderProfile = (profile) => {
    this.setState({
      profile: profile,
      screen: 'profile'
    })
  }

  _renderItem = ({item}) => {
    return(
    <View 
    style={styles.post}
    shadowColor='#829c96'
    shadowRadius='3'
    shadowOffset={{width: 2, height: -2}}
    shadowOpacity={0.75}
    >

      <TouchableOpacity
        onPress={() => this.renderProfile(item)}
      >
        <View style={styles.headerContainer}>
          <Image 
            source={{uri: item.image}}
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
            }}
          />
          <View style={styles.nameLocationContainer}>
            <Text style={styles.nameText}> {item.name} </Text> 
            <Text style={styles.locationText}> {item.location} </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image 
            source={{uri: item.post['image']}}
            style={{
              width: 400,
              height: 400,
              borderRadius: 60,
            }}
        />
      </View> 
      <View style={styles.buttonsContainer}>
        <Ionicons
        name= "ios-heart-outline"
        size={30}
        color='#085947'
        style={{paddingRight: 8}}
        />

        <Ionicons
        name="ios-chatbubbles-outline"
        size={30}
        color='#085947'
        style={{paddingRight: 8}}
        />

        <Ionicons
        name="ios-paper-plane-outline"
        size={30}
        color='#085947'
        />
      </View>  
      <View style={styles.captionContainer}>   
        <Text style={styles.captionText}> {item.post["caption"]} </Text> 
        <Text style={styles.timeText}> {item.post["date"]} </Text>
      </View>
    </View>
    );
  }


  renderContent(){
    const { screen, profile } = this.state; 

    if(screen === 'profile') {
      return <Profile profile={profile}/> 
    } else {
      return(
        <ScrollView style={styles.scroll}>
          <LinearGradient
          style={styles.container}
          colors={['#FFEBB7','#fff9ea']}
          start={{x: 0.0, y: 0.0}}
          end={{x:1.0, y: 1.0}}
          locations={[0.1,0.8]}
          >
          <FlatList
            data={ SOCIAL_FEED_MOCK_DATA }
            style={styles.list}
            renderItem={ ({item, seperator}) => this._renderItem({item, seperator})}
            />
          </LinearGradient>
        </ScrollView>
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
  container: {
    flexGrow: 1,
  },

  scroll: {
    paddingTop: 30,
  },

  nameLocationContainer: {
    paddingLeft: 5,
  },

  nameText: {
    color: '#053e31',
    fontFamily: 'Futura',
    fontSize: 14,
  },

  locationText: {
    color: '#528a7e',
    fontFamily: 'Futura',
    fontSize: 12,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    paddingBottom: 5,
  },

  post: {   
    padding: 10,
  },

  buttonsContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 5,
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
  },

  list: {
    flexGrow: 1,
  },

  captionContainer: {
    paddingBottom: 5,
    paddingLeft: 5,
  },

  captionText: {
    paddingTop: 5,
    color: '#053e31',
    fontFamily: 'Futura',
    fontSize: 14,
  },

  timeText: {
    fontFamily: 'Futura',
    paddingTop: 5,
    color: '#528a7e',
    fontSize: 10,
  }

});
import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Platform, TouchableOpacity } from 'react-native';
import {  Icon } from 'react-native-elements';
import  { LinearGradient }  from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { SOCIAL_FEED_MOCK_DATA } from '../constants/SOCIAL_FEED_MOCK_DATA';

import Profile from './Profile';

export default class Feed2 extends Component {

  constructor(props){
    super(props);

    this.state = {
      screen: null,
      profile: null,
    }
  }

  renderProfile = (profile) => {
    this.setState({
      screen: 'profile',
      profile: profile,
    })
  }

  //This will render one post
  _renderItem = ({item}) => {
    return(
    <View style={styles.itemContainer}>
      
      <TouchableOpacity
        onPress={() => this.renderProfile(item)}
      >
      
      <View style={styles.headerContainer}>
        <Image
          source={{uri: item.image}}
          style={{
            //Always set width and hieght when getting a picture from online 
            width: 50,
            height: 50, 
          }}
        />
        <View style={styles.nameLocation}>
          <Text> {item.name} </Text> 
          <Text> {item.location} </Text> 
        </View>
      </View> 
        </TouchableOpacity>
      
        <Image
          source={{uri: item.post["image"]}}
          style={{
            width:"100%", 
            height:400, 
          }}
        />

      <View style={styles.captionContainer}>
        
        <View style={styles.buttonContainer}>
          <Ionicons
          name="ios-heart-outline"
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
          color="#085947"
          />
        </View>

        <Text> {item.post["caption"]}</Text>
        <Text> {item.post["date"]}</Text>
      </View>
    </View> 
    );
  }


  renderContent(){
    const { screen, profile } = this.state; 
    
    if(screen === 'profile'){
      return <Profile profile={profile}/>
    } else {
      return(
        <ScrollView style={styles.container}>
          <FlatList 
            data={SOCIAL_FEED_MOCK_DATA}
            style={styles.item}
            renderItem={({item, seperator}) => this._renderItem({item, seperator})}
          />
        </ScrollView>
      );
    }
  }

  render(){
    return(
      this.renderContent()
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
  },

  list: {
    flexGrow: 1,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  nameLocation: {
    flexDirection:'column',
  },

  buttonContainer: {
    flexDirection: 'row',
  }
});
import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import {  Icon } from 'react-native-elements';
import  { LinearGradient }  from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { SOCIAL_FEED_MOCK_DATA } from '../constants/SOCIAL_FEED_MOCK_DATA';

const ICON_NAMES_IOS = ['ios-heart-outline', 'ios-chatbubbles-outline', 'ios-paper-plane-outline'];
const ICON_NAMES_MATERIAL = [];

export default class Login extends React.Component { 

  constructor(props){
    super(props);

    console.log(SOCIAL_FEED_MOCK_DATA)
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
      <View style={styles.headerContainer}>
        
        <Image 
          source={{uri: item.image}}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
          }}
        />
        
        <Text> {item.name} </Text> 
      </View>

      <View style={styles.imageContainer}>
      <Image 
          source={{uri: item.post['image']}}
          style={{
            width: 400,
            height: 400,
            borderRadius: 30,
          }}
      />
      </View> 
      
      <View style={styles.buttonsContainer}>
          <Ionicons
          name="ios-heart-outline"
          size={40}
          color='#085947'
          />

          <Ionicons
          name="ios-chatbubbles-outline"
          size={40}
          color='#085947'
          />

          <Ionicons
          name="ios-paper-plane-outline"
          size={40}
          color='#085947'
          />
      </View>  

      <Text style={styles.caption}> {item.post["caption"]} </Text> 
    </View>
    
    );
  }

  render() {
    return(
      <ScrollView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingBottom: 5,
  },

  post: {   
    padding: 10,
    
  },

  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      
  },

  list: {
    flexGrow: 1,
  },

  caption: {
    paddingTop: 10,
    paddingLeft: 10,
    color: '#085947',
    fontFamily: 'Futura'
  }
});
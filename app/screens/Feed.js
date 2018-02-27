import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import {  Icon } from 'react-native-elements';
import  { LinearGradient }  from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { SOCIAL_FEED_MOCK_DATA } from '../constants/SOCIAL_FEED_MOCK_DATA';

export default class Login extends React.Component { 

  constructor(props){
    super(props);

    console.log(SOCIAL_FEED_MOCK_DATA)
  }

  _renderItem({item}){
    
    <View style={styles.post}>
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
          source={{uri: item.post}}
          style={{
            width: 200,
            height: 200,
            borderRadius: 30,
          }}
      />
      </View> 

      <View style={styles.labelsContainer}>
        
      </View> 
    </View>
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <FlatList
          data={ SOCIAL_FEED_MOCK_DATA }
          style={styles.list}
          renderItem={ ({item, seperator}) => (
            <View style={styles.post}>
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
                source={{uri: item.post["image"]}}
                style={{
                  flex: 1,
                  width: 400,
                  height: 200,
                  borderRadius: 30,
                }}
            />

            <Text> {item.post["caption"]} </Text>
            </View> 
      
            <View style={styles.labelsContainer}>
              
            </View> 
          </View>
          )}
        />
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

  },

  post: {
    flex: 1,
    padding: 10,
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      
  },

  list: {
    flexGrow: 1,
  }

});
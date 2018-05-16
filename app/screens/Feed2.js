/*
* @file Feed2.js 
* Component was used to for a code walkthrough. 
* Author: Ryan Liszewski 
*/

import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Platform, TouchableOpacity } from 'react-native';
import {  Icon } from 'react-native-elements';
import  { LinearGradient }  from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Profile from './Profile';

export default class Feed2 extends Component {

  constructor(props){
    super(props);

    this.state = {
      isFeedLoading: true,
      posts: null, 
    }
  }

  renderProfile = (profile) => {
  }

  componentDidMount(){
    //When the component is loaded
    this.getFeed()
  }


  async getFeed() {

    try {
      let response = await fetch(`https://daug-app.herokuapp.com/api/feed`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
      });

      let responseJSON = null

      if (response.status === 200) {

        responseJSON = await response.json();

        console.log(responseJSON)
        
        //Save the posts. 
        this.setState({
          isFeedLoading: false,
          posts: responseJSON,
        })
      } else {
        responseJSON = await response.json();
        const error = responseJSON.message

        console.log(responseJSON)

        this.setState({ errors: responseJSON.errors })
        Alert.alert('Unable to get your feed', `Reason.. ${error}!`)
      }
    } catch (error) {

      this.setState({ isLoading: false, response: error })

      console.log(error)

      Alert.alert('Unable to get the feed. Please try again later')
    }
  }

  _renderImage = (image) => {
    //Render big image
    if(image){
      return(
        <Image
        source={{uri: image}}
        style={{
          width:"100%", 
          height:400, 
        }}
      />
      )
    } else {
      //return place holder image
    }
  }

  _renderProfileImage = (image) => {
    //Render profile image
    if(image){
      return(
        <Image
          source={{uri: image}}
          style={{
            //Always set width and hieght when getting a picture from online 
            width: 50,
            height: 50, 
          }}
        />
      )
    }
  }

  _renderDescription = (description) => {
    //Render Description 
    if(description){
      return(
        <Text> {description} </Text>
      )
    }
  }

  //This will render one post
  _renderItem = ({item: post}) => {

    return (    
    <View style={styles.itemContainer}>
      
      {/* <TouchableOpacity
        onPress={() => this.renderProfile(item)}
      > */}
      
      <View style={styles.headerContainer}>
        
        {this._renderProfileImage(post.user.profile_image)}

        <View style={styles.nameLocation}>
          <Text> {post.user["name"]} </Text> 
          <Text> San Franisco </Text> 
        </View>
      </View> 
        {/* </TouchableOpacity> */}
      
        {this._renderImage(post.image)}

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
       {this._renderDescription(post.description)}
        <Text> 2 hr </Text>
      </View>
    </View> 
    );
  }


  renderContent(){
    const { isFeedLoading, posts } = this.state; 

      return(
        //Scrolls 
        <ScrollView style={styles.container}>
          
          {!isFeedLoading &&

            <FlatList 
              data={posts}
              style={styles.item}
              keyExtractor={(item, post) => post}
              renderItem={({item}) => this._renderItem({item})}
          />
          }
        </ScrollView>
      );
  }

  render(){
    return(
      this.renderContent()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //Scroll
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
import { StyleSheet, Text, TouchableOpacity, ViewPropTypes, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import  propTypes  from 'prop-types';
import React from 'react';  


const Post = (props) => {

  _renderImage = () => {
   
    const { imageDim, onImagePressed } = props; 

    console.log(...props.imageDim)
    if(props.post.image){
      return (
        <TouchableOpacity 
          onPress={onImagePressed}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: props.post.image }}
              style={{...props.imageDim}}
            />
          </View>
        </TouchableOpacity>
      )
    }
  }

  _renderDescription = () => {
    const { description } = props.post;

    if(description) {
      return (
        <Text style={styles.captionText}> { description } </Text>
      )
    }
  }

  _renderProfileImage = () => {
    const { profile_image } = props.post.user
    if(profile_image){
      return (
        <Image
          source={{ uri: profile_image }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
          }}
        />
      )
   }
  }

  _renderProfile = () => {
    const { onProfilePressed } = props; 

    return (
      <TouchableOpacity
      onPress={onProfilePressed}
      >
      <View style={styles.headerContainer}>
        {this._renderProfileImage()}
        <View style={styles.nameLocationContainer}>
          <Text style={styles.nameText}> {props.post.user.name} </Text>
        </View>
      </View>
    </TouchableOpacity>
    )
  }

    return (
      <View
        style={styles.post}
        shadowColor='#829c96'
        shadowRadius='3'
        shadowOffset={{ width: 2, height: -2 }}
        shadowOpacity={0.75}
      >
        {this._renderProfile()}
        {this._renderImage()}
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={props.onLikedPressed}
          >
            <Ionicons
              name="ios-heart-outline"
              size={30}
              color='#085947'
              style={{ paddingRight: 16 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={props.onCommentPressed}
          >
            <Ionicons
              name="ios-chatbubbles-outline"
              size={30}
              color='#085947'
              style={{ paddingRight: 16 }}
            />  
          </TouchableOpacity>
          <Ionicons
            name="ios-paper-plane-outline"
            size={30}
            color='#085947'
          />
        </View>
        <View style={styles.captionContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.nameText}> {props.post.user.name} </Text>
            {this._renderDescription()}
          </View>
          <Text style={styles.timeText}> 2hr </Text>
        </View>
      </View> 
    );
}

Post.propTypes = {
  // onLikedPressed: propTypes.func,
  // onCommentPressed: propTypes.func, 
  // onProfilePressed: propTypes.func, 
  // onImagePressed: propTypes.func,
  // user: propTypes.object, 
    post: propTypes.object.required,
    imageDim: ViewPropTypes.style
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },

  descriptionContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },

  scroll: {
    paddingTop: 30,
    flexGrow: 1,
  },

  nameLocationContainer: {
    paddingLeft: 5,
  },

  likesText: {
    color: '#053e31',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 10,
  },

  nameText: {
    color: '#053e31',
    fontSize: 14,
    fontWeight: 'bold',
  },

  locationText: {
    color: '#528a7e',
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
    color: '#053e31',
    fontSize: 14,
  },

  timeText: {
    paddingTop: 5,
    color: '#528a7e',
    fontSize: 10,
  }
});

export default Post;
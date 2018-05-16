import React, { Component } from 'react';
import { StyleSheet, 
  Text, View, Image, ScrollView, FlatList, Platform, TouchableOpacity, Alert, TouchableHighlight, AsyncStorage, Button, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { updateUserDetails } from '../actions/user';

import Logo from '../components/Logo';
import Post from '../components/Post';

const window = Dimensions.get('window');

class Feed extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
        headerTitle: <Logo width={30} height={30}/>, 
    };
  };

  constructor(props) {
    super(props)

    this.state = {
      feedLoaded: false,
      posts: null,
      errors: null,
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    this.fetchFeed()

    await Font.loadAsync({
      'open-sans-bold': require('../../assets/fonts/open-sans/OpenSans-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });

  }

  async fetchFeed() {
    try {
      let response = await fetch(`https://daug-app.herokuapp.com/api/feed`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
      });

      let responseJSON = null
      responseJSON = await response.json();

      if (response.status === 200) {
        this.setState({
          feedLoaded: true,
          posts: responseJSON,
        })
      } else {
        const error = responseJSON.message

        this.setState({ errors: responseJSON.errors })
        Alert.alert('Unable to get your feed', `Reason.. ${error}!`)
      }
    } catch (error) {
      this.setState({ feedLoaded: true, response: error })

      console.log(error)

      Alert.alert('Unable to get the feed. Please try again later')
    }
  }

  onCommentButtonPressed = () => {

  }

  onLikedButtonPressed = async (post) => {

    try {
      let response = await fetch(`https://daug-app.herokuapp.com/api/posts/${post}/like/${this.state.currentUser.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
      });

      let responseJSON = null

      if (response.status === 201) {
        responseJSON = await response.json();
      } else {
        responseJSON = await response.json();
        const error = responseJSON.message

        this.setState({ errors: responseJSON.errors })
        Alert.alert('Unable to get your feed', `Reason.. ${error}!`)
      }
    } catch (error) {
      this.setState({ isLoading: false, response: error })

      console.log(error)

      Alert.alert('Unable to get the feed. Please try again later')
    }
  }

_renderItem = ({ item: post }) => {
  const { navigate } = this.props.navigation
  return (
    <Post
      post={post}
      imageDim={{
        width: window.width,
        height: window.width,
      }}
    />
  );
} 

_renderContent() {
  const { feedLoaded, posts, fontLoaded } = this.state

  return (
    <ScrollView style={styles.scroll}>
      {feedLoaded && fontLoaded &&
        <FlatList
          data={posts}
          style={styles.list}
          keyExtractor={(item, post) => post}
          renderItem={({ item }) => this._renderItem({ item })}
        />
      }
    </ScrollView>
  );
}
  render() {
    return (
      this._renderContent()
    );
  }
}

const styles = StyleSheet.create({

  scroll: {
    paddingTop: 30,
    flexGrow: 1,
  },
});

export default connect(state => state)(Feed)
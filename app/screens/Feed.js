import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Platform, TouchableOpacity, Alert, TouchableHighlight, AsyncStorage, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { updateUserDetails } from '../actions/user';
import Logo from '../components/Logo';


class Feed extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
        headerTitle: <Logo width={30} height={30}/>, 
        headerLeft: <Button title="logout" onPress={() => params.handleLogout(navigation)} />
    };
};

  constructor(props) {
    super(props)

    this.state = {
      isFeedLoading: true,
      posts: null,
      errors: null,
    }
  }

  async componentDidMount() {
    this.fetchFeed()
    this.props.navigation.setParams({handleLogout: this.logoutUser})
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

      if (response.status === 200) {
        responseJSON = await response.json();
        this.setState({
          isFeedLoading: false,
          posts: responseJSON,
        })
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

  logoutUser(navigation){
    AsyncStorage.clear()
    navigation.navigate('Landing')
  }

  _renderProfileImage = (image) => {
    if (image) {
      return (
        <Image
          source={{ uri: image }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
          }}
        />
      )
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

      console.log(response.status)

      let responseJSON = null

      if (response.status === 201) {
        responseJSON = await response.json();
        console.log(responseJSON)
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


_renderDescription = (description) => {
  if (description) {
    return (
      <Text style={styles.captionText}> {description} </Text>
    )
  }
}

_renderImage = (image) => {
  const { navigate } = this.props.navigation
  if (image) {
    return (
      <TouchableOpacity
        onPress={() => navigate('Comments')}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={{
              width: 400,
              height: 400,
              borderRadius: 60,
            }}
          />
        </View>
      </TouchableOpacity>
    )
  }
}

_renderItem = ({ item: post }) => {
  const { navigate } = this.props.navigation
  return (
    <View
      style={styles.post}
      shadowColor='#829c96'
      shadowRadius='3'
      shadowOffset={{ width: 2, height: -2 }}
      shadowOpacity={0.75}
    >

      <TouchableOpacity
        onPress={() => navigate('Profile', {
          user: post.user,
        })}
      >
        <View style={styles.headerContainer}>
          {this._renderProfileImage(post.user.profile_image)}
          <View style={styles.nameLocationContainer}>
            <Text style={styles.nameText}> {post.user.name} </Text>
          </View>
        </View>
      </TouchableOpacity>
      {this._renderImage(post.image)}
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => this.onLikedButtonPressed(post.id)}
        >
          <Ionicons
            name="ios-heart-outline"
            size={30}
            color='#085947'
            style={{ paddingRight: 16 }}

          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Comments',{
          post: post
        })}
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
          <Text style={styles.nameText}>{post.user.name} </Text>
          {this._renderDescription(post.description)}
        </View>
        <Text style={styles.timeText}> 2hr </Text>
      </View>
    </View>
  );
}

renderContent() {

  const { isFeedLoading, posts } = this.state

  return (

    <ScrollView style={styles.scroll}>

        {/* <LinearGradient
          style={styles.container}
          colors={['#FFEBB7', '#fff9ea']}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 1.0 }}
          locations={[0.1, 0.8]}
        /> */}
      
      {!isFeedLoading &&
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
      this.renderContent()
    );
  }
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

export default connect(state => state)(Feed)


 
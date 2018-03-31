import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Platform, Animated, Dimensions, AsyncStorage, Alert, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { updateUserDetails } from '../actions/user'

//Components 
import StatsLabel from '../components/StatsLabel';
import ButtonOutline from '../components/ButtonOutline';

class Profile extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      headerTitle: params.userName,
      headerTintColor: '#F1EFB9',
      headerRight: <Button title="logout" onPress={() => params.handleLogout()} color='#FFEBB7' />,
    };
  }

  constructor(props) {
    super(props);

    const { user } = this.props.navigation.state.params || this.props.user
    const isCurrentUser = this.props.navigation.state.params ? false : true

    this.state = {
      isPostsLoading: true,
      posts: null,
      user: user,
      isCurrentUser: isCurrentUser,
    }
  }

  componentDidMount = async () => {
    this.props.navigation.setParams({
      userName: this.state.user.name,
      handleLogout: this.logoutUser,
    })
    this.getProfilePosts()
  }

  logoutUser = () => {
    AsyncStorage.clear()
    this.props.dispatch(updateUserDetails(null))
    this.props.navigation.navigate('Landing')
  }

  getProfilePosts = async () => {

    try {
      let response = await fetch(`https://daug-app.herokuapp.com/api/users/${this.state.user.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
      });

      let responseJSON = null

      if (response.status === 200) {

        responseJSON = await response.json();

        this.setState({
          isPostsLoading: false,
          posts: responseJSON.posts,
        })
      } else {
        responseJSON = await response.json();
        const error = responseJSON.message

        this.setState({ errors: responseJSON.errors })
        Alert.alert('Unable to get your feed', `Reason.. ${error}!`)
      }
    } catch (error) {
      this.setState({ isPostsLoading: false, response: error })

      console.log(error)

      Alert.alert('Unable to get the feed. Please try again later')
    }
  }

  _renderBannerImage = (image) => {
    if (image) {
      return (
        <Image
          source={{ uri: image }}
          style={{
            width: '100%',
            height: 200,
          }}
        />
      )
    }
  }

  _renderProfileImage = (image) => {
    if (image) {
      return (
        <Image
          source={{ uri: image }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginLeft: 5,
          }}
        />
      )
    }
  }

  _renderItem = ({ item: post }) => {

    const postSize = Dimensions.get('window').width * (1 / 3);

    if (post.image) {
      return (
        <Image
          source={{ uri: post.image }}
          style={{
            width: postSize,
            height: postSize,
            flexDirection: 'row',
          }}
        />
      )
    } else {
      return (
        <View
          style={{
            width: postSize,
            height: postSize,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text> Anml </Text>
        </View>
      )
    }
  }
  render() {
    const { navigate } = this.props.navigation
    const { isPostsLoading, posts, user, isCurrentUser } = this.state

    return (

      <ScrollView style={{ flexGrow: 1, paddingTop: 30 }}>
        <View>
          {this._renderBannerImage(user.banner_image)}

          <View style={styles.headerContainer}>
            {this._renderProfileImage(user.profile_image)}

            <View style={styles.labelButtonContainer}>
              {!isPostsLoading &&
                <View style={styles.labelContainer}>
                  <StatsLabel
                    stats={String(posts.length)}
                    title='posts'
                  />
                  <StatsLabel
                    stats='261'
                    title='followers'
                  />
                  <StatsLabel
                    stats='1'
                    title='following'
                  />
                </View>
              }
              {isCurrentUser &&
                <View style={styles.buttonContainer}>
                  <ButtonOutline
                    title='edit profile'
                    buttonEnabled={true}
                    width={160}
                    height={30}
                    borderRadius={20}
                    onPress={() => navigate('EditProfile')}
                  />
                </View>
              }
            </View>
          </View>

          {!isPostsLoading &&
            <FlatList
              horizontal={false}
              numColumns={3}
              data={posts}
              style={styles.posts}
              keyExtractor={(item, post) => post}
              automaticallyAdjustContentInsets={false}
              renderItem={({ item }) => this._renderItem({ item })}
            />
          }
        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({

  posts: {
    flexDirection: 'row',
    flexGrow: 1,
    marginTop: -30,
  },

  bio: {
    paddingTop: 10,
  },

  headerContainer: {
    width: '100%',
    top: -30,
    flexDirection: 'row',
    backgroundColor: '#FFEBB7',
  },

  labelContainer: {
    flex: 1,
    paddingTop: 10,
    flexDirection: 'row',
  },

  labelButtonContainer: {
    flex: 1,
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 10,
  }
})

export default connect(state => state)(Profile)
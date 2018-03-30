import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Platform, Animated, Dimensions, AsyncStorage, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

//Components 
import StatsLabel from '../components/StatsLabel';
import ButtonOutline from '../components/ButtonOutline';

export default class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isPostsLoading: true,
      posts: null, 
      user: null, 
    }
  }

  async componentDidMount() {
    // var user = this.props.navigation.state.params.user

    // if(user){
    //   this.setState({user: user});
    // } else {
    //   user = await AsyncStorage.get('user');
    //   this.setState({user: user});
    // }

    // console.log(user)

    this.getProfilePosts()

  }

  async getProfilePosts() {
    
    var user = await AsyncStorage.getItem('user');
    user = JSON.parse(user)
    
    try {
      let response = await fetch(`https://daug-app.herokuapp.com/api/users/${user.id}`,{
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
          user: user,
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
            top: -30,
            marginLeft: 5,
          }}
        />
      )
    }
  }

  _renderItem = ({item}) => {

    const postSize = Dimensions.get('window').width * (1 / 3);

    if(item.image){
      return(
        <Image
          source={{uri: item.image}} 
          style={{
            width: postSize,
            height: postSize,
            flexDirection: 'row',
          }}
        />
      )
    } else {
      return(
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
    const { isPostsLoading, posts, user } = this.state

    return (

      <ScrollView style={{flexGrow: 1}}>
        
        {!isPostsLoading && 
          <View>
            {this._renderBannerImage(user.banner_image)}

            <View style={styles.headerContainer}>
              {this._renderProfileImage(user.profile_image)}

              <View style={styles.labelButtonContainer}>

                <View style={styles.labelContainer}>
                  <StatsLabel
                    stats='1'
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
              </View>
            </View>
          
        {!isPostsLoading &&
          <FlatList
            horizontal={false}
            numColumns={3}
            data={posts}
            style={styles.posts}
            automaticallyAdjustContentInsets={false}
            renderItem={({item}) => this._renderItem({item})}
          />
        }

          </View>
        }

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
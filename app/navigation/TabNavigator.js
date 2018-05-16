import  React from 'react';
import { TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import propTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

//Screens
import Profile from '../screens/Profile';
import CreatePost from '../screens/CreatePost';

//Navigation stacks 
import SocialStack from './SocialStack';
import ProfileStack from './ProfileStack';


const FeedTabIcon = ({ tintColor }) => (
  <Ionicons 
  name="ios-home-outline"
  size={Platform.OS === 'ios' ? 25 : 30}
  color={tintColor}
  />  
);

FeedTabIcon.propTypes = {
  tintColor: propTypes.string.isRequired,
};

const CreatePostTabIcon = ({ tintColor }) => (
  <Ionicons 
  name={"ios-camera-outline"}
  size={Platform.OS === 'ios' ? 25 : 30}
  color={tintColor}
  />  
)

CreatePostTabIcon.propTypes = {
  tintColor: propTypes.string.isRequired,
};

const ProfileTabIcon = ({ tintColor }) => (
  <Ionicons 
  name={"ios-person-outline"}
  size={Platform.OS === 'ios' ? 25 : 30}
  color={tintColor}
  />  
)

ProfileTabIcon.propTypes = {
  tintColor: propTypes.string.isRequired,
};


export default TabNavigator({

    FeedTab: {
      screen: SocialStack,
      navigationOptions:{
        label: 'Feed',
        tabBarIcon: FeedTabIcon
      }
    },

    CreatePostTab: {
      screen: CreatePost,
      navigationOptions: {
        label: 'Add Post',
        tabBarIcon: CreatePostTabIcon
      }
    },

    ProfileTab: {
      screen: ProfileStack,
      navigationOptions: {
        label: 'Profile',
        tabBarIcon: ProfileTabIcon
      }
    },

}, {
  initialRouteName: 'FeedTab', 
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: '#0E9577',
    inactiveTintColor: '#FFEBB7',
    style: {
      backgroundColor: '#FFF',
      padding: Platform.OS === 'ios' ? 5 : 0,
    },
    indicatorStyle: {
      backgroundColor: '#FFF',
    },
    labelStyle: {
      fontSize: 12,
    },
  },
}
);
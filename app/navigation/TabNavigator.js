import { TabNavigator } from 'react-navigation';

import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import CreatePost from '../screens/CreatePost';
import SocialStack from './SocialStack';
import ProfileStack from './ProfileStack';

export default TabNavigator({

    Feed: {
      screen: SocialStack,
    },

    CreatePost: {
      screen: CreatePost
    },

    Profile: {
      screen: Profile
    },

}, {
  initialRouteName: 'Feed', 
}

);
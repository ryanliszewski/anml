import { TabNavigator } from 'react-navigation';

import Feed from '../screens/Feed';
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
      screen: ProfileStack
    },

}, {
  initialRouteName: 'Feed', 
}

);
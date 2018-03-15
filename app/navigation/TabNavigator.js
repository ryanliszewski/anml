import { TabNavigator } from 'react-navigation';

import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import ProfileStack from './ProfileStack';

export default TabNavigator({

    Feed: {
      screen: Feed,
    },

    Profile: {
      screen: ProfileStack
    },

    CreatePost: {
      screen: CreatePost
    }


}, {
  initialRouteName: 'Feed', 
}

);
import { TabNavigator } from 'react-navigation';

import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import CreatePost from '../screens/CreatePost';

export default TabNavigator({

    Feed: {
        screen: Feed,
      },

    Profile: {
      screen: Profile, 
    },

    CreatePost: {
      screen: CreatePost,
    }


}, {
  initialRouteName: 'Feed', 
}

);
import { TabNavigator } from 'react-navigation';

import Feed from '../screens/Feed';
import Profile from '../screens/Profile'

export default TabNavigator({

    Feed: {
      screen: Feed,
    },

    Profile: {
      screen: Profile, 
    },

}, {
  initialRouteName: Feed, 
}

);
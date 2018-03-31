import { TabNavigator } from 'react-navigation';
import Profile from '../screens/Profile';
import CreatePost from '../screens/CreatePost';
import SocialStack from './SocialStack';
import ProfileStack from './ProfileStack';


export default TabNavigator({

    FeedTab: {
      screen: SocialStack,
    },

    CreatePostTab: {
      screen: CreatePost
    },

    ProfileTab: {
      screen: ProfileStack
    },

}, {
  initialRouteName: 'FeedTab', 
}
);
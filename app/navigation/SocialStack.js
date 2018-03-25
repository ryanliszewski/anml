import { StackNavigator } from 'react-navigation';

import PostDetail from '../screens/PostDetail';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile'
import EditProfile from '../screens/EditProfile';

export default StackNavigator({

  PostDetail: {
    screen: PostDetail
  },

  Feed: {
    screen: Feed,
  },
  
  Profile: {
    screen: Profile,
  },

},
{
  initialRouteName: 'Feed'
}
)
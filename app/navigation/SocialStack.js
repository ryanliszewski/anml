import { StackNavigator } from 'react-navigation';

import PostDetail from '../screens/PostDetail';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile'
import EditProfile from '../screens/EditProfile';
import Comments from '../screens/Comments'

export default StackNavigator({

  Comments: {
    screen: Comments,
  },

  Profile: {
    screen: Profile,
  },

  Feed: {
    screen: Feed,
  },

},
{

  navigationOptions: {
    headerStyle: {
      backgroundColor: '#0E9577'
    },
  },

  initialRouteName: 'Feed'
}
)
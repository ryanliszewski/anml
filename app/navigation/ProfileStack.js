import { StackNavigator } from 'react-navigation';

import Profile from '../screens/Profile';
import PostDetail from '../screens/PostDetail';
import EditProfile from '../screens/EditProfile';

export default StackNavigator({

  Profile: {
    screen: Profile,
  },

  PostDetail: {
    screen: PostDetail,
  },

  EditProfile: {
    screen: EditProfile,
  },
},
{
  initialRouteName: 'Profile',
}

)
import { StackNavigator } from 'react-navigation';

import Register from '../screens/Register';
import Login from '../screens/Login';
import Landing from '../screens/Landing';

export default StackNavigator({
  Landing: {
    screen: Landing, 
  },
  Register: {
    screen: Register,
  },
  Login: {
    screen: Login,
  }
},
{
  initialRouteName: 'Landing',
  mode: 'modal',
  
  navigationOptions: {
    headerTransparent: true,
    headerStyle: {
      borderBottomWidth: 0,  
    }
  },
})



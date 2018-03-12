import { StackNavigator } from 'react-navigation';

import IntroStack from './IntroStack';
import TabNavigator from './TabNavigator';


export default StackNavigator({
  IntroStack: {
    screen: IntroStack,
  }, 

    TabNavigator: {
      screen: TabNavigator,
    }
},
{
  initialRouteName: 'TabNavigator',
  headerMode: 'none',
  mode: 'modal'
}

)

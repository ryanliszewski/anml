import { SwitchNavigator } from 'react-navigation';


import RootNavigator from './RootNavigator'; 
import IntroStack from './IntroStack';
import TabNavigator from './TabNavigator';
import AuthLoading from '../screens/AuthLoading';

export default SwitchNavigator(
  {
    Landing: AuthLoading,
    Intro: IntroStack,
    App: TabNavigator,
  },
  {
    initialRouteName: 'Landing',
  }
);
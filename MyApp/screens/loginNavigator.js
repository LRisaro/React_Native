import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import ProfileNavigation from './profileNavigation';
import ScreenLogin from './screenLogin'

const LoginNavigator = createStackNavigator(
    {
      Index: {
        screen: ScreenLogin,
      },
      Profile: {
        screen: ProfileNavigation,
      },
    },
    {
      initialRouteName: 'Index',
      headerMode: 'none',
    }
  );
  
  export default createAppContainer(LoginNavigator);
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings174739Navigator from '../features/Settings174739/navigator';
import UserProfile174732Navigator from '../features/UserProfile174732/navigator';
import Settings174731Navigator from '../features/Settings174731/navigator';
import Settings174729Navigator from '../features/Settings174729/navigator';
import SignIn2174727Navigator from '../features/SignIn2174727/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings174739: { screen: Settings174739Navigator },
UserProfile174732: { screen: UserProfile174732Navigator },
Settings174731: { screen: Settings174731Navigator },
Settings174729: { screen: Settings174729Navigator },
SignIn2174727: { screen: SignIn2174727Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

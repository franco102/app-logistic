import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import AboutScreen from '../screens/aboout/AboutScreen';
import HamburderMenu from '../components/shared/HamburderMenu';

const Tab = createMaterialTopTabNavigator();

export const  TopTabsNavigator=()=> {
  return (
    <>
    <HamburderMenu/>
    <Tab.Navigator>
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    </>
  );
}
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles, Components, Home, Profile, Register, Pro} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks/example';
import MapScreen from '../screens/map/MapScreen';
import { PermissionsScreen } from '../screens/permissions/PermissionsScreen';

const Stack = createStackNavigator();

export default () => {
  // const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator 
    // screenOptions={screenOptions.stack}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: "Home"}}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        // options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: "Articles"}}
      />

      <Stack.Screen 
        name="MapScreen" 
        component={PermissionsScreen}  
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles, Components, Home, Profile, Register, Pro} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks/example';
import MapScreen from '../screens/map/MapScreen';
import { PermissionsScreen } from '../screens/permissions/PermissionsScreen';
import LoginScreen from '../screens/login/LoginScreen'; 
import { ProfileScreen } from '../screens/home/ProfileScreen';


export type RootStacMapkParams={
  Home:undefined,
  Components:undefined,
  // Articles:{id:number,name:string},
  Articles:undefined,
  MapScreen:undefined,
  Profile:undefined,
  Register:undefined,
  PermissionsScreen:undefined,
  LoginScreen:undefined,
}


const Stack = createStackNavigator<RootStacMapkParams>();

export default () => {
  // const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator 
    screenOptions={screenOptions.stack}
    >
      <Stack.Screen 
        name="MapScreen" 
        component={MapScreen}  
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: "Perfil",headerShown: false}} 
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: "Login"}}
      />

      <Stack.Screen
        name="Components"
        component={Components} 
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: "Articles"}}
      />

      
      <Stack.Screen 
        name="PermissionsScreen" 
        component={PermissionsScreen}  
      />
 

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

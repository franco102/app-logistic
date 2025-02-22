import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import LoginScreen from '../screens/login/LoginScreen';
import Menu from './Menu';
import { PermissionsChecker } from '../providers/PermissionsChecker';


export type RootStackParams = {
  Login: undefined,
  DrawerNavigation: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const navigator = useNavigation(); 
  return ( 
        <Stack.Navigator
          screenOptions={{
            headerShown: false ,
            headerStyle: {
              // backgroundColor: '#f4511e',
              elevation: 0, // for Android
              shadowColor: 'transparent', // for Android
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          initialRouteName="Login" 
        >
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen name="DrawerNavigation" component={Menu} options={{ title: 'DrawerNavigation' }} />
        </Stack.Navigator>  
  );
}
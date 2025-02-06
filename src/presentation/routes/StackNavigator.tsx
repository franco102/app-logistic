import { useNavigation } from '@react-navigation/native';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';


export type RootStackParams={
  Home:undefined,
  Products:undefined,
  Product:{id:number,name:string},
  Settings:undefined,
  About:undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator= ()=>  {
  const navigator=useNavigation();

  useEffect(()=>{
    navigator.setOptions({
      headerShow: false
    })
  },[])

    return (
      <Stack.Navigator 
        screenOptions={{
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
      >
        <Stack.Screen 
          name="Home" component={HomeScreen} 
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    );
  }
import {  Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme' 
import PrimaryButton from '../../components/shared/PrimaryButton'
import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';

export const HomeScreen = () => { 
  const navigator = useNavigation<NavigationProp<RootStackParams>>();  

  useEffect(()=>{
    navigator.setOptions({
      headerLeft:()=>(
        <Pressable onPress={()=>navigator.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      )
    })
  },[]);


  return (
    <View style={globalStyles.container}>
      <PrimaryButton label='Productos' onPress={()=>navigator.navigate('Products')}/>
      <PrimaryButton label='Settings' onPress={()=>navigator.navigate('Settings')}/>
      
    </View>
  )
} 


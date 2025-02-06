import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PrimaryButton from '../../components/shared/PrimaryButton';

const AboutScreen = () => {
  const {top}=useSafeAreaInsets();
  const navigation=useNavigation();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        margin:top
      }}
    >
      <Text style={{marginBottom:10}}>AboutScreen</Text>
      <PrimaryButton 
        onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer ) } 
        label='Abrir Menú' 
      />
    </View>
  )
}

export default AboutScreen

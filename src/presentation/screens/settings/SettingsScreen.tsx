import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-gesture-handler'
import { globalStyles } from '../../theme/theme'
import { StackActions, useNavigation } from '@react-navigation/native'
import PrimaryButton from '../../components/shared/PrimaryButton'

export const SettingsScreen = () => {
  const navigation=useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom:10}}>Settings Screen</Text>
      <PrimaryButton label='Regresar' onPress={()=>navigation.goBack()}/>
      <PrimaryButton label='Home' onPress={()=>navigation.dispatch(StackActions.popToTop) }/>
    </View>
  )
}

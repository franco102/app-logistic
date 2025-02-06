import {   Text, View } from 'react-native'
import HamburderMenu from '../../components/shared/HamburderMenu'
import Icon from '@react-native-vector-icons/ionicons'; 
import { IonIcon } from '../../components/shared/IonIcon';
export const Tab1Screen = () => {
  
  
  
  return (
    <View>
      <HamburderMenu/>
      <IonIcon name='add-circle'/>
      <Text>Tab1 Screen</Text>
    </View>
  )
}

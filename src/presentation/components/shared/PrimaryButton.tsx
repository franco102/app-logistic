import React from 'react'
import { globalStyles } from '../../theme/theme'
import { Pressable, Text } from 'react-native' 
interface PrimaryButtonProps {
    label:string,
    onPress:()=>void,
}
const PrimaryButton = ({label,onPress}:PrimaryButtonProps) => {

  return (
    <Pressable 
        onPress={onPress}
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>{label} </Text>
    </Pressable>
  )
}

export default PrimaryButton

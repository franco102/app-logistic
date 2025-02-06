import Icon from '@react-native-vector-icons/ionicons'
import React from 'react'
type IonIconProps={
    name:React.ComponentProps<typeof Icon>['name']
    size?:number
    color?:string
}
// prueba
export const IonIcon = ({name,color='black',size=20}:IonIconProps) => {
  return (
    <Icon name={name} size={size} color={color} />
  )
}

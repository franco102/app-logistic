import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import PrimaryButton from '../../components/shared/PrimaryButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../routes/StackNavigator'


const products=[
  {id:1,name:'Producto 1'},
  {id:2,name:'Producto 2'},
  {id:3,name:'Producto 3'},
  {id:4,name:'Producto 4'},
  {id:5,name:'Producto 5'},
  {id:6,name:'Producto 6'},
  {id:7,name:'Producto 7'},

]

export const ProductsScreen = () => {
    const navigator = useNavigation<NavigationProp<RootStackParams>>();  
  
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom:10,fontSize:30, fontWeight:800}}>Productos</Text>
      <FlatList
        data={products}
        renderItem={({item})=>(
          <PrimaryButton label={item.name} onPress={()=>navigator.navigate('Product',item)}/>
        )}
      />
      <Text style={{marginBottom:10,fontSize:30, fontWeight:800}}>Ajustes</Text>
      <PrimaryButton label='Settings' onPress={()=>navigator.navigate('Settings')}/>
    </View>
  )
}

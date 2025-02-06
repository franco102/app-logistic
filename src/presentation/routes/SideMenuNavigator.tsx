import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import AboutScreen from '../screens/aboout/AboutScreen';
import { StackNavigator } from './StackNavigator';
import { colors, globalStyles } from '../theme/theme';
import { Text, useWindowDimensions, View } from 'react-native';
import { BottomTabsNavigator } from './BottomTabsNAvigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const  SideMenuNavigator=()=> {
  const dimensions=useWindowDimensions();
  return (
    <Drawer.Navigator
    drawerContent={(props)=><CustomDrawerContent {...props}/>}
      screenOptions={{
        headerShown: false,
        drawerType: (dimensions.width>=758)?'permanent': 'slide',
        drawerActiveBackgroundColor:colors.primary,
        drawerActiveTintColor:colors.background,
        drawerInactiveTintColor:colors.primary,
        drawerItemStyle:{
          borderRadius:100,
          paddingHorizontal:20, 
        },
      }}
    >
      <Drawer.Screen options={{drawerIcon:(props)=><IonIcon name='person-add-outline' color={props.color}/>}} name="TAbs" component={BottomTabsNavigator} />
      <Drawer.Screen options={{drawerIcon:(props)=><IonIcon name='bandage' color={props.color}/>}} name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
} 


const CustomDrawerContent=(props:DrawerContentComponentProps)=>{
  return (
    <DrawerContentScrollView>
      <View style={{ height:200,backgroundColor:colors.primary,margin:30,borderRadius:50}}/>
      <DrawerItemList {...props}/>
      <Text>Hola Mundo </Text>
    </DrawerContentScrollView>
  )
}
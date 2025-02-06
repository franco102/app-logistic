import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { colors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const  BottomTabsNavigator=()=> {
  return (
    <Tab.Navigator
        screenOptions={{
            sceneStyle:{ backgroundColor: colors.background },          
            // headerShown:false,
            tabBarLabelStyle:{
                marginBottom: 5,
            },
             tabBarActiveTintColor: colors.primary,
            headerStyle:{ 
                elevation: 0,
                borderColor:'transparent',
                shadowColor:'transparent'
            },
            tabBarStyle:{
                borderTopWidth: 0,
                elevation: 0,
            }
        }}
    >
      <Tab.Screen name="Tab1" options={{title:'Tab1',tabBarIcon:(props)=><IonIcon name='add' color={props.color}/>}} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{title:'Tab2',tabBarIcon:(props)=><IonIcon name='airplane' color={props.color}/>}} component={TopTabsNavigator} />
      <Tab.Screen name="Tab3" options={{title:'Tab3',tabBarIcon:(props)=><IonIcon name='analytics' color={props.color}/>}} component={StackNavigator} />
    </Tab.Navigator>
  );
}
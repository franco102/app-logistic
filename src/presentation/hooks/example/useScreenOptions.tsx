import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  StackHeaderProps ,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import {DrawerActions} from '@react-navigation/native'; 

import {useData} from './useData';
import {useTranslation} from './useTranslation';

import Image from '../../components/examples/Image';
import Text from '../../components/examples/Text';
import useTheme from './useTheme';
import Button from '../../components/examples/Button';
import Block from '../../components/examples/Block';
import { RootStacMapkParams } from '../../routes/Screens';

export default () => {
  // const {t} = useTranslation();
  const {user} = useData();
  const navigation =useNavigation<NavigationProp<RootStacMapkParams>>();
  const {icons, colors, gradients, sizes} = useTheme();

  const menu = {
    headerStyle: {
      elevation: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.7)', 
      borderBottomWidth: 0,
      borderBottomLeftRadius: 16,  
      borderBottomRightRadius: 16, 
    },
    headerShown:true,
    // headerTransparent: true,
    headerTitleContainerStyle: {marginLeft: -sizes.sm}, 
    headerRightContainerStyle: {paddingRight: sizes.s},
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerTitle: ({children}:{children:string}) => <Text p>{children}</Text>,
    headerLeft: () => (
      <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Image source={icons.menu} radius={0} color={colors.icon} />
      </Button>
    ), 
  }  ;

  const options = {
    stack: menu, 
  };

  return options;
};

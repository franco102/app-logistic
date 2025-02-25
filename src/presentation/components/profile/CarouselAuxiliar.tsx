import React from 'react';
import { View, StyleSheet, Dimensions, FlatList, ImageSourcePropType } from 'react-native';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { useTheme } from '../../hooks/example';
import { ThemeAssets, ThemeColors, ThemeGradients, ThemeIcons } from '../../constants/types';

const { width: screenWidth } = Dimensions.get('window');
export interface CarouselProps {
  id: number;
  name: string;
  lastname: string;
  document: string;
  img: ImageSourcePropType;
}



const renderItem = ({ item,colors }: { item: CarouselProps,colors:ThemeColors }) => {
  return (
    <View style={{...styles.cardContainer}}>
      <Card style={{...styles.card,backgroundColor:colors.facebook,borderColor:colors.white ,borderWidth:2}}> 
        <Card.Content style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Avatar.Image source={item.img} size={80} style={{backgroundColor:'transparent',borderColor:colors.white ,borderWidth:2}} />
          <View style={{marginLeft: 16}}>
            <Paragraph style={{color:colors.white}}>Auxiliar</Paragraph>
            <Title style={{color:colors.white}}>{item.name}</Title>
            <Paragraph style={{color:colors.white}}>Doc.: {item.document}</Paragraph>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export const CarouselAuxiliar = () => {
  const { assets, colors} = useTheme();
  const data: CarouselProps[] = [
    {
      id: 1,
      name: 'Alan Franco',
      lastname: 'Silva Huarachi',
      document: '52485758',
      img: assets.auxiliar
    },
    {
      id: 2,
      name: 'Percy ',
      lastname: 'Valdiavia Huamani',
      document: '56985426',
      img: assets.auxiliar
    },
    {
      id: 3,
      name: 'Diego Armando',
      lastname: 'Ramos NAupari',
      document: '36478542',
      img: assets.auxiliar
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item})=>renderItem({item,colors})}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16, 
  },
  cardContainer: {
    width: screenWidth * 0.7, // 80% del ancho de la pantalla
    marginHorizontal: 10, // Espacio entre tarjetas
  },
  card: {
    width: '100%',
    elevation: 4, // Sombra para la tarjeta
  },
});

import React from 'react';
import { View, StyleSheet, Dimensions, FlatList, ImageSourcePropType } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper'; 
import { useTheme } from '../../hooks/example';

const { width: screenWidth } = Dimensions.get('window'); 
export interface CarouselProps {
    id: number;
    name: string;
    lastname: string;
    description: string; 
    img:ImageSourcePropType;
}



const renderItem = ({ item }:{item:CarouselProps}) => {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Cover source={item.img} />
        <Card.Content>
          <Title>{item.name}</Title>
          <Paragraph>{item.description}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export const CarouselAuxiliar = () => {
  const { assets,icons } = useTheme();
  console.log(icons)
  const data:CarouselProps[] = [
    {
      id: 1,
      name: 'Alan Franco',
      lastname: 'Silva Huarachi',
      description: 'Toyota Corolla - ABC-123', 
      img:assets.auxiliar
    },
    {
      id: 2,
      name: 'Percy ',
      lastname: 'Valdiavia Huamani',
      description: 'Honda Civic - XYZ-456',
      img:assets.auxiliar
    },
    {
      id: 3,
      name: 'Diego Armando',
      lastname: 'Ramos NAupari',
      description: 'Ford Mustang - LMN-789',
      img:assets.auxiliar
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
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
    width: screenWidth*0.7  , // 80% del ancho de la pantalla
    marginHorizontal: 10, // Espacio entre tarjetas
  },
  card: {
    width: '100%',
    elevation: 4, // Sombra para la tarjeta
  },
});
 
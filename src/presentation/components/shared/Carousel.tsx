import React from 'react';
import { View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const { width: screenWidth } = Dimensions.get('window');
export interface CarouselProps {
    id: number;
    title: string;
    description: string;
    image: string;
}

const data:CarouselProps[] = [
  {
    id: 1,
    title: 'Vehículo 1',
    description: 'Toyota Corolla - ABC-123',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Vehículo 2',
    description: 'Honda Civic - XYZ-456',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Vehículo 3',
    description: 'Ford Mustang - LMN-789',
    image: 'https://via.placeholder.com/300',
  },
];

const renderItem = ({ item }:{item:CarouselProps}) => {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: item.image }} />
        <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>{item.description}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export const CarouselAuxiliar = () => {
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
    width: screenWidth * 0.8, // 80% del ancho de la pantalla
    marginHorizontal: 10, // Espacio entre tarjetas
  },
  card: {
    width: '100%',
    elevation: 4, // Sombra para la tarjeta
  },
});
 
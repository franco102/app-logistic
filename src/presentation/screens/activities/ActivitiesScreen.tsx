import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, Text } from 'react-native-paper';

const ActivitiesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Actividad</Title>
          <Paragraph>40</Paragraph>
          <Paragraph>Demora por neumático</Paragraph>
          <Paragraph>00:15:45</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>How ways to meet</Title>
          <Paragraph>your business goals is</Paragraph>
          <Button mode="contained" onPress={() => console.log('Read Article')}>
            Read Article
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Lista de Actividades</Title>
          {[...Array(5)].map((_, index) => (
            <View key={index} style={styles.activityItem}>
              <Text>demora por neumático 15:03:56</Text>
            </View>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
  activityItem: {
    paddingVertical: 5,
  },
});

export default ActivitiesScreen;
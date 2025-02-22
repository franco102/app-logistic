// App.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Platform, PermissionsAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker, UrlTile } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
} from 'react-native-cool-speedometer';
import { IonIcon } from '../../components/shared/IonIcon';
import { Button } from '../../components/examples';
import { useTheme } from '../../hooks/example';
import { ProgressBar, MD3Colors, Portal, FAB, List, Card } from 'react-native-paper';

const MapScreen = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [kilometers, setKilometers] = useState(128)
  const [displayRoutes, setDisplayRoutes] = useState<"none" | "flex" | "contents" | undefined>('none')
  const [displayActivities, setDisplayActivities] = useState<"none" | "flex" | "contents" | undefined>('none')
  useEffect(() => {
    setLocation({ latitude: -11.878861419502057, longitude: -77.02969132984346 })
  }, []);
  const { assets, colors, gradients, sizes } = useTheme();
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude)
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: { open: boolean }) => setState({ open });

  const { open } = state;

  return (
    <View style={styles.container}>
      {location ? (
        <View style={{ flex: 1 }}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            showsUserLocation={true}
          >
            <UrlTile
              urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              maximumZ={19}  // Nivel máximo de zoom
              flipY={true}
            />
            <Marker coordinate={location} title="Tu ubicación" />
          </MapView>
          <View style={{ position: 'absolute', top: '10%', right: 0, padding: 5, backgroundColor: colors.gray, width: '50%', borderRadius: 20, display: displayActivities }}>
            <Card>
              <Card.Content style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center', fontSize: 20 }} >Actividad</Text>
                <Speedometer
                  value={40}
                  max={59}
                  angle={360}
                  width={120}
                  lineCap="round"
                  accentColor="orange"
                >
                  <Arc arcWidth={20} />
                  <Progress arcWidth={20} />
                  <Indicator fixValue fontSize={60} fill="orange" y={65} textAnchor="middle" alignmentBaseline="middle" />
                </Speedometer>

                <Text style={{ textAlign: 'center', fontSize: 15 }} >Demora por neumatico </Text>
              </Card.Content>
            </Card>
          </View>
          <View style={{ position: 'absolute', top: '10%', padding: 5, backgroundColor: colors.gray, width: '50%', borderRadius: 20, display: displayRoutes }}>
            <List.Section title="Rutas">
              <List.Accordion
                title="Ruta N°1"
                right={props => <IonIcon name={props.isExpanded ? 'chevron-up-outline' : 'chevron-down-outline'} />}
                left={props => <List.Icon {...props} icon={(props) => <IonIcon name='git-branch-outline' />} />}>
                <List.Item title="Parada 1" right={props => <IonIcon name={'flag'} color='green' />} />
                <List.Item title="Parada 2" right={props => <IonIcon name={'flag'} color='green' />} />
              </List.Accordion>

              <List.Accordion
                title="Ruta N°2"
                right={props => <IonIcon name={props.isExpanded ? 'chevron-up-outline' : 'chevron-down-outline'} />}
                left={props => <List.Icon {...props} icon={(props) => <IonIcon name='git-branch-outline' />} />}
              // expanded={expanded}
              // onPress={handlePress}
              >
                <List.Item title="Parada 1" right={props => <IonIcon name={'flag'} color='green' />} />
                <List.Item title="Parada 2" right={props => <IonIcon name={'flag'} color='green' />} />
                <List.Item title="Parada 3" right={props => <IonIcon name={'flag'} color='red' />} />
                <List.Item title="Parada 4" right={props => <IonIcon name={'flag'} color='red' />} />
                <List.Item title="Parada 5" right={props => <IonIcon name={'flag'} color='red' />} />
              </List.Accordion>
            </List.Section>
          </View>
          <FAB.Group
            open={open}
            visible
            icon={props => <IonIcon size={25} name={(open ? 'close-circle-outline' : 'add-circle-outline')} />}
            actions={[
              {
                icon: props => <IonIcon name='notifications-outline' />,
                label: 'Actividad',
                onPress: () => setDisplayActivities((sate) => sate ? undefined : 'none')
              },
              {
                icon: props => <IonIcon name='layers-outline' />,
                label: 'Rutas',
                onPress: () => setDisplayRoutes((sate) => sate ? undefined : 'none')
              },
              {
                icon: props => <IonIcon name='map-sharp' />,
                label: 'Mapa',
                onPress: () => <IonIcon name='share-social-outline' />,
              },
              {
                icon: props => <IonIcon name='disc-outline' />,
                label: 'Ubicame',
                onPress: () => <IonIcon name='add' />
              },
            ]}
            onStateChange={(e) => onStateChange(e)}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
            backdropColor='transparent'
            // fabStyle={{backgroundColor:gradients.primary?.toString()}}

          /> 
          <View style={{ position: 'absolute', bottom: 0, left: 0, paddingRight: 5, paddingBottom: 5 }}>
            <Speedometer
              value={kilometers}
              fontFamily='squada-one'
              width={120}
            >
              <Background />
              <Arc />
              <Needle circleRadius={10} circleColor={colors.primary.toString()} baseOffset={10} />
              <Progress color={colors.primary.toString()} />
              <Marks fontSize={15} step={15} />
              <Indicator fixValue fontSize={20} />
            </Speedometer>
          </View>
        </View>
      ) : (
        <Text style={styles.loading}>Cargando ubicación...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loading: {
    flex: 1,
    textAlign: 'center',
    marginTop: 50,
  },
  floatingButton: {
    backgroundColor: '#00BFFF', // Color celeste
    width: 60, // Ancho del botón
    height: 60, // Alto del botón
    borderRadius: 30, // Hace el botón redondo
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center',
  },
});

export default MapScreen

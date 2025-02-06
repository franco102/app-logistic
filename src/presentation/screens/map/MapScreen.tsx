// App.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Platform, PermissionsAndroid, StyleSheet } from 'react-native';
import MapView, { Marker, UrlTile } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const   MapScreen=()=> {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    // const requestLocationPermission = async () => {
    //   if (Platform.OS === 'android') {
    //     try {
    //       const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //         {
    //           title: 'Permiso de ubicación',
    //           message: 'Esta app necesita acceder a tu ubicación para mostrar el mapa',
    //           buttonNeutral: 'Preguntar más tarde',
    //           buttonNegative: 'Cancelar',
    //           buttonPositive: 'OK',
    //         }
    //       );
    //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         getCurrentLocation();
    //       } else {
    //         console.log('Permiso de ubicación denegado');
    //       }
    //     } catch (err) {
    //       console.warn(err);
    //     }
    //   } else {
    //     // iOS: la solicitud se maneja automáticamente al llamar a getCurrentPosition
    //     getCurrentLocation();
    //   }
    // };
    // requestLocationPermission();
    setLocation({ latitude: -11.878861419502057, longitude: -77.02969132984346 })
  }, []);

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

  return (
    <View style={styles.container}>
      {location ? (
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
            urlTemplate="https://mt.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
            maximumZ={19}  // Nivel máximo de zoom
            flipY={false}
          />
          <Marker coordinate={location} title="Tu ubicación" />
        </MapView>
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
});

export default MapScreen

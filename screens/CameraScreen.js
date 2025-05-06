import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function CameraScreen() {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const openCamera = async () => {
    // Request camera permission
    const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraStatus !== 'granted') {
      Alert.alert('Permission required', 'Camera permission is needed to take a photo.');
      return;
    }

    // Request location permission
    const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
    if (locationStatus !== 'granted') {
      Alert.alert('Permission required', 'Location permission is needed to tag photos.');
      return;
    }

    // Launch camera
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);

      // Get location
      const location = await Location.getCurrentPositionAsync({});
      const timestamp = new Date().toISOString();

      // Navigate to Share screen with metadata
      navigation.navigate('Share', {
        photoUri: uri,
        location: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        timestamp: timestamp,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Take Photo" onPress={openCamera} />
      {image && (
        <Image source={{ uri: image }} style={styles.preview} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  preview: {
    marginTop: 20,
    width: 300,
    height: 400,
    borderRadius: 10,
  },
});

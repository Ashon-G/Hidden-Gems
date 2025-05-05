import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function CameraScreen() {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Camera permission denied');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      navigation.navigate('Share', { photoUri: uri }); // ✅ navigate to Share screen
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

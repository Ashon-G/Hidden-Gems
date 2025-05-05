import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

const dummyViewpoints = [
  {
    id: 1,
    title: 'Cave Viewpoint',
    latitude: 37.7749,
    longitude: -122.4194,
    image: 'https://via.placeholder.com/300',
    description: 'Beautiful ocean view from inside the cave',
  },
  {
    id: 2,
    title: 'Hill Viewpoint',
    latitude: 37.7849,
    longitude: -122.4094,
    image: 'https://via.placeholder.com/300/1c9',
    description: 'City skyline from the top of the hill',
  },
];

export default function MapScreen() {
  const [selectedView, setSelectedView] = useState(null);
  const [search, setSearch] = useState('');

  const handleMarkerPress = (location) => {
    setSelectedView(location);
  };

  const handleSearch = (text) => {
    setSearch(text);
    const found = dummyViewpoints.find((v) =>
      v.title.toLowerCase().includes(text.toLowerCase())
    );
    if (found) {
      setSelectedView(found);
    }
  };

  return (
    <View style={styles.container}>
      {/* Full-screen Map */}
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {dummyViewpoints.map((loc) => (
          <Marker
            key={loc.id}
            coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
            title={loc.title}
            onPress={() => handleMarkerPress(loc)}
          >
            <Image source={{ uri: loc.image }} style={styles.markerImg} />
          </Marker>
        ))}
      </MapView>

      {/* Overlays in Safe Area */}
      <SafeAreaView style={StyleSheet.absoluteFill} pointerEvents="box-none">
  <View style={styles.overlay} pointerEvents="box-none">
    {/* Search Bar */}
    <TextInput
      placeholder="Search location..."
      value={search}
      onChangeText={handleSearch}
      style={styles.search}
      pointerEvents="auto"
    />

    {/* Photo Preview Card */}
    {selectedView && (
      <View style={styles.card} pointerEvents="auto">
        <Image source={{ uri: selectedView.image }} style={styles.cardImg} />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{selectedView.title}</Text>
          <Text>{selectedView.description}</Text>
        </View>
      </View>
    )}
  </View>
</SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  markerImg: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#01C9AF',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  search: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  cardText: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
});

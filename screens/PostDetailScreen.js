import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PostDetailScreen() {
  const route = useRoute();
  const { postId } = route.params || {};

  const imageUri = 'https://via.placeholder.com/600'; // You could vary this by index if needed

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.caption}>Post ID: {postId}</Text>
      <Text style={styles.caption}>This is a detailed view of the post.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  caption: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
});

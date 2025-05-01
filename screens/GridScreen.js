import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = ['All', 'Nature', 'Food', 'Art', 'Historic', 'Urban'];
const dummyImages = Array(12).fill('https://via.placeholder.com/300');

export default function GridScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      >
        {categories.map((cat, i) => (
          <TouchableOpacity key={i} style={styles.categoryBtn}>
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={dummyImages}
        numColumns={2}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  categoryList: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    gap: 10,
  },
  categoryBtn: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
  },
  grid: {
    paddingHorizontal: 6,
    paddingTop: 8,
  },
  image: {
    width: '48%',
    aspectRatio: 1,
    margin: '1%',
    borderRadius: 12,
  },
});

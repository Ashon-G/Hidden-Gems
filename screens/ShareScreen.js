import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const users = [
  'Liam', 'Noah', 'Emma', 'Olivia', 'Ava', 'Sophia', 'Isabella', 'Mia',
];

export default function ShareScreen({ route }) {
  const [search, setSearch] = useState('');
  const { photoUri } = route.params || {}; // ✅ Get photo from navigation

  const filteredUsers = users.filter((u) =>
    u.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {photoUri && (
        <Image source={{ uri: photoUri }} style={styles.imagePreview} />
      )}
      <TextInput
        placeholder="Search users..."
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.userRow}>
            <Text>{item}</Text>
            <Text style={styles.send}>Send</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  imagePreview: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  userRow: {
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  send: {
    color: '#3498db',
    fontWeight: '500',
  },
});

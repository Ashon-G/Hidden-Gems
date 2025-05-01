import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const messages = Array(8).fill({ username: 'User123', message: 'Hello!' });

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.msgItem}>
            <Text style={styles.username}>{item.username}</Text>
            <Text>{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  msgItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  username: {
    fontWeight: 'bold',
  },
});

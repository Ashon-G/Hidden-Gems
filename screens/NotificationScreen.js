import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const notifications = [
  { type: 'like', user: 'Jane', message: 'liked your photo' },
  { type: 'comment', user: 'Alex', message: 'commented: Amazing shot!' },
  { type: 'follow', user: 'Sam', message: 'started following you' },
  { type: 'like', user: 'Lily', message: 'liked your post' },
];

const getIcon = (type) => {
  switch (type) {
    case 'like':
      return 'heart';
    case 'comment':
      return 'chatbubble-ellipses';
    case 'follow':
      return 'person-add';
    default:
      return 'notifications';
  }
};

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={notifications}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Left Icon */}
            <Ionicons
              name={getIcon(item.type)}
              size={24}
              color="#444"
              style={styles.leftIcon}
            />

            {/* Profile Picture */}
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.avatar}
            />

            {/* Message */}
            <View style={styles.textBox}>
              <Text style={styles.username}>{item.user}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  leftIcon: {
    marginRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: '#ddd',
  },
  textBox: {
    flex: 1,
  },
  username: {
    fontWeight: '600',
    fontSize: 15,
  },
  message: {
    fontSize: 14,
    color: '#555',
  },
});

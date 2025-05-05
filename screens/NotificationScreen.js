import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const notifications = [
  { type: 'like', user: 'Jane', message: 'liked your photo', time: '2h' },
  { type: 'comment', user: 'Alex', message: 'commented: Amazing shot!', time: '4h' },
  { type: 'follow', user: 'Sam', message: 'started following you', time: '1d' },
  { type: 'message', user: 'Lily', message: 'sent you a message', time: '1d' },
];

export default function NotificationsScreen() {
  const navigation = useNavigation();

  const handlePress = (item) => {
    if (item.type === 'message') {
      navigation.navigate('Message', { user: item.user });
    } else {
      // Optional: link to profile, post, etc.
      console.log(`Tapped on ${item.type} from ${item.user}`);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={notifications}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.avatar}
            />
            <View style={styles.textBox}>
              <Text style={styles.message}>
                <Text style={styles.username}>{item.user} </Text>
                {item.message}
              </Text>
              <Text style={styles.time}>{item.time} ago</Text>
            </View>
          </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
    fontSize: 15,
    color: '#333',
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});

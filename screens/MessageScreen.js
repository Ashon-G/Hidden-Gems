import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const messages = [
  { user: 'Jane', text: 'Hey! Did you find any new places?' },
  { user: 'You', text: 'Yes! Check out my latest post 😄' },
];

export default function MessageScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <FlatList
          data={messages}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={item.user === 'You' ? styles.msgRight : styles.msgLeft}>
              <Text>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={styles.list}
        />

        <TextInput
          placeholder="Type a message..."
          style={styles.input}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { flex: 1, padding: 10 },
  list: { flexGrow: 1, justifyContent: 'flex-end' },
  msgLeft: {
    alignSelf: 'flex-start',
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  msgRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#d1f0c4',
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
});

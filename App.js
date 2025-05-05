import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { theme } from './styles/theme';

// Main tab screens
import MapScreen from './screens/MapScreen';
import GridScreen from './screens/GridScreen';
import CameraScreen from './screens/CameraScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';

// Stack-only (hidden) screens
import PostDetailScreen from './screens/PostDetailScreen';
import MessageScreen from './screens/MessageScreen';
import ShareScreen from './screens/ShareScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tabs shown in bottom bar
function MainTabs() {
  return (
    <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ color, size }) => {
      let iconName;
      if (route.name === 'Map') iconName = 'map';
      else if (route.name === 'Explore') iconName = 'grid';
      else if (route.name === 'Camera') iconName = 'diamond';
      else if (route.name === 'Activity') iconName = 'heart';
      else if (route.name === 'Profile') iconName = 'person';

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: theme.tabActive,
    tabBarInactiveTintColor: theme.tabInactive,
    tabBarStyle: {
      backgroundColor: theme.background,
      paddingBottom: 5,
      height: 60,
    },
  })}
>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Explore" component={GridScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Activity" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main tab navigator */}
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />

        {/* Hidden stack screens accessible via navigate() */}
        <Stack.Screen name="PostDetail" component={PostDetailScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="Share" component={ShareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
